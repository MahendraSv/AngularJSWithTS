module App {

    export interface IProductDetailsParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailsCtrl {
        id: number;
        product: IProduct;

        constructor(
            private $routeParams: IProductDetailsParams,
            private $http: ng.IHttpService
        ) {
            this.id = $routeParams.productId;
            this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products/' + this.id)
            .then(
                (response) => {
                    // this.p
                    this.product = response.data;
                    console.log("products = ", response);
                }
            );
        }
    }

    ProductDetailsCtrl.$inject = ['$routeParams', '$http'];

    angular.module('products').controller('ProductDetailsCtrl', ProductDetailsCtrl);
}