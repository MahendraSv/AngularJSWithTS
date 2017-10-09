angular.module('forms1', []);
var LoginCtrl = (function () {
    function LoginCtrl() {
        this.user = {
            userName: "",
            password: ""
        };
    }
    return LoginCtrl;
}());
angular.module('forms1').controller('LoginCtrl', LoginCtrl);
