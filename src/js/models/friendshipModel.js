define(['backbone'], function(Backbone){
  return Backbone.Model.extend({
    urlRoot: 'http://localhost:8081/friendships/',
    addFriend: function(){
      this.save({
        header: {
          'Authorization': 'bearer ' + sessionStorage.sessionId
        },
        type: 'POST'
      });
    },
    acceptRequest: function(){
      this.save({
        header: {
          'Authorization': 'bearer ' + sessionStorage.sessionId
        },
        type: 'PUT'
      });
    }
  });
});
