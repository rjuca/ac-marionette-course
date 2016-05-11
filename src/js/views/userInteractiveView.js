define(['backbone', 'marionette', 'views/userView', 'models/friendshipModel', 'hbs!templates/userInteractiveTemplate'],
function( Backbone, Marionette, UserView, FriendshipModel, UserInteractiveTemplate ){
    return UserView.extend({
        template: UserInteractiveTemplate,
        tagName: 'li',
        className: 'collection-item avatar',

        events: {
            'click @ui.addFriendButton' : 'addFriendHandler',
            'click @ui.acceptRequest' : 'acceptRequestHandler'
        },
        ui: {
            addFriendButton: 'a#addFriend',
            waitingApprovalButton: 'a#waitingApproval',
            acceptRequestButton: 'a#acceptRequest',
            friendDisclaimer: 'span#friendDisclaimer'
        },
        initialize: function(){
            this.friendship = new FriendshipModel({
                id: this.model.get('idAttribute')
            });
            this.listenTo(this.friendship, 'sync', this.adjustFriendshipStatus);
            this.friendship.getFriendship();
        },
        adjustFriendshipStatus: function(){
            var self = this,
                friendshipStatusCode = this.friendship.get('status');

            if(friendshipStatusCode === 0 && this.friendship.get('userRequested') !== this.model.get('idAttribute')){
              this.ui.acceptRequestButton.removeClass('hide');
            }else if(friendshipStatusCode === 0){
              this.ui.waitingApprovalButton.removeClass('hide');
            }else if(friendshipStatusCode === 1){
              this.ui.friendDisclaimer.removeClass('hide');
            }else if(!friendshipStatusCode){
              this.ui.addFriendButton.removeClass('hide');
            }
        },
        addFriendHandler: function(){
            this.friendship.addFriend();
        },
        acceptRequestHandler: function(){
            this.friendship.acceptRequest();
        }
    });
});
