define([
  'jquery',
  'underscore',
  'backbone',
  'barcode',
  'text!templates/product/product_detail.html',
  ], function($, _, Backbone, barcode, productDetailTemplate){

    var ProductDetailView = Backbone.View.extend({
      el: $("#page"),
      template: _.template(productDetailTemplate),

      render:function () {
        this.$el.html(this.template(this.model.toJSON()));

        data = this.model.attributes;
        if (data.barcode){
          $("#barcode").barcode(data.barcode, "ean13");
        }

        return this;
      },

    });

    return ProductDetailView;

  }
);
