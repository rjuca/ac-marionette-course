define(['marionette', 'backbone', 'hbs!templates/homeTemplate', 'models/userModel', 'views/userView', 'collections/userCollection', 'views/userListView'], function(Marionette, Backbone, HomeTemplate, UserModel, UserView, UserCollection, UserListView) {
    return Marionette.LayoutView.extend({
        template: HomeTemplate,
        regions: {
            profile: '#profile',
            userList: '#userList'
        },

        ui: {
            requestsBtn: 'button#requestsHandler'
        },

        events: {
            'click @ui.requestsBtn': 'goToRequests'
        },

        initialize: function() {
            this.initProfile();
        },
        initProfile: function() {
            this.userModel = new UserModel({
                id: 'me'
            });
            this.listenTo(this.userModel, 'sync', this.showProfileView);
            this.userModel.fetch({
                headers: {
                    'Authorization': 'bearer ' + sessionStorage.sessionId
                }
            });
        },
        showProfileView: function() {
            this.showChildView('profile', new UserView({
                model: this.userModel
            }));
        },

        goToRequests: function() {
            Backbone.history.navigate('requests', {trigger: true});
        }
    });
});
