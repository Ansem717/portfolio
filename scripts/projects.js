//This is going to read project-template-outline.html and author-template.html
//translate it for template use
//and plug in projData.js's variables accordingly.
//Then it will perform any necessary actions before displaying the articles, like sorting them.
//
//After some trial and error, I couldn't figure out how to load the external html and run it through handlebars.
//Settling down to including the template directly into index.html for now, as to move on with the project.
//Will revisit later.


//I'm reading up on the Class-06 Pair Assignment's TODOs to help
//educate me more on the code I need to write for this Class-06 Portfolio User Stories
//I will be using similar naming convensions so I can learn while reading and re-typing the code

function Project(itm){
  this.title = itm.title;
  this.category = itm.category;
  this.description = itm.description;
  this.imgSpoiler = itm.imgSpoiler;
  this.pubDate = itm.pubDate
  this.projectLink = itm.projectLink;
  this.authorPlaceholder = '';
  this.authors = itm.authors;
}

//Instead of a global `projects = []` array, let's track this list directly on the constructor function
//*******  I'm confused on the reasoning behind this change. *********//
//var projects = [];
Project.all = [];


Project.prototype.toHtml = function(ele, index, arr) {
  var finAuthors = '';   //delcare local variables
  var finProj = '';
  var authorTemplate = $('#authTemp').html();
  var projectTemplate = $('#projTemp').html();
  var dataSource = this;
  var compAuth = Handlebars.compile(authorTemplate);
  var compProj = Handlebars.compile(projectTemplate);
  if(index === 0){  //Place the heading before the first item only
    finProj = "<h1>Projects I've made</h1>"
  }
  dataSource.authors.forEach(function(ele, index, arr){  //Compile for each author.
    finAuthors += compAuth(ele);
    if(index !== arr.length-1){
      finAuthors += " and "; //Place " and " after each author that isn't the last one. We don't need to do anything for the last author.
    };
  });
  this.authorPlaceholder = finAuthors;
  if(index !== arr.length-1){
    finProj += compProj(dataSource);
  } else {
    finProj += compProj(dataSource);
  }
  return finProj;
}

Project.loadAll = function(projData) {
  projData.sort(function(a,b) {
    return (new Date(b.pubDate)) - (new Date(a.pubDate));
  });
  projData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
}

Project.fetchAll = function() {
  $.ajax({
    dataType: "json",
    url: "/data/projData.JSON",
    success: function(data, status, xhr){
      if(localStorage.etag === xhr.getResponseHeader('ETag')){
        Project.loadAll(JSON.parse(localStorage.projData));
        console.log("Inside Fetch All Function: ETag exists");
        display.initIndexPage();
      } else {
        localStorage.etag = xhr.getResponseHeader('ETag');
        $.getJSON('/data/projData.JSON', function(projData){
          Project.loadAll(projData);
          localStorage.projData = JSON.stringify(projData);
          console.log("Inside Fetch All Function: ETag does not exist");
          display.initIndexPage();
        });
      }
    },
    error: function (request, status, error) {
        alert(error);
        console.log(error);
    }
  });
}
