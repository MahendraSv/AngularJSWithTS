var main = angular.module('angularWithTS', ['ngRoute', 'products', 'todo']);

main.config(routeConfig);

routeConfig.$inject = ["$routeProvider"];
function routeConfig($routeProvider: ng.route.IRouteProvider): void {
    $routeProvider
    .when("/products", {
        templateUrl: "/app/products/products.html",
        controller: "ProudctsCtrl",
        controllerAs: "vm"
    })
    .when('/todo', {
        templateUrl: "/app/todo/todo.html"
    })
    .when("/", {
        template: "<h1>Welcome to My Angular Application</h1>"
    })
    .when('/productDetails/:productId', {
        templateUrl: "/app/products/productDetails.html",
        controller: "ProductDetailsCtrl as vm"
    })
    .otherwise("/");
}