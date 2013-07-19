define([
  'products',
], function(products, prices) {


  findById = function (id){
    var deferred = $.Deferred();
    var result = null;
    var l = products.length;
    for (var i = 0; i < l; i++) {
      if (products[i].id === id) {
        result = products[i];
        break;
      }
    }
    deferred.resolve(result);
    return deferred.promise();
  },

  findByDescription = function (searchKey){
    var deferred = $.Deferred();
    var results = products.filter(function (element) {
      if (searchKey.length > 0){
        var description = element.description;
        return description.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
      }
      else{
        return "";
      }
    });
    deferred.resolve(results.slice(0,20));
    return deferred.promise();
  }

  return {
    findById: findById,
    findByDescription: findByDescription
  };

});
