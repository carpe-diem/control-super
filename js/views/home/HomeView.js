define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/home.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

//    events: {
//      "click .button-home": "homeButton",
//      "click .button-search": "searchButton",
//    },
//
//    searchButton: function() {
//      Backbone.history.navigate('search/', true)
//    },
//
//    homeButton: function() {
//      Backbone.history.navigate('/', true);
//    },

    render: function(){
        this.$el.html(homeTemplate);
    }

  });

  return HomeView;
  
});
