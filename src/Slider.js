define([
    "DomElement",
    "DomUtil",
    "Inheritance",
    "TypeCheck",
    "Failure",
    "Merge",
    "html!slider-html",
    "css!slider-css"
], function (
    DomElement,
    DomUtil,
    Inheritance,
    TypeCheck,
    Failure,
    Merge,
    controlHtml
) {
        /**
         * Provides a slider control 
         * @alias Slider 
         * @constructor
         * @param {Object} options - options object
         * @param {Slider.placementType} [options.placementType=Slider.placementType.LEFT] - Where the slider will be placed
         */
        var Slider = function (options) {
            Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
                html: controlHtml,
            }, TypeCheck.isDefined(options) ? options : {}));
        };  
        Inheritance.inheritPrototype(Slider, DomElement);
        /** @enum */
        Slider.placementType = Slider.prototype.placementType = {
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        };

        return Slider;
    });