define(['marionette', 'backbone'], function(Marionette, Backbone){
  return Marionette.Application.extend({
    initialize: function(){
      console.log('app created!');
      Backbone.history.start();
    }
  });
});
