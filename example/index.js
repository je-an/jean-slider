require(["Slider", "css!bootstrap"], function (Slider) {
    var slider = new Slider({
        height: 500
    });
    document.body.style.padding = "5px";
    document.body.appendChild(slider.element);
});