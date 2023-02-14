
$(document).ready (function(){

    //napojenie animácií
    new WOW().init();
    
    var button = $('#button')
    var modal = $('#modal')
    var close = $('#close')
    
    button.on('click', function(){
        modal.addClass('modal_active')
    })

    close.on('click', function(){
        modal.removeClass('modal_active')
    })

    //napojenie slider
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1370,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 980,
              settings: {
                slidesToShow: 1,
              }
            },
            
        ]    
    
    })
})