/* global repo displayRepo $:true*/
/* the above is to tell the linter that these global vars do exist */

/* **** About Controller *****/

var aboutController = {};

aboutController.init = function() {
  $('.placeholder').hide();
  $('#about-placeholder').show();
  repo.fetch(displayRepo.init);
};

/* *** Project Controller ****/

var projController = {};

projController.init = function() {
  $('.placeholder').hide();
  $('#project-placeholder').show();
};
