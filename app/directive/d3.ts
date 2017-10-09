class MyProductScope {
    product: app.domain.IProduct;
}

class MyDirectiveTwo implements ng.IDirective {
    static instance(): ng.IDirective {
        return new MyDirectiveTwo();
    }

    scope = {
        product: "="
    };

    templateUrl: string = "/app/directive/d3.html";
    restrict: string = 'AE';
}

angular.module('d1').directive("myDirectiveTwo", MyDirectiveTwo.instance);