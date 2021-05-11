$('#slider1').slick({
    accessibility: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
if (document.getElementById('scroll') != null){
    document.getElementById('scroll').addEventListener('click', () => {
        $('html, body').animate({
            scrollTop: 800
        }, 500);
    })
}
let width1, right1, left1;
width1 = window.screen.width;
if (width1 <= 1400){
    right1 = '0';
    left1 = '0';
}
else{
    right1 = '350px';
    left1 = '350px';
}

if (document.querySelector('.splide') != null){
    new Splide( '.splide', {
        pagination: false,
        type   : 'loop',
        padding: {
            right: right1,
            left : left1,
        },
        focus: 'center',
    } ).mount();
}



if (document.querySelector('.modal') !== null){
    let modal = new tingle.modal({})
    document.querySelector(".modal").addEventListener('click', () => {
        modal.open()
    })
    if (document.querySelector(".modal2") != null){
        document.querySelector(".modal2").addEventListener('click', () => {
            modal.open()
        })
    }
    document.querySelector(".modal3").addEventListener('click', () => {
        modal.open()
    })
    // document.querySelector("#modal_close").addEventListener('click', () => {
    //     modal.close()
    // })
    let modal_content = document.querySelector('#modal_content');
    modal.setContent(modal_content);
}


$("#1").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".projects").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#2").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".technology").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#3").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".why").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#4").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".works").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#5").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".response").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#6").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".contact-us").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#11").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".projects").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$("#22").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".technology").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#33").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".why").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#44").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".works").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#55").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".response").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#66").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".contact-us").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});

$('.navbar__burger').click(() => {
    $('#nav-mobile').toggleClass('navbar--mobile--active')
    $('.navbar__burger').toggleClass('navbar__burger--active')
})
$('#nav-mobile').click(() => {
    $('#nav-mobile').removeClass('navbar--mobile--active')
    $('.navbar__burger').removeClass('navbar__burger--active')
})

