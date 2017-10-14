
interface IProductInfo {
    id: string;
    product: {};
}

class ProductInfo implements ng.IDirective {
    static instance($http) {
        return new ProductInfo($http);
    }
    
    link: (scope) => void;

    constructor(public $http: ng.IHttpService) {
        this.link = this._link.bind(this);
    }

    scope: IProductInfo = {
        id: '=',
        product: '='
    };

    restrict: string = 'E';
    templateUrl: string = "/app/directives/productInfo.html";
    
    _link(scope: ng.IScope, element: ng.IAugmentedJQuery): void {
        console.log("Element: ", element);
        element.on("click", ()=> {
            console.log('clicked');
        })
        this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products/' + scope.id)
        .then(
            (response) => {
                scope.product = response.data;
            }
        );
	}
}
ProductInfo.$inject = ["$http", ""];

class ProductInfoCtrl {
    productIds: number[] = [1,2,3,4,5];
}

angular.module('sample').directive('productInfo', ProductInfo.instance);
angular.module('sample').controller('ProductInfoCtrl', ProductInfoCtrl);