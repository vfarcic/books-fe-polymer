(function(document) {
  'use strict';

  var app = document.querySelector('#app');

  // imports are loaded and elements have been registered
  window.addEventListener('WebComponentsReady', function() {
    addBooksEvents();
  });

  function addBooksEvents() {
    var tcBooks = document.querySelector('#tc-books');
    var tcBookForm = document.querySelector('#tc-book-form');
    tcBooks.addEventListener('openBook', function(e) {
      tcBookForm.open(e.detail._id);
    });
    tcBooks.addEventListener('newBook', function(e) {
      tcBookForm.open(0);
    });
    tcBookForm.addEventListener('putBook', function(e) {
      tcBooks.refresh();
    });
    tcBookForm.addEventListener('deleteBook', function(e) {
      tcBooks.refresh();
    });
  }

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);
