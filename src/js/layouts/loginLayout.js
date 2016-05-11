define(['marionette', 'backbone', 'views/loginFormView', 'hbs!templates/loginContainerTemplate'], function(Marionette, Backbone, LoginFormView, LoginContainerTemplate){
  return Marionette.LayoutView.extend({
    template: LoginContainerTemplate,
    regions: {
      form: '#form'
    },
    initialize: function(){
      this.loginFormView = new LoginFormView();
      this.listenTo(this.loginFormView,'login:success', this.handleLoginSuccess);
    },
    handleLoginSuccess: function(model, response){
      this.trigger('login:success', model, response);
    },
    onBeforeShow: function(){
      this.showChildView('form', this.loginFormView);
    }
  });
});
