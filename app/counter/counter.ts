
var mName = angular.module('counter', []);

class CounterCtrl {
    n: number;

    constructor() {
        this.n = 0;
    }

    increment() {
        this.n++;
    }

    decrement() {
        this.n--;
    }

    change(value) {
        this.n += value;
    }

    isMin() {
        return this.n == 0;
    }
}

mName.controller('CounterCtrl', CounterCtrl);
