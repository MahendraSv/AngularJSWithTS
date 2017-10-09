describe("CounterCtrl", function() {
    var $controllerConstructor;
    var scope;

    beforeEach(module('counter'));
    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should increment the value', function() {
        var ctrl = $controllerConstructor('CounterCtrl', {$scope: scope});
        // expect(ctrl.changeValue(1))
    });
});