import Splide from "@splidejs/splide";

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#slider', {
        type: "fade",
        width: '270px',
    } ).mount();
} );