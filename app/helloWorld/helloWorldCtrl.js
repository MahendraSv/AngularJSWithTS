var HelloWorldCtrl = (function () {
    function HelloWorldCtrl() {
        this.message = "Hello World!!!";
    }
    return HelloWorldCtrl;
}());
angular.module('angularWithTS').controller('HelloWorldCtrl', HelloWorldCtrl);
