define(['backbone' ], function(Backbone) {
  return Backbone.Model.extend({
    //USE TIAGO'S IP, OR RODOLFO WILL GET MAD
    urlRoot: 'http://localhost:8081/login',
    defaults: {
      sessionId: '',
      username: '',
      password: ''
    },
    login: function(){
      var self = this;
      console.log('trying to login with: ' + this.attributes);
      self.save(this.attributes, {
        success: function(model, response){
          self.set('sessionId', response);
          self.trigger('login:success', model, response);
        },
        error: function(model, response){
          self.trigger('login:failure', model, response);
        }
      });
    }
  });

});
