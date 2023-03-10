
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

    //Validácia formulára

    $('#offer-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
            }
        },
        messages: {
            username:"Uveďte Vaše jméno",
            phone: "Uveďte Váš telefon"
        }
    });

    $('#brief-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
            }
        },
        messages: {
            username:"Uveďte Vaše jméno",
            phone: "Uveďte Váš telefon"
        }
    });



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