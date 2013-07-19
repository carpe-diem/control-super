define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/search/search_detail.html',
  'collections/product/ProductCollection',
  ], function($, _, Backbone, searchDetailTemplate){

    var ProductListItemView = Backbone.View.extend({

      tagName:"li",
      template: _.template(searchDetailTemplate),

      initialize:function () {
        this.model.on("change", this.render, this);
      },

      render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
      },

    });

    return ProductListItemView;

  }
);
