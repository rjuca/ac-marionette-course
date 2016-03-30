define(['marionette', 'backbone'], function(Marionette, Backbone) {
    var SocialController = Marionette.Object.extend({

    });

    return Marionette.AppRouter.extend({
      appRoutes: {
        'login' : 'doLogin',
        '*path': 'doHello'
      },
      controller: new SocialController()
    });
});
