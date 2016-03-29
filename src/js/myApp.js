define(['marionette', 'backbone'], function(Marionette, Backbone){
  return Marionette.Application.extend({
    regions: {
      mainRegion: 'body'
    },
    initialize: function(){
      //console.log('app created!' + options.optionA + options.optionB );
      Backbone.history.start();
    },
    onStart: function(options){
      console.log('app created!' + options.optionA + options.optionB );
    }
  });
});
