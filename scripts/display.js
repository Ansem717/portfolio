//Create empty object to store functions
(function(module) {
  var display={};

  display.MainNavigation = function() {
    $('#main-menu').on('click', '#tab', function() {
      $('.placeholder').hide();
      $('#' + $(this).data('filter') + "-placeholder").show();
    });
    $('#tab').data('filter', 'about').click();
  }

  display.initIndexPage = function() {
    Project.all.map(function(ele, index, arr){
      $('#project-placeholder').append(ele.toHtml(ele, index, arr));
    });

    display.MainNavigation();
  }

  module.display = display;
})(window);
