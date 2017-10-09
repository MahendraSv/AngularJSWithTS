module CounterCtrl.module {
    angular.module('counter', []);

    class CounterCtrl {
        n: number;

        constructor() {
            this.n = 0;
        }

        changeValue(incValue: number): void {
            this.n = this.n + (incValue);
        }

        isMin(): boolean {
            return this.n === 0;
        }
    }

    angular.module('counter').controller('CounterCtrl', CounterCtrl);
}