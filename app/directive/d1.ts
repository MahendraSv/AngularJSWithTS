angular.module('d1', []);

interface MyDirectiveScope {
    title: string;
    color: string;
}

class MyDirective implements ng.IDirective {
    static instance(): ng.IDirective {
        return new MyDirective();
    }

    scope: MyDirectiveScope = {
        'title': '@',
        'color': '@'
    };

    templateUrl: string = "/app/directive/my.html";
    restrict: string = 'AE';
    controller = MyController;
    controllerAs: string = "ctrl";
}

class MyController {
    title: string;
    constructor() {
        this.title = "HELLO";
    }
}

angular.module('d1').controller('MyController', MyController);

angular.module('d1').directive('myDirective', MyDirective.instance);