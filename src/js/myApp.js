define(['marionette', 'backbone', 'config/socialRouter'], function(Marionette, Backbone, SocialRouter){
  return Marionette.Application.extend({    
    initialize: function(){
      this.router = new SocialRouter();
      Backbone.history.start();
    },
    onStart: function(options){
      console.log('app created!' + options.optionA + options.optionB );
    }
  });
});
