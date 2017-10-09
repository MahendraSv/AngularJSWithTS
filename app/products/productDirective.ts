interface ProductDirectiveScope {
    title: string;
}

class ProductDirective implements ng.IDirective {
    static instance(): ng.IDirective {
        return new ProductDirective();
    }

    scope: ProductDirectiveScope = {
        'title': '@'
    };

    template: string = "<div>hello {{title}}</div>";
    restrict: string = 'AE';
    // controller = MyController;
    // controllerAs: string = "ctrl";
}

angular.module('products').directive("productDirective", ProductDirective.instance);