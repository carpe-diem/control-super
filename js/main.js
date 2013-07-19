require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    boostrap: 'libs/bootstrap/bootstrap.min',
    barcode: 'libs/barcode/jquery-barcode.min',
    filters: 'adapters/filters',
    products: 'adapters/data',
    templates: '../tpl'
  },

});

require([
  'app',

], function(App){
  App.initialize();
});
