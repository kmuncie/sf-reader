module.require(['Controller', 'fetcher'], function(Controller, fetcher) {
   'use strict';
   var controller;

   // Boot up application
   controller = new Controller(fetcher);
   controller.addView();

});
