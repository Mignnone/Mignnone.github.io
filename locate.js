$(document).ready(function(){
    $('[data-type="mineralwater"]').css("background-color","purple");
    $('[data-type="vitamin"]').css("background-color","green");
    $('[data-type="proteinbar"]').css("background-color","blue");
    $(".product-item").css('cursor','pointer');
})

/*
$('a[href^="#home"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});

$('a[href^="#history"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});

$('a[href^="#products"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});
$('a[href^="#guarantee"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});
$('a[href^="#people"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);

    return false;
});
*/

$('.navbar a[href*="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('#history').clone().prop({'id' : 'history-clone'}).insertAfter('#history').text('The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today its seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.')

$('#history-clone').css("background-color","#9e9e9e");

$('a[href="#history"]').clone().prop({'href':'#history-clone'}).appendTo('.navbar').text('New history')

