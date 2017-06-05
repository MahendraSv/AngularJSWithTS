interface IHelloWorld {
    message: string;
}

class HelloWorldCtrl implements IHelloWorld {
    message: string;

    constructor() {
        this.message = "Hello World!!!"
    }
}

angular.module('angularWithTS').controller('HelloWorldCtrl', HelloWorldCtrl);