angular.module('d1', []);
var MyDirective = (function () {
    function MyDirective() {
        this.scope = {
            'title': '@',
            'color': '@'
        };
        this.templateUrl = "/app/directive/my.html";
        this.restrict = 'AE';
        this.controller = MyController;
        this.controllerAs = "ctrl";
    }
    MyDirective.instance = function () {
        return new MyDirective();
    };
    return MyDirective;
}());
var MyController = (function () {
    function MyController() {
        this.title = "HELLO";
    }
    return MyController;
}());
angular.module('d1').controller('MyController', MyController);
angular.module('d1').directive('myDirective', MyDirective.instance);
