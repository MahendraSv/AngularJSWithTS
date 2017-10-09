var main = angular.module('angularWithTS', ["ngRoute"]);
main.config(routeConfig);
routeConfig.$inject = ["$routeProvider"];
function routeConfig($routeProvider) {
    $routeProvider
        .when("/products", {
        templateUrl: "/app/products/products.html"
    })
        .otherwise("/products");
}
