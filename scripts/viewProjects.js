//This is going to read project-template-outline.html
//translate it for template use
//and plug in objects.js's variables accordingly.
//Then it will perform any necessary actions before displaying the articles, like sorting them.

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


//Sort the project so that newest will be on top
projectData.sort(function(a,b) {
  return (new Date(b.pubDate)) - (new Date(a.pubDate));
});
