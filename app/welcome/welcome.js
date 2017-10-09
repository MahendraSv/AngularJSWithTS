var WelcomeCtrl = (function () {
    function WelcomeCtrl() {
        this.msg = "Welcome to AngularJS with TS";
        this.msg1 = "xxxx";
    }
    return WelcomeCtrl;
}());
// var mod = angular.module('angularWithTS');
angular.module('angularWithTS').controller('WelcomeCtrl', WelcomeCtrl);
