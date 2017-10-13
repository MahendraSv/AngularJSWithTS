var App;
(function (App) {
    var Services;
    (function (Services) {
        var SampleService = (function () {
            function SampleService() {
            }
            SampleService.prototype.getCurrentDate = function () {
                return new Date();
            };
            return SampleService;
        }());
        Services.SampleService = SampleService;
        angular.module('products').service('SampleService', SampleService);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
