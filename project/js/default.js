$(document).ready(function() {

    // Version 3: Menü ein-/ ausfaden
    $('header nav ul li:has(ul)').hoverIntent(function() {
        $(this).children('ul').animate({
            'max-height' : '400px',
            'opacity' : 1
        }, 500);
    }, function() {
        $(this).children('ul').animate({
            'max-height' : '0px',
            'opacity' : 0
        }, 500);
    });

    // Slider => Eigenschaften erweitern
    $('.ke-gallery').unslider({
        dots : true,
        fluid : true,
        arrows : true
    });
});