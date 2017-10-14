module App.Services {
    export class ProductService {
        
        constructor(private $http: ng.IHttpService) {

        }

        public getProducts(): App.IProduct[] {
            this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products')
                .then(
                    function(response) {
                        console.log(response.data);
                        return response.data;
                    }
                );
            return [];
        }
    }
    ProductService.$inject = ['$http'];

    angular.module('products').service('ProductService', ProductService);
}