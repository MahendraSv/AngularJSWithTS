angular.module('sample', []);

interface IDirectiveOne {
    text: string;
    color: string;
}

class DirectiveOne implements ng.IDirective {
    static instance(): ng.IDirective {
        return new DirectiveOne();
    }

    scope: IDirectiveOne = {
        text: '@',                   // @, =, &
        color: '@'
    };

    templateUrl: string = "/app/directives/d1.html";
    restrict: string = 'AE';
    controller = DirectiveOneCtrl;
    controllerAs: string = "vm";

}

class DirectiveOneCtrl {
    title: string = "Hello";
}

angular.module('sample').directive('directiveOne', DirectiveOne.instance);
angular.module('sample').controller('DirectiveOneCtrl', DirectiveOneCtrl);

// @ -> plain text/value, one-way data binding
// = -> model, two-wa data binding
// & -> method binding

// Restricts
// A - Attribute
// E - Element
// C - Comment





