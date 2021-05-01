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

if (document.querySelector('.splide') != null){
    new Splide( '.splide', {
        pagination: false,
        type   : 'loop',
        padding: {
            right: '350px',
            left : '350px',
        },
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

