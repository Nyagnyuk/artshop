
$(document).ready(function () {

    $('.box-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    $('.lastnews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    if ($(window).width() < 992) {
        $('.category-list li a.category-link').on('click', function (event) {
            var checkElement = $(this).next();
            checkElement.stop().animate({'height': 'toggle'}, 500);
            $(this).toggleClass('active');
            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                return false;
            }
        });
    }
    $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });
    // $('.gallery-item').magnificPopup({
    //     type: 'image',
    //     gallery:{
    //         enabled:true
    //     }
    // });


    // Product List
    $('#list-view').click(function() {
        $('.box-list.row > .box-item-grid').attr('class', 'box-item col-md-12 box-item-list');
        $('#grid-view').removeClass('active');
        $('#list-view').addClass('active');
    });

    // Product Grid
    $('#grid-view').click(function() {
        $('.box-list.row > .box-item-list').attr('class', 'box-item col-md-4 box-item-grid');
        $('#list-view').removeClass('active');
        $('#grid-view').addClass('active');
    });

});

