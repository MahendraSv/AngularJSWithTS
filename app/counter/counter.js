var mName = angular.module('counter', []);
var CounterCtrl = (function () {
    function CounterCtrl() {
        this.n = 0;
    }
    CounterCtrl.prototype.increment = function () {
        this.n++;
    };
    CounterCtrl.prototype.decrement = function () {
        this.n--;
    };
    CounterCtrl.prototype.change = function (value) {
        this.n += value;
    };
    CounterCtrl.prototype.isMin = function () {
        return this.n == 0;
    };
    return CounterCtrl;
}());
mName.controller('CounterCtrl', CounterCtrl);
