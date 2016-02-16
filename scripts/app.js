(function() {
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Has lots of side',
  }
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.product = gem;
  });



})();
