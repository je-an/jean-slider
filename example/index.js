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
        placementType: Slider.placementType.BOTTOM
    });
    document.body.appendChild(sliderBottom.element);
    var sliderLeft = new Slider({
        placementType: Slider.placementType.LEFT
    });
    document.body.appendChild(sliderLeft.element);
});