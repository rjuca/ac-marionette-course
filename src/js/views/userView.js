define(['backbone', 'marionette', 'models/userModel', 'text!templates/userTemplate'], function(Backbone, Marionette, UserModel, UserTemplate){
  return Marionette.ItemView.extend({
    template:function(data){
      return _.template(UserTemplate)(data);
    },
    templateHelper: function(){
      this.model.set('id', this.model.get('id')+'profileId');
      return this.model.attributes;
    }
  });
});
