angular.module('sample', []);
var DirectiveOne = (function () {
    function DirectiveOne() {
        this.scope = {
            text: '@',
            color: '@'
        };
        this.templateUrl = "/app/directives/d1.html";
        this.restrict = 'AE';
        this.controller = DirectiveOneCtrl;
        this.controllerAs = "vm";
    }
    DirectiveOne.instance = function () {
        return new DirectiveOne();
    };
    return DirectiveOne;
}());
var DirectiveOneCtrl = (function () {
    function DirectiveOneCtrl() {
        this.title = "Hello";
    }
    return DirectiveOneCtrl;
}());
angular.module('sample').directive('directiveOne', DirectiveOne.instance);
angular.module('sample').controller('DirectiveOneCtrl', DirectiveOneCtrl);
// @ -> plain text/value, one-way data binding
// = -> model, two-wa data binding
// & -> method binding
// Restricts
// A - Attribute
// E - Element
// C - Comment
