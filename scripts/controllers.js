var aboutController = {};
var projController = {};

aboutController.init = function(){
  console.log('about controller');
  console.log($('#about').css('display'));
  $('.placeholder').hide();
  $('#about-placeholder').show();
}

projController.init = function(){
  console.log('project controller');
  console.log($('#projects').css('display'));
  $('.placeholder').hide();
  $('#project-placeholder').show();
}
