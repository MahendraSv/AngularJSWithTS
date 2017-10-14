var App;
(function (App) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService($http) {
                this.$http = $http;
            }
            ProductService.prototype.getProducts = function () {
                this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products')
                    .then(function (response) {
                    console.log(response.data);
                    return response.data;
                });
                return [];
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
        ProductService.$inject = ['$http'];
        angular.module('products').service('ProductService', ProductService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
