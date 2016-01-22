(function(module) {
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
    dataSource.authors.map(function(ele, index, arr){  //Compile for each author.
      finAuthors += compAuth(ele);
      if(index !== arr.length-1){
        finAuthors += " and "; //Place " and " after each author that isn't the last one. We don't need to do anything for the last author.
      };
    });
    this.authorPlaceholder = finAuthors;
    finProj += compProj(dataSource);
    return finProj;
  }

  Project.loadAll = function(projData) {
    projData.sort(function(a,b) {
      return (new Date(b.pubDate)) - (new Date(a.pubDate));
    });
    projData.map(function(ele) {
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
          display.initIndexPage();
        } else {
          localStorage.etag = xhr.getResponseHeader('ETag');
          $.getJSON('/data/projData.JSON', function(projData){
            Project.loadAll(projData);
            localStorage.projData = JSON.stringify(projData);
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

  module.Project = Project;
})(window);
