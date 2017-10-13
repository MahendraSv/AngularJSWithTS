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
            function ProductsCtrl() {
                this.showImages = false;
                this.cTime = new Date();
                this.msg = "<h1 onClick='alert(\'hello\')'>Example for ng-bind-html</h1>";
                this.products = [{
                        "productId": 1,
                        "productName": "Leaf Rake",
                        "productCode": "GDN-0011",
                        "releaseDate": "March 19, 2009",
                        "description": "Leaf rake with 48-inch wooden handle.",
                        "cost": 9.00,
                        "price": 19.95,
                        "category": "garden",
                        "tags": ["leaf", "tool"],
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                    },
                    {
                        "productId": 2,
                        "productName": "Garden Cart",
                        "productCode": "GDN-0023",
                        "releaseDate": "March 18, 2010",
                        "description": "15 gallon capacity rolling garden cart",
                        "cost": 20.00,
                        "price": 32.99,
                        "category": "garden",
                        "tags": ["barrow", "cart", "wheelbarrow"],
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                    },
                    {
                        "productId": 5,
                        "productName": "Hammer",
                        "productCode": "TBX-0048",
                        "releaseDate": "May 21, 2013",
                        "description": "Curved claw steel hammer",
                        "cost": 1.00,
                        "price": 8.99,
                        "category": "toolbox",
                        "tags": ["tool"],
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                    },
                    {
                        "productId": 8,
                        "productName": "Saw",
                        "productCode": "TBX-0022",
                        "releaseDate": "May 15, 2009",
                        "description": "15-inch steel blade hand saw",
                        "cost": 6.95,
                        "price": 11.55,
                        "category": "garden",
                        "tags": ["garden", "mower"],
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                    },
                    {
                        "productId": 10,
                        "productName": "Video Game Controller",
                        "productCode": "GMG-0042",
                        "releaseDate": "October 15, 2002",
                        "description": "Standard two-button video game controller",
                        "cost": 2.22,
                        "price": 35.95,
                        "category": "gaming",
                        "tags": ["gaming", "controller", "video game"],
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                    }
                ];
            }
            ProductsCtrl.prototype.toggleImages = function () {
                this.showImages = !this.showImages;
            };
            return ProductsCtrl;
        }());
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
