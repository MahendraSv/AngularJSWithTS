var MyDirectiveOne = (function () {
    function MyDirectiveOne() {
        this.scope = {
            name: '@',
            age: '='
        };
        this.templateUrl = "/app/directive/d2.html";
        this.restrict = "AE";
        // controller = MyControllerOne;
        // controllerAs: string = "ctrl";
    }
    MyDirectiveOne.instance = function () {
        return new MyDirectiveOne();
    };
    return MyDirectiveOne;
}());
var MyControllerOne = (function () {
    function MyControllerOne() {
        this.myProducts = [
            new app.domain.Product("Leaf Rake Product One", "description", ""),
            new app.domain.Product("Leaf Rake Product Two", "description", ""),
            new app.domain.Product("Leaf Rake Product Three", "description", "")
        ];
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
    return MyControllerOne;
}());
angular.module("d1").directive("myDirectiveOne", MyDirectiveOne.instance);
angular.module("d1").controller("MyControllerOne", MyControllerOne);
