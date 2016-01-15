//Create empty object to store functions
(function(module) {
  var display={};

  display.MainNavigation = function() {
    $('#main-menu').on('click', '.tab', function() {
      $('.placeholder').hide();
      $('#' + $(this).data('filter') + "-placeholder").show();
    });
    $('.tab').data('filter', 'about').click();
  }

  display.showSidebar = function() {
    $('#flip-container').on('click', function() {
      document.querySelector('#flip-container').classList.toggle("flip");
      /*
      $('#main-menu').toggle('slide', { direction: 'right' }, 1000);
      $('#MoveMe').toggle('slide', { direction: 'left' }, 1000);
      $('.mobilemenu').animate({opacity: "toggle"}, 1000);
      $('.closemobilemenu').animate({opacity: "toggle"}, 1000);
      */
      // $('mobilemenu').toggle('slide', { direction: 'left' }, 1000);
    });
  }

  display.initIndexPage = function() {
    Project.all.map(function(ele, index, arr){
      $('#project-placeholder').append(ele.toHtml(ele, index, arr));
    });

    display.MainNavigation();
    display.showSidebar();
  }

  module.display = display;
})(window);
