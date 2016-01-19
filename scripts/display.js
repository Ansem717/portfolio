//Create empty object to store functions
(function(module) {
  var display={};

  // display.MainNavigation = function() {
  //   console.log("Howdy!")
  //   $('#main-menu').on('click', '.tab', function() {
  //     console.log($(this));
  //     $('.placeholder').hide();
  //     $('#' + $(this).data('filter') + '-placeholder').show();
  //   });
  //   $('.tab').data('filter', 'about').click();
  // }

  display.showSidebar = function() {
    $('#flip-container').on('click', function() {
      document.querySelector('#flip-container').classList.toggle('flip');
      document.querySelector('#all').classList.toggle('move');
      document.querySelector('#mini-menu').classList.toggle('move');
      /*
      $('#mini-menu').toggle('slide', { direction: 'right' }, 1000);
      $('#MoveMe').toggle('slide', { direction: 'left' }, 1000);
      $('.mobilemenu').animate({opacity: "toggle"}, 1000);
      $('.closemobilemenu').animate({opacity: "toggle"}, 1000);
      */
      // $('mobilemenu').toggle('slide', { direction: 'left' }, 1000);
    });
    //fixes the sidebar
    $(window).on('scroll', function(){
      var sclTop = $(window).scrollTop();
      var $mm = $('#mini-menu');
      if ( $('#flip-container').attr('class') === 'flip') {
        if ( parseInt($mm.css('height')) <= sclTop){
          $('#flip-container').click();
        }
      }
    });
  }

  display.initIndexPage = function() {
    Project.all.map(function(ele, index, arr){
      $('#project-placeholder').append(ele.toHtml(ele, index, arr));
    });

    // display.MainNavigation();
    display.showSidebar();
  }

  module.display = display;
})(window);
