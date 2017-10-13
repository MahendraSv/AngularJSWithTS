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
            function ProductsCtrl(sampleService, productService) {
                this.sampleService = sampleService;
                this.productService = productService;
                this.showImages = false;
                this.msg = "<h1 onClick='alert(\'hello\')'>Example for ng-bind-html</h1>";
                this.cTime = sampleService.getCurrentDate();
                this.products = productService.getProducts();
            }
            ProductsCtrl.prototype.toggleImages = function () {
                this.showImages = !this.showImages;
            };
            return ProductsCtrl;
        }());
        ProductsCtrl.$inject = ['SampleService', 'ProductService'];
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
