/* global aboutController projController page:true*/
/* eslint require-jsdoc: 0, no-inline-comments: 0*/
/* the above is instructions to the linter */

// Manipulate Pages SPA-Style
page.base('');

page('/', aboutController.init);
page('/projects', projController.init);

page();
