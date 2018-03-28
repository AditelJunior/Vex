$(function () {
    $(document).ready(function () {
        $(".cont_reclame").owlCarousel({
            items: 8,
            autoplay: true,
            loop: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                400:{
                    items: 2,
                },
                600:{
                    items: 3,
                },
                830:{
                    items: 4,
                }
            }
        });
    });
    var threeLine = $(".three_line")
    var navItem = $(".nav_item")
    $(threeLine).on('click', function () {
        navItem.slideToggle(400)
    })
})