$(window).ready(function () {
     $('.nav-link').click(function(e) {
        let href = $(this).attr('href');
        let ybs = $(href);
        $('html,body').animate({
        scrollTop: ybs.offset().top - 150
        },1250, 'easeInOutExpo');
        e.preventDefault();
     }); 
    $('.navbar-brand').click(function (e) {
        let href = $(this).attr('href');
        let ybs = $(href);
        $('html,body').animate({
            scrollTop: ybs.offset().top - 150
        }, 1250, 'easeInOutExpo');
        e.preventDefault();
    });
    $('.page-scroll').click(function (e) {
        let href = $(this).attr('href');
        let ybs = $(href);
        $('html,body').animate({
            scrollTop: ybs.offset().top - 150
        }, 1250, 'easeInOutExpo');
        e.preventDefault();
    });

    $('.jumbotron .display-4').addClass('show', function () {
        $(this).fadeIn('slow');
    });
    $(this).scroll(function () {
        let wScroll = $(this).scrollTop();
        if (wScroll > $('.feature').offset().top -500) {
            $('.feature h2').addClass('showh2 ', function () {
                $(this).fadeIn('slow');
            });
            $('.feature p').addClass('showp ', function () {
                $(this).fadeIn('slow');
            });
        } 
        $('.jumbotron .display-4').css({
            'transform': 'translate(0px, ' + wScroll / -4 + '%)'
        });
        $('.jumbotron .lead').css({
            'transform': 'translate(0px, ' + wScroll / -2 + '%)'
        });
        $('.jumbotron .floor').css({
            'transform': 'translate(0px, ' + wScroll / -1.2 + '%)'
        });
        $('.fastom').css({
            'transform': 'translate(0px, ' + wScroll / -1 + '%)'
        });

        let navbar = $('.navbar').offset().top;
        if (wScroll > 90) {
            $('.navbar').addClass('muncul');
            // $('.nav-link').addClass('up');
        } else if (wScroll < 90) {
            $('.navbar').removeClass('muncul');
            // $('.nav-link').removeClass('up');
        }

        if (wScroll > $('.info-panel').offset().top - 450) {
            $('.info-panel .col-lg').each(function (i) {
                setTimeout(function () {
                    $('.info-panel .col-lg').eq(i).addClass('info');
                }, 100 * (i + 1), 'easeInOutExpo');
            });
        }
        // if (wScroll > $('#bagan').offset().top - 250) {
        //     $('p.leadp').addClass('munculleadp', function () {
        //         $(this).fadeIn('slow');
        //     });
        //     $('p.display4').addClass('munculdisplayp', function () {
        //         $(this).fadeIn('slow');
        //     });
        // }
        // if (wScroll > $('.proker').offset().top - 450) {
        //     $('.proker .col').each(function (i) {
        //         setTimeout(function () {
        //             $('.proker .col').eq(i).addClass('showproker');
        //         }, 100 * (i + 1), 'easeInOutExpo');
        //     });
        // }
    });
});