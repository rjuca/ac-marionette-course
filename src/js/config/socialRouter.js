define(['marionette', 'backbone', 'layouts/myAppMainLayout'], function(Marionette, Backbone, MyAppMainLayout) {
    var SocialController = Marionette.Object.extend({
      initialize: function(){
        this.options.regionManager = new Marionette.RegionManager({
            regions: {
                main: 'body'
            }
        });
      },
      doLogin: function(){

      },
      doHello: function(){
        this.getOption('regionManager').get('main').show(new MyAppMainLayout());
      }
    });

    return Marionette.AppRouter.extend({
      appRoutes: {
        'login' : 'doLogin',
        '*path': 'doHello'
      },
      controller: new SocialController()
    });
});
