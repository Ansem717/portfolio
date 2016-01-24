/* global $ repo window:true*/
/* eslint */

(function(module) {
  var displayRepo = {};

  displayRepo.init = function() {
    $('#RepoList').empty();
    $('#RepoList').append(
      repo.sitories.map(function(ele) {
        return '<li><a href="' + ele.html_url + '">' + ele.full_name + '</a>';
      })
    );
  };

  module.displayRepo = displayRepo;
})(window);
