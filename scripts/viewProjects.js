//This is going to read project-template-outline.html
//translate it for template use
//and plug in objects.js's variables accordingly.
//Then it will perform any necessary actions before displaying the articles, like sorting them.
//
//After some trial and error, I couldn't figure out how to load the external html and run it through handlebars.
//Dumbing down to including the template directly into index.html for now, as to move on with the project.

var projects = [];

function Project(itm){
  this.title = itm.title;
  this.category = itm.category;
  this.description = itm.description;
  this.imgSpoiler = itm.imgSpoiler;
  this.pubDate = itm.pubDate
  this.projectLink = itm.projectLink;
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
  if(this.authors.length==1){
    finAuthors = compAuth(dataSource.authors[0]);
  } else {
    dataSource.authors.forEach(function(ele, index, arr){
      finAuthors += compAuth(ele);
      //console.log(index);
      if(index!=arr.length-1){
        finAuthors += " and ";
      }
      //console.log(finAuthors);
    });
  }
  //var finAuthors = compile(dataSource.authors[0]);
  //console.log(finAuthors);
  //console.log(auth2);
}


//Sort the project so that newest will be on top
projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
})

//
projects.forEach(function(ele){
  $('#project-placeholder').append(ele.toHtml())
});
