//This is going to read project-template-outline.html and author-template.html
//translate it for template use
//and plug in objects.js's variables accordingly.
//Then it will perform any necessary actions before displaying the articles, like sorting them.
//
//After some trial and error, I couldn't figure out how to load the external html and run it through handlebars.
//Settling down to including the template directly into index.html for now, as to move on with the project.
//Will revisit later.

var projects = [];

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

Project.prototype.toHtml = function() {
  var finAuthors = '';
  var authorTemplate = $('#authTemp').html();
  var projectTemplate = $('#projTemp').html();
  var dataSource = this;
  console.log(dataSource);
  var compAuth = Handlebars.compile(authorTemplate);
  var compProj = Handlebars.compile(projectTemplate);
  //Compile for each author.
  dataSource.authors.forEach(function(ele, index, arr){
    finAuthors += compAuth(ele);
    if(index!=arr.length-1){
      finAuthors += " and ";
    };
  });
  this.authorPlaceholder = finAuthors;
  var finProj = compProj(dataSource)+"<hr/>";
  console.log(finProj);
  return finProj;
}


//Sort the project so that newest will be on top
projectData.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(ele){
  $('#project-placeholder').append(ele.toHtml());
});
