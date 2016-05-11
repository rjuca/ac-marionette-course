define(['marionette', 'backbone', 'models/userModel'], function(Marionette, Backbone, UserModel){
    return Backbone.Collection.extend({
        url: function() {
          return 'http://localhost:3000/friendships/' + this.id;
        },

        model: UserModel,

        initialize: function ( models, options ) {
            this.id = options.id;
        },

        getAllUsers: function() {
          this.fetch( {
              headers: {
                  'Authorization': 'bearer ' + sessionStorage.sessionId
              }
          });
        }
    });
});