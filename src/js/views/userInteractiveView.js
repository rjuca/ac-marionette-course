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
    }
  });
});
