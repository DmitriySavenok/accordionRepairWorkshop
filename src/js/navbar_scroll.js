$(document).ready(function() {
    jQuery(".scrollto").click(function () {
    elementClick = jQuery(this).attr("href")

    $('#navbar-menu-toggle').removeClass('navbar-menu-toggle-show')


    destination = jQuery(elementClick).offset().top - 70;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 10);
    return false;
    });
});