var MyServices;
(function (MyServices) {
    var SampleService = (function () {
        function SampleService() {
        }
        SampleService.prototype.getDate = function () {
            return (new Date()).toLocaleTimeString();
        };
        return SampleService;
    }());
    MyServices.SampleService = SampleService;
    angular.module('products').service('SampleService', SampleService);
})(MyServices || (MyServices = {}));
