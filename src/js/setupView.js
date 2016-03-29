var app = new Mn.Application();

app.on('start', function(){
  Backbone.history.start();
});

app.start({
  optionA: 'This',
  optionB: 'is',
  optionC: 'a',
  optionD: 'hello',
  optionE: 'world'
});

var AppLayoutView = Marionette.LayoutView.extend({
  el: 'body',
  template: "<div> Hello World ! </div>",
  regions:{
    content: '#content'
  }
});

var layout = new AppLayoutView();

app.rootView = layout;

layout.render();
