define(['marionette', 'backbone'], function(Marionette, Backbone){
  return Marionette.Application.extend({
    regions: {
      mainRegion: 'body'
    },
    initialize: function(){
      console.log('app created!');
      Backbone.history.start();      
    }
  });
});
