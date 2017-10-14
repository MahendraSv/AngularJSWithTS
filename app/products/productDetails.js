var App;
(function (App) {
    var ProductDetailsCtrl = (function () {
        function ProductDetailsCtrl($routeParams, $http) {
            this.$routeParams = $routeParams;
            this.$http = $http;
            this.id = $routeParams.productId;
            this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products/' + this.id)
                .then(function (response) {
                // this.p
                // this.product = response.data;
                console.log("products = ", response);
            });
        }
        return ProductDetailsCtrl;
    }());
    ProductDetailsCtrl.$inject = ['$routeParams', '$http'];
    angular.module('products').controller('ProductDetailsCtrl', ProductDetailsCtrl);
})(App || (App = {}));
