var App;
(function (App) {
    angular.module('products', []);
})(App || (App = {}));
(function (App) {
    var Products;
    (function (Products) {
        var Product = (function () {
            function Product() {
            }
            return Product;
        }());
        var ProductsCtrl = (function () {
            function ProductsCtrl(sampleService, $http) {
                var _this = this;
                this.sampleService = sampleService;
                this.$http = $http;
                this.showImages = false;
                this.msg = "<h1 onClick='alert(\'hello\')'>Example for ng-bind-html</h1>";
                this.cTime = sampleService.getCurrentDate();
                this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products')
                    .then(function (response) {
                    // this.p
                    _this.products = response.data;
                    console.log("products = ", response);
                });
            }
            ProductsCtrl.prototype.toggleImages = function () {
                this.showImages = !this.showImages;
            };
            return ProductsCtrl;
        }());
        ProductsCtrl.$inject = ['SampleService', '$http'];
        function reverseString() {
            return function (value, options) {
                console.log(options);
                if (options == 'true')
                    return value.split("").reverse().join("").toUpperCase();
                else
                    return value.split("").reverse().join("");
            };
        }
        angular.module('products').controller('ProudctsCtrl', ProductsCtrl);
        angular.module('products').filter('reverseString', reverseString);
    })(Products = App.Products || (App.Products = {}));
})(App || (App = {}));
