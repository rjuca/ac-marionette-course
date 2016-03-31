define(['marionette', 'backbone'], function(Marionette, Backbone){
  return Marionette.LayoutView.extend({
    template: '<div> Home Screen </div>',
    regions: {
      profile: '#profile',
      userList: '#userList'
    },
    initialize: function(){

    }
  });
});
