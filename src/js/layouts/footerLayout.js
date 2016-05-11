define(['marionette', 'backbone', 'hbs!templates/footerTemplate'], function( Marionette, Backbone, FooterTemplate ){
    return Marionette.LayoutView.extend({
        template: FooterTemplate
    });
});
