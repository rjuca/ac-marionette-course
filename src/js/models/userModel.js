define(['backbone' ], function(Backbone) {
    return Backbone.Model.extend({
        urlRoot: 'http://localhost:3000/users',

        getAllUsers: function() {
            this.fetch( {
                headers: {
                    'Authorization': 'bearer ' + sessionStorage.sessionId
                }
            });
        },

        parse: function( data ){
            return {
              idAttribute: data._id,
              userId: data._id + 'profileId',
              name: data.name,
              email: data.email,
              image: 'http://www.gravatar.com/avatar/' + data._id + '?d=monsterid'
            }
        }
    });
});
