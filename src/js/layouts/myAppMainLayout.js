define(['marionette', 'backbone'], function(Marionette, Backbone){
  return Marionette.LayoutView.extend({
    el: 'body',
    template: "<div> Hello World ! </div>",
    regions:{
      content: '#content'
    }
  });
});
