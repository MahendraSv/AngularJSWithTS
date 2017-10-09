angular.module('forms1', []);

class LoginCtrl {
    public user: {} = {
        userName: "",
        password: ""
    };
}

angular.module('forms1').controller('LoginCtrl', LoginCtrl);