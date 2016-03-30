define(['marionette', 'backbone'], function(Marionette, Backbone){
  return Marionette.LayoutView.extend({
    template: '<div>Login Screen</div>',
    regions: {
      form: '#form',
      footer: '#footer'
    }
  });
});
