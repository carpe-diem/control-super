define([
  'jquery',
  'underscore',
  'backbone',
  'views/product/ProductListItemView',
], function($, _, Backbone, ProductListItemView){

  var SearchDetailView = Backbone.View.extend({

    tagName:'ul',

    initialize:function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (product) {
            self.$el.append(new ProductListItemView({model:product}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (product) {
          product_list = new ProductListItemView({model:product})
            this.$el.append(product_list.render().el);
        }, this);
        return this;
    }

  });

  return SearchDetailView;

});
