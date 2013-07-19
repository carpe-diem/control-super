define([
  'jquery',
  'underscore',
  'backbone',
  'collections/product/ProductCollection',
  'views/search/SearchDetailView',
  'text!templates/search/search.html',
  'text!templates/search/search_detail.html',
], function($, _, Backbone, ProductCollection, SearchDetailView, searchTemplate, searchDetailTemplate){

  var SearchView = Backbone.View.extend({
    el: $("#page"),

    initialize: function () {
        this.searchResults = new ProductCollection();
        this.searchresultsView = new SearchDetailView({model: this.searchResults});
    },

    render: function () {
        this.$el.html(searchTemplate);
        $('.scroller', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "keyup .search-key":    "search",
        "keypress .search-key": "onkeypress"
    },

    search: function (event) {
        var key = $('.search-key').val();
        this.searchResults.fetch({reset: true, data: {name: key}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }

  });

  return SearchView;

});

