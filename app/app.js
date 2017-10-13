var main = angular.module('angularWithTS', ['ngRoute', 'products', 'todo']);
main.config(routeConfig);
routeConfig.$inject = ["$routeProvider"];
function routeConfig($routeProvider) {
    $routeProvider
        .when("/products", {
        templateUrl: "/app/products/products.html"
    })
        .when('/todo', {
        templateUrl: "/app/todo/todo.html"
    })
        .when("/", {
        template: "<h1>Welcome to My Angular Application</h1>"
    })
        .otherwise("/");
}
