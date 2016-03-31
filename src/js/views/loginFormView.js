define(['backbone', 'marionette', 'models/loginModel', 'text!templates/loginFormTemplate'], function(Backbone, Marionette, LoginModel, LoginFormTemplate){
  return Marionette.ItemView.extend({
    template: LoginFormTemplate,
    model: new LoginModel(),
    events: {
      'click @ui.submit': 'doLogin'
    },
    modelEvents: {
      'login:failure': 'handleLoginFailure'
    },
    ui: {
      usernameField: 'input[name="username"]',
      passwordField: 'input[name="password"]',
      submit: 'button'
    },
    initialize: function(){
      this.listenTo(this.model, 'login:success', this.handleLoginSuccess);
    },
    handleLoginSuccess: function(model, response){
      this.trigger('login:success', model, response);
    },
    handleLoginFailure: function(model, response){
      alert(response.responseText);
    },
    doLogin: function(){
      this.model.set('username', this.ui.usernameField.val());
      this.model.set('password', this.ui.passwordField.val());
      this.model.login();
    }

  });
});
