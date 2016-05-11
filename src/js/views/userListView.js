define(['backbone', 'marionette', 'views/userInteractiveView'], function( Backbone, Marionette, UserInteractiveView ) {
    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: UserInteractiveView
    });
});
