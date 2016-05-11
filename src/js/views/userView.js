define(['backbone', 'marionette', 'hbs!templates/userTemplate'], function(Backbone, Marionette, UserTemplate){
    return Marionette.ItemView.extend({
        template: UserTemplate
        // What is this for ?

        // templateHelper: function(){
        //     this.model.set('id', this.model.get('id')+'profileId');
        //     return this.model.attributes;
        // }
    });
});
