define([ // jscs:ignore
    "DomElement",
    "DomUtil",
    "Inheritance",
    "TypeCheck",
    "Failure",
    "Merge",
    "text!slider-html",
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
     * Provides functionality for a slider mechanism 
     * @alias Slider 
     * @constructor
     * @param {Object} options - options object
     * @param {Boolean} [options.isExpanded=false] - True if slider is expanded, false otherwise
     * @param {Number|String} [options.width=300] - width of the slider - needed if slider is placed left or right
     * @param {Number} [options.height=300] - height of the slider - needed if slider is placed top or botton
     * @param {Slider.placementType} [options.placementType=Slider.placementType.LEFT] - side of the screen, where the slider will be placed
     */
    var Slider = function (options) {
        Inheritance.inheritConstructor(DomElement, this, Merge({ // jscs:ignore
            arrowExpanded: {
                top: "&#9650;",
                right: "&#9654;",
                bottom: "&#9660;",
                left: "&#9664;"
            },
            arrowCollapsed: {
                top: "&#9660;",
                right: "&#9664;",
                bottom: "&#9650;",
                left: "&#9654;"
            },
            html: controlHtml,
            isExpanded: TypeCheck.isBoolean(options.isExpanded) ? options.isExpanded : false,
            width: (TypeCheck.isNumber(options.width) || TypeCheck.isString(options.width)) ? options.width : 300,
            height: (TypeCheck.isNumber(options.height) || TypeCheck.isString(options.height)) ? options.height : 300,
            placementType: TypeCheck.isEnumValue(options.placementType, this.placementType) ? options.placementType : this.placementType.BOTTOM
        }, TypeCheck.isDefined(options) ? options : {}));
        this.body = DomUtil.getChildByClass(this.element, "body");
        this.btn = DomUtil.getChildByClass(this.element, "toogle");
        this.btn.addEventListener("click", this._onBtnClick.bind(this));
        this._place(this.options.placementType);
    };
    Inheritance.inheritPrototype(Slider, DomElement);
    /** @enum */
    Slider.placementType = Slider.prototype.placementType = {
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    };
    /**
     * @param {String} id - the id of the element which shall be added
     * @param {HTMLElement} element - the element which shall be added to body of the slider 
     */
    Slider.prototype.add = function (id, element) {
        if (!TypeCheck.isString(id)) {
            Failure.throwTypeError("id is not a string");
        }
        element.setAttribute("data-jean-slider-id", id);
        this.body.appendChild(element);
        return true;
    };
    /** @param {String} id - the id of the element which shall be removed */
    Slider.prototype.remove = function (id) {
        var element = DomUtil.getChildById(this.body, id), isRemoved = false;
        if (TypeCheck.isDefined(element)) {
            isRemoved = true;
            element.remove();
        }
        return isRemoved;
    };
    /** @param {Slider.placementType} placementType - the placement type where the slider shall be located */
    Slider.prototype._place = function (placementType) {
        if (TypeCheck.isEnumValue(placementType, this.placementType)) {
            this._placeSlider(placementType);
            this._placeButton(placementType);
        } else {
            Failure.throwTypeError("The provided placementType is not a value of Slider.placementType");
        }
    };
    /** @param {Slider.placementType} placementType - the placement type where the slider shall be located */
    Slider.prototype._placeSlider = function (placementType) {
        var options = this.options, element = this.element;
        element.style.width = "";
        element.style.height = "";
        element.style.padding = "";
        element.classList.add("jean-slider-place-" + placementType);

        if (options.isExpanded &&
            (placementType === this.placementType.LEFT || placementType === this.placementType.RIGHT)) {
            element.style.width = options.width;
            element.style.padding = "5px";
        } else if
            (options.isExpanded &&
            (placementType === this.placementType.TOP || placementType === this.placementType.BOTTOM)) {
            element.style.height = options.height;
            element.style.padding = "5px";
        }
    };
    /** @param {Slider.placementType} placementType - the placement type where the button shall be located */
    Slider.prototype._placeButton = function (placementType) {
        var btn = this.btn, options = this.options, half = "50%", isExpanded = options.isExpanded,
            isTopOrBottom = (placementType === this.placementType.TOP || placementType === this.placementType.BOTTOM);
        btn.classList.add("jean-slider-button-transition-" + placementType);
        if (isTopOrBottom) {
            btn.style.left = half;
        } else {
            btn.style.top = half;
        }
        if (isExpanded) {
            btn.style[placementType] = isTopOrBottom ? options.height : options.width;
            btn.innerHTML = options.arrowExpanded[placementType];
        } else {
            btn.style[placementType] = 0;
            btn.innerHTML = options.arrowCollapsed[placementType];
        }
    };
    /** */
    Slider.prototype._onBtnClick = function () {
        this.options.isExpanded = !this.options.isExpanded;
        this._place(this.options.placementType);
    };
    /** Check if  */
    Slider.prototype._isPercentageValue = function (value) {
        return TypeCheck.isString(value) && value.includes("%");
    };
    return Slider;
});