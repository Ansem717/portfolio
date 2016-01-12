//Create empty object to store functions
var display={};

display.MainNavigation = function() {
  $('#main-menu').on('click', '#tab', function() {
    $('.placeholder').hide();
    $('#' + $(this).data('filter') + "-placeholder").show();
  });
  $('#tab').data('filter', 'about').click();
}

$(document).ready(function() {
  display.MainNavigation();
})
