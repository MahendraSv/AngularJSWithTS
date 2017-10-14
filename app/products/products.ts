module App {
    export interface IProduct {
        id: number;
        productName: string;
        productCode: string;
        releaseDate: string;
        description: string;
        cost: number;
        price: number;
        category: string;
        tags: string[];
        imageUrl: string;
    }

    angular.module('products', []);
}

module App.Products {
    class Product implements App.IProduct {
        id: number;
        productName: string;
        productCode: string;
        releaseDate: string;
        description: string;
        cost: number;
        price: number;
        category: string;
        tags: string[];
        imageUrl: string;
    }

    class ProductsCtrl {
        products: Product[];
        showImages: boolean = false;
        cTime: Date;

        msg: string = "<h1 onClick='alert(\'hello\')'>Example for ng-bind-html</h1>";

        toggleImages() {
            this.showImages = !this.showImages;
        }

        constructor(
            private sampleService: App.Services.SampleService,
            private $http: ng.IHttpService
        ) {
            this.cTime = sampleService.getCurrentDate();
            this.$http.get('https://59e072bc3b0a4d001272d0c1.mockapi.io/react/products')
            .then(
                (response) => {
                    // this.p
                    // this.products = response.data;
                    console.log("products = ", response);
                }
            );
        }
    }
    ProductsCtrl.$inject = ['SampleService', '$http'];

    function reverseString() {
        return function (value: string, options: string) {
            console.log(options);
            if (options == 'true')
                return value.split("").reverse().join("").toUpperCase();
            else
                return value.split("").reverse().join("");
        }
    }

    angular.module('products').controller('ProudctsCtrl', ProductsCtrl);
    angular.module('products').filter('reverseString', reverseString);
}