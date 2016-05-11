define(['marionette', 'backbone', 'hbs!templates/requestsTemplate', 'collections/UserCollection', 'views/userListView' ],
function( Marionette, Backbone, RequestsTemplate, UserCollection, UserListView ) {
    var RequestsLayout = Marionette.LayoutView.extend({    
        template: RequestsTemplate,

        regions: {
            'main': '#main',
            'friends': '#friends',
            'pendingRequests': '#requests',
            'pendingApprovals': '#approvals'
        },
        ui: {
            friendsTab: '#friendsTab',
            requestsTab: '#requestsTab',
            approvalsTab: '#approvalsTab'
        },

        events: {
        },

        initialize: function() {
            this.initFriendsList();
            this.initRequestsList();
            this.initApprovalsList();
        },

        initFriendsList: function() {
            this.friendsList = new UserCollection([], {
              id: 'me'
            });
            this.listenTo(this.friendsList, 'sync', this.showUserListView);
            this.friendsList.getAllUsers();
        },

        showFriendListView: function() {
            this.showChildView('friends', new UserListView({
                collection: this.friendsList
            }));
            this.showTab(this.ui.friendsTab);
        },

        initRequestsList: function() {
          this.requestsList = new UserCollection( [], {
              id: 'requests'
            });
            this.listenTo(this.requestsList, 'sync', this.showRequestsListView);
            this.requestsList.getAllUsers();
        },

        showRequestsListView: function() {
            this.showChildView('pendingRequests', new UserListView({
                collection: this.requestsList
            }));
            this.showTab(this.ui.requestsTab);
        },

        initApprovalsList: function() {
          this.approvalList = new UserCollection( [], {
              id: 'requested'
            });
            this.listenTo(this.approvalList, 'sync', this.showApprovalsListView);
            this.approvalList.getAllUsers();
        },

        showApprovalsListView: function() {
            this.showChildView('pendingApprovals', new UserListView({
                collection: this.approvalList
            }));
            this.showTab(this.ui.approvalsTab);
        },

        showTab: function( tab ) {
            if ( !this.activeTab ) {
                this.activeTab = true;
                tab.find('a').addClass('active');
            }
            tab.removeClass( 'disabled' );
        },

        onShow: function() {
            require(['materialize'], function(){
                $('ul.tabs').tabs();
            });
        }
    });

    return RequestsLayout;
});
