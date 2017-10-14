var ProductInfo = (function () {
    function ProductInfo($http) {
        this.$http = $http;
        this.scope = {
            id: '=',
            product: '='
        };
        this.restrict = 'E';
        this.templateUrl = "/app/directives/productInfo.html";
        this.link = this._link.bind(this);
    }
    ProductInfo.instance = function ($http) {
        return new ProductInfo($http);
    };
    ProductInfo.prototype._link = function (scope, element) {
        console.log("Element: ", element);
        element.on("click", function () {
            console.log('clicked');
        });
        this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products/' + scope.id)
            .then(function (response) {
            scope.product = response.data;
        });
    };
    return ProductInfo;
}());
ProductInfo.$inject = ["$http", ""];
var ProductInfoCtrl = (function () {
    function ProductInfoCtrl() {
        this.productIds = [1, 2, 3, 4, 5];
    }
    return ProductInfoCtrl;
}());
angular.module('sample').directive('productInfo', ProductInfo.instance);
angular.module('sample').controller('ProductInfoCtrl', ProductInfoCtrl);
