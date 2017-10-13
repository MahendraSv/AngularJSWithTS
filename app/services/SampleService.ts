module App.Services {
    export class SampleService {
        public getCurrentDate() {
            return new Date();
        }
    }

    angular.module('products').service('SampleService', SampleService);
}