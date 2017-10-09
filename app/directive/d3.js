var MyProductScope = (function () {
    function MyProductScope() {
    }
    return MyProductScope;
}());
var MyDirectiveTwo = (function () {
    function MyDirectiveTwo() {
        this.scope = {
            product: "="
        };
        this.templateUrl = "/app/directive/d3.html";
        this.restrict = 'AE';
    }
    MyDirectiveTwo.instance = function () {
        return new MyDirectiveTwo();
    };
    return MyDirectiveTwo;
}());
angular.module('d1').directive("myDirectiveTwo", MyDirectiveTwo.instance);
