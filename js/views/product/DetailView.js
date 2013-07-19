define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/product/product_detail.html',
  ], function($, _, Backbone, productDetailTemplate){

    var ProductDetailViewView = Backbone.View.extend({

      tagName:"li",
      template: _.template(productDetailTemplate),

      initialize:function () {
        this.model.on("change", this.render, this);
      },

      render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },

    });

    return ProductDetailView;

  }
);
