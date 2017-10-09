class MyDirectiveFour implements ng.IDirective {
    static instance(): ng.IDirective {
        return new MyDirectiveFour();
    }

    scope = {
        "title": '@'
    }

    template: string = "<div>Directive Four: {{title}}</div>";
    restrict: string = "AE"
}

angular.module("d1").directive("myDirectiveFour", MyDirectiveFour.instance);