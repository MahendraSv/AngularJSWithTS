

class WelcomeCtrl {
    msg: string = "Welcome to AngularJS with TS";
    msg1 = "xxxx";
}

// var mod = angular.module('angularWithTS');

angular.module('angularWithTS').controller('WelcomeCtrl', WelcomeCtrl);