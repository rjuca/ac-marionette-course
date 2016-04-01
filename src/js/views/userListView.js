define(['backbone', 'marionette', 'views/userView'], function(Backbone, Marionette, UserView){
  return Marionette.CollectionView.extend({
    childView: UserView
  });
});
