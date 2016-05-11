require.config({
    baseUrl: "js",
    paths: {
        'underscore': '../../bower_components/underscore/underscore-min',
        'backbone': '../../bower_components/backbone/backbone-min',
        'marionette': '../../bower_components/backbone.marionette/lib/backbone.marionette.min',
        'text': '../../bower_components/text/text',
        'handlebars': '../../bower_components/handlebars/handlebars.min',
        'hbs': '../../bower_components/hbs/hbs',
        'materialize': '../../bower_components/Materialize/dist/js/materialize.min',
        'jquery': '../../bower_components/jquery/dist/jquery.min'
    },

    shim: {
        backbone: {
            deps: ['underscore','jquery'],
            exports: 'Backbone'
        },
        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'handlebars'
        }
    }

});
