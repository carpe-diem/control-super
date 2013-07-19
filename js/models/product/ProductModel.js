define([
  'underscore',
  'backbone',
  'filters',
], function(_, Backbone, ORM) {

  var ProductModel = Backbone.Model.extend({

    sync: function(method, model, options) {
      if (method === "read") {
        ORM.findById(parseInt(this.id)).done(function (data) {
          options.success(data);
        });
      }
    },
  });

  return ProductModel;

});
