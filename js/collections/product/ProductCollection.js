define([
  'jquery',
  'underscore',
  'backbone',
  'filters',
  'models/product/ProductModel',
], function($, _, Backbone, ORM, ProductModel){

  var ProductsCollection = Backbone.Collection.extend({
    model: ProductModel,

    sync: function(method, model, options) {
      if (method === "read") {
        ORM.findByDescription(options.data.name).done(function (data) {
          options.success(data);
        });
      }
    },
  });

  return ProductsCollection;
});

