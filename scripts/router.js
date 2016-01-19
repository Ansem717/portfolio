//Manipulate Pages SPA-Style
page.base('');

page('/', about);
page('/projects', projects)

page();

function about() {
  aboutController.init();
}

function projects() {
  projController.init();
}
