define([
  'jquery',
  'underscore',
  'backbone',
  ], function($, _, Backbone) {

    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'home',
        'search/': 'search',
        'detail/:id/': 'detail',
        // default
        '*actions': 'home'
      },

      home: function(actions){
        require(['views/home/HomeView'], function (HomeView) {
          var homeView = new HomeView();
          homeView.render();
        });
      },

      search: function(){
        require(['views/search/SearchView'], function (SearchView) {
          var searchView = new SearchView();
          searchView.render();
        });
      },

      detail: function(id){
        require(['views/product/product_detail_view', 'models/product/ProductModel'], function (ProductDetailView, ProductModel) {
          var product = new ProductModel({id: id});
          product.fetch({
            success: function (data){
              var detailView = new ProductDetailView({id: id});
              new ProductDetailView({model: data}).render().$el;
            }
          });
        });
      },

    });

    var app_router = new AppRouter;

    var initialize = function(){
      Backbone.history.start();
    };


    return {
      initialize: initialize
    };
  }
);
