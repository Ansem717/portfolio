//Manipulate Pages SPA-Style
page.base('');

page('/', about);
page('/projects', projects)

page();

function about() {
  console.log('/, about');
  aboutController.init();
}

function projects() {
  console.log('/projects, projects');
  projController.init();
}
