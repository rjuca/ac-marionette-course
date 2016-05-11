define(['marionette', 'backbone', 'hbs!templates/myAppTemplate'], function( Marionette, Backbone, MyAppTemplate ){
    return Marionette.LayoutView.extend({
        template: MyAppTemplate,
        regions:{
            content: '#content'
        }
    });
});
