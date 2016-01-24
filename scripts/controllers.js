/* global age repo displayRepo $:true*/
/* the above is to tell the linter that these global vars do exist */

/* **** About Controller *****/

var aboutController = {};

aboutController.init = function() {
  age.calculate();
  repo.fetch(displayRepo.init);
  $('.placeholder').hide();
  $('#about-placeholder').show();
};

/* *** Project Controller ****/

var projController = {};

projController.init = function() {
  $('.placeholder').hide();
  $('#project-placeholder').show();
};
