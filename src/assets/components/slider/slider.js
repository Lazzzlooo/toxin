import Splide from "@splidejs/splide";
const handleSlider = () => {
    document.querySelectorAll('[data-slider="slider"]').forEach(slider => {
        new Splide(slider, {
            type: "fade",
            width: '270px',
        }).mount();
    })
}
document.addEventListener( 'DOMContentLoaded', handleSlider);
