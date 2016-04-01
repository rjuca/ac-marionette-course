define(['backbone', 'marionette', 'views/userView', 'models/friendshipModel', 'text!templates/userInteractiveTemplate'],
function(Backbone, Marionette, UserView, FriendshipModel, UserInteractiveTemplate){
  return UserView.extend({
    template: function(data){
      return _.template(UserInteractiveTemplate)(data);
    },
    events: {
      'click @ui.addFriendButton' : 'addFriendHandler',
      'click @ui.acceptRequest' : 'acceptRequestHandler'
    },
    ui: {
      addFriendButton: 'button#addFriend',
      waitingApprovalButton: 'button#waitingApproval',
      acceptRequestButton: 'button#acceptRequest',
      friendDisclaimer: 'span#friendDisclaimer'
    },
    initialize: function(){
      this.friendship = new FriendshipModel({
        id: this.model.get('idAttribute')
      });
      //this.listenTo(this.friendship, 'sync', this.adjustFriendshipStatus);
      this.friendship.getFriendship();
    },
    addFriendHandler: function(){
      this.friendship.addFriend();
    },
    acceptRequestHandler: function(){
      this.friendship.acceptRequest();
    }
  });
});
