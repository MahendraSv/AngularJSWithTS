var CounterCtrl;
(function (CounterCtrl_1) {
    var module;
    (function (module) {
        angular.module('counter', []);
        var CounterCtrl = (function () {
            function CounterCtrl() {
                this.n = 0;
            }
            CounterCtrl.prototype.changeValue = function (incValue) {
                this.n = this.n + (incValue);
            };
            CounterCtrl.prototype.isMin = function () {
                return this.n === 0;
            };
            return CounterCtrl;
        }());
        angular.module('counter').controller('CounterCtrl', CounterCtrl);
    })(module = CounterCtrl_1.module || (CounterCtrl_1.module = {}));
})(CounterCtrl || (CounterCtrl = {}));
