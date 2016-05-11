define(['marionette', 'backbone', 'hbs!templates/headerTemplate'], function( Marionette, Backbone, HeaderTemplate ){
    return Marionette.LayoutView.extend({
        template: HeaderTemplate
    });
});
