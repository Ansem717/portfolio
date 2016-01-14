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
  //delcare local variables
  var finAuthors = '';
  var finProj = '';
  var authorTemplate = $('#authTemp').html();
  var projectTemplate = $('#projTemp').html();
  var dataSource = this;
  var compAuth = Handlebars.compile(authorTemplate);
  var compProj = Handlebars.compile(projectTemplate);
  //Place the heading before the first item only
  if(index === 0){
    finProj = "<h1>Projects I've made</h1>"
  }
  //Compile for each author.
  dataSource.authors.forEach(function(ele, index, arr){
    finAuthors += compAuth(ele);
    if(index !== arr.length-1){
      finAuthors += " and "; //Place " and " after each author that isn't the last one. We don't need to do anything for the last author.
    };
  });
  this.authorPlaceholder = finAuthors;
  if(index !== arr.length-1){
    finProj += compProj(dataSource);//Place horizontal rows after each project except last
  } else {
    finProj += compProj(dataSource);//Place line break after last project
  }
  return finProj;
}


//Sort the project so that newest will be on top
projectData.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(ele, index, arr){
  $('#project-placeholder').append(ele.toHtml(ele, index, arr));
});
