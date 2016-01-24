/* global $ document Project window:true*/
/* the above is instructions to the linter */

 // Create empty object to store functions
(function(module) {
  var display = {};

  display.showSidebar = function() {
    $('#flip-container').on('click', function() {
      document.querySelector('#flip-container').classList.toggle('flip');
      document.querySelector('#all').classList.toggle('move');
      document.querySelector('#mini-menu').classList.toggle('move');
    });

    // close the SIDEBAR on certain conditions
    $(window).on('scroll', function() {
      if ($('#flip-container').attr('class') === 'flip') {
        if ($('#mini-menu').height() <= $(window).scrollTop()) {
          $('#flip-container').click();
        }
      }
    });
    $(window).on('resize', function() {
      if ($('#flip-container').attr('class') === 'flip') {
        if (window.innerWidth >= 604) {
          $('#flip-container').click();
        }
      }
    });
  };

  display.initIndexPage = function() {
    Project.all.map(function(ele, index, arr) {
      $('#project-placeholder').append(ele.toHtml(ele, index, arr));
    });
    display.showSidebar();
  };

  module.display = display;
})(window);
