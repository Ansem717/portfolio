/* global $ window:true*/

(function(module) {
  var age = {};

  age.calculate = function() {
    $('.age').empty();
    var ageInMili = new Date() - new Date('July 17, 1995');
    var ageInYear = Math.floor(ageInMili / 1000 / 60 / 60 / 24 / 365);
    $('.age').append(ageInYear);
  };

  module.age = age;
})(window);
