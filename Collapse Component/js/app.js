$(document).ready(function() {
    $('.card-body').hide();

    $('.one-top a').click(function() {
        $('.one-bottom').slideToggle('slow');
    });
    $('.two-top a').click(function() {
        $('.two-bottom').slideToggle('slow');
    });
    $('.three-top a').click(function() {
        $('.three-bottom').slideToggle('slow');
    });

});