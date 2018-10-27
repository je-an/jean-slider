// jscs:disable
// jshint ignore:start
define([
    "Slider"
], function (Slider) {
    describe('Slider.spec.js', function () {
        var instance;
        beforeEach(function () {
            instance = new Slider();
        });
        describe("Slider", function () {
            it("TODO: Check if all members are available | EXPECTATION: Slider has all necessary members", function () {
                var numberOfMembers = 0;
                expect(Object.keys(instance).length).toEqual(numberOfMembers);
            });
            it("TODO: Check if all methods are available | EXPECTATION: Slider has all necessary methods", function () {
                var numberOfMethods = 0;
                var methodCount = Object.keys(Object.getPrototypeOf(instance)).length;
                expect(methodCount).toEqual(numberOfMethods);
            });
        });
    });
});

