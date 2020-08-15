require(["DomUtil", "Slider", "css!bootstrap"], function (DomUtil, Slider) {
    var sliderTop = new Slider({
        placementType: Slider.placementType.TOP
    });
    document.body.appendChild(sliderTop.element);
    var sliderRight = new Slider({
        placementType: Slider.placementType.RIGHT
    });
    document.body.appendChild(sliderRight.element);
    var sliderBottom = new Slider({
        placementType: Slider.placementType.BOTTOM,
        height: 30
    });
    document.body.appendChild(sliderBottom.element);
    var sliderLeft = new Slider({
        placementType: Slider.placementType.LEFT,
        width: "50%"
    });
    document.body.appendChild(sliderLeft.element);
});