module MyServices {
    export class SampleService {
        getDate(): string {
            return (new Date()).toLocaleTimeString();
        }
    }

    angular.module('products').service('SampleService', SampleService);
}