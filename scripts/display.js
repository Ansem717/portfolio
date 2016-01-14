//Create empty object to store functions
var display={};

display.MainNavigation = function() {
  $('#main-menu').on('click', '#tab', function() {
    $('.placeholder').hide();
    $('#' + $(this).data('filter') + "-placeholder").show();
  });
  $('#tab').data('filter', 'about').click();
}

display.initIndexPage = function() {
  console.log("display.initIndexPage start")
  Project.all.forEach(function(ele, index, arr){
    $('#project-placeholder').append(ele.toHtml(ele, index, arr));
  });

  display.MainNavigation();
  console.log("display.initIndexPage finish; MainNavigation() should be working");
}
