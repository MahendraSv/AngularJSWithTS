var MyDirectiveFour = (function () {
    function MyDirectiveFour() {
        this.scope = {
            "title": '@'
        };
        this.template = "<div>Directive Four: {{title}}</div>";
        this.restrict = "AE";
    }
    MyDirectiveFour.instance = function () {
        return new MyDirectiveFour();
    };
    return MyDirectiveFour;
}());
angular.module("d1").directive("myDirectiveFour", MyDirectiveFour.instance);
