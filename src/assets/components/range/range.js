import 'webpack-jquery-ui/slider'

const sliderRange = $("#slider-range")

sliderRange.slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide: function (event, ui) {
        $("#amount").val(ui.values[0] + "₽" + " - " + ui.values[1] + "₽");
    }
});
$("#amount").val(sliderRange.slider("values", 0) + "₽" + " - " + sliderRange.slider("values", 1) + "₽");