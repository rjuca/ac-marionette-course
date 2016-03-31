define(['marionette', 'backbone', 'text!templates/homeTemplate', 'models/userModel', 'views/userView'], function(Marionette, Backbone, HomeTemplate, UserModel, UserView){
  return Marionette.LayoutView.extend({
    template: HomeTemplate,
    regions: {
      profile: '#profile',
      userList: '#userList'
    },
    initialize: function(){
      this.userModel = new UserModel({
        id: 'me'
      });
      this.listenTo(this.userModel, 'sync', this.showProfileView);
      this.userModel.fetch({
        headers: {
          'Authorization' : 'bearer ' + sessionStorage.sessionId
        }
      });
    },
    showProfileView: function(){
      this.showChildView('profile', new UserView({
        model: this.userModel
      }));
    }
  });
});
