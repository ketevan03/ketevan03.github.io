$(function () {
    $(window).scroll(function () {
        $('.about').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.portfolio').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+950) {
                $(this).addClass("fadeInUp");
            }
        });
    });
})

$(function () {
    $(window).scroll(function () {
        $('.consultation').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+1320) {
                $(this).addClass("bounceIn");
            }
        });
    });
})
