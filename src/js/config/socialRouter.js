define( [ 'marionette', 'backbone', 'layouts/myAppMainLayout', 'layouts/loginLayout', 'layouts/homeLayout', 'layouts/requestsLayout', 'layouts/headerLayout', 'layouts/footerLayout' ],
  function( Marionette, Backbone, MyAppMainLayout, LoginLayout, HomeLayout, RequestsLayout, HeaderLayout, FooterLayout ) {
    var SocialController = Marionette.Object.extend({
      initialize: function(){
        this.options.regionManager = new Marionette.RegionManager({
            regions: {
                main: '#mainContent',
                header: 'header',
                footer: 'footer'
            }
        });

        this.getOption('regionManager').get('header').show(new HeaderLayout());
        this.getOption('regionManager').get('footer').show(new FooterLayout());
      },
      doLogin: function(){
        var layout = new LoginLayout();
        this.listenTo(layout, 'login:success', this.handleLoginSuccess);
        this.getOption('regionManager').get('main').show(layout);
      },
      handleLoginSuccess: function(model, response){
        this.sessionId = response;
        sessionStorage.sessionId = response;
        Backbone.history.navigate('home', {trigger: true});
      },
      doHello: function(){
        this.getOption('regionManager').get('main').show(new MyAppMainLayout());
      },
      doHome: function(){
        this.getOption('regionManager').get('main').show(new HomeLayout());
      },
      doRequests: function() {
        this.getOption( 'regionManager' ).get( 'main' ).show( new RequestsLayout() );
      }
    });

    return Marionette.AppRouter.extend({
      appRoutes: {
        'login' : 'doLogin',
        'home': 'doHome',
        'requests': 'doRequests',
        '*path': 'doHello'
      },

      controller: new SocialController(),

      execute: function( callback, args, path ) {
        if( path !== 'doLogin' && !sessionStorage.sessionId ){
          Backbone.history.navigate( 'login', {trigger: true} );
          return false;
        } else if(path === 'doLogin' && sessionStorage.sessionId){
          Backbone.history.navigate( 'home', {trigger: true} );
          return false;
        }else {
          if(callback){
            callback.apply(this, args);
          }
        }
      }
    });
});
