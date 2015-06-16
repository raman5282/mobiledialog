// JavaScript Document
$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    variableWidth: true
});


$(function () {
    /*$("a.youtube").YouTubePopup({ autoplay: 0, draggable: true });*/
    $(".rslider").slider();

    // tooltip js
    $('.style-icon, .color-icon, .price-icon').click(function (e) {
        var getParent = $(this).parentsUntil().attr('id');
        var relValue = $(this).attr('rel');
        var childernName = ('.' + relValue);
        $('#' + getParent + " > " + childernName).slideToggle(200);
    });

    $('.close').click(function (e) {
        $('.price-tip, .colortip, .styletip').slideUp(200);
    });
})

// search slim scroll 
$(function () {
    var product_info;
    //getting responsviee height
    var spaceValue;
    var resizeTimeout;
    var dis;

    if ($(window).width() > 700) {
        var spaceValue = 57;
        scrollings();
        searchpage()
    }

    if ($(window).width() < 700) {

        $('#searchstrip').css('height', '0');
        spaceValue = 18;

        scrollings();
        searchpage();
    }

    $(window).resize(function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {

            if ($(window).width() > 700) {
                var spaceValue = 57;
                scrollings();
                searchpage();
            }

            if ($(window).width() < 700) {

                $('#searchstrip').css('height', '0');
                spaceValue = 18;

                scrollings();
                searchpage();
            }

        }, 500);
    });

    function scrollings() {
        var elementheight = ($('#search-header').height() + $('#searchslider').height() + $('#searchstrip').height() + $('.footerbox').height() + $('#productheading').height() + spaceValue);
        dis = $(window).height() - elementheight;

        $('.slimScrollDiv, .slimScrollDiv .slimscrolldiv').css('max-height', dis);
        $('.slimScrollDiv, .slimScrollDiv .slimscrolldiv').css('height', dis);

    }

    // newsearch scroll
    function newsearch() {

        $('.product-info').slimScroll({
            //   alwaysVisible: true,
            //  opacity: 1,
            height: customheight,
            allowPageScroll: true,
            disableFadeOut: true
        });

    }

    // new search page
    function searchpage() {

        var search_no = $('.sp-strip').size();
        for (i = 0; i <= search_no; i++) {
            customheight = $('.sp-strip').eq(i).children('.nproduct-img.pull-left').height();
            newsearch();
        }
    }
});

//// video popup
//$(function () {
//    // Init Plugin
//    $('.video-icon').magnificPopup({
//        disableOn: 250,
//        type: 'iframe',
//        mainClass: 'mfp-fade',
//        removalDelay: 160,
//        preloader: false,

//        fixedContentPos: false
//    });

//});

$('.slimscrolldiv').slimscroll({
    //   alwaysVisible: true,
    //  opacity: 1,
    height: 'auto',
    allowPageScroll: true,
    disableFadeOut: true
});
