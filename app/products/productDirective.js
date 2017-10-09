var ProductDirective = (function () {
    function ProductDirective() {
        this.scope = {
            'title': '@'
        };
        this.template = "<div>hello {{title}}</div>";
        this.restrict = 'AE';
        // controller = MyController;
        // controllerAs: string = "ctrl";
    }
    ProductDirective.instance = function () {
        return new ProductDirective();
    };
    return ProductDirective;
}());
angular.module('products').directive("productDirective", ProductDirective.instance);
