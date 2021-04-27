$('#slider1').slick({
    accessibility: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
document.getElementById('scroll').addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: 800
    }, 500);
})

new Splide( '.splide', {
    pagination: false,
    type   : 'loop',
    padding: {
        right: '350px',
        left : '350px',
    },
} ).mount();