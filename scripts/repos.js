/* global $ githubToken window:true*/
/* eslint quote-props: 0*/

(function(module) {
  var repo = {};

  repo.sitories = [];

  repo.fetch = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/Ansem717/repos' +
        '?per_page=100' +
        '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        repo.sitories = data;
      },
      error: function(data, message) {
        console.log('WHY WONT YOU WORK!!');
        console.log('Data = ' + data);
        console.log('Mssg = ' + message);
      }
    }).done(callback);
  };

  module.repo = repo;
})(window);
