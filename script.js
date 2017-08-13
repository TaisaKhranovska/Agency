//Open contact popup---------------------------------------------------------------------
function deselect(e) {
    $('.pop').slideFadeToggle(function () {
        e.removeClass('selected');
    });
}

function removeShadow() {
    $('.shadow').css("display", "none");
}

$(function () {
    $('#contact').on('click', function () {
        if ($(this).hasClass('selected')) {
            deselect($(this));
        } else {
            $(this).addClass('selected');
            $('.pop').slideFadeToggle();
            $('.shadow').css("display", "block");
        }
        return false;
    });

    $('.close').on('click', function () {
        deselect($('#contact'));
        removeShadow();
        return false;
    });

    $('.shadow').on('click', function () {
        deselect($('#contact'));
        removeShadow();
        return false;
    });
});

$.fn.slideFadeToggle = function (easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, '_default', easing, callback);
};


//Scroll up-------------------------------------------------------------------------------
$(document).ready(function () {
    $(".up_btn").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
});

// products change by click-------------------------------------------------------------------------------------
$(document).ready(function () {
    var selector = '.nav_products_item';
    var all = 'img[src^="img/products"]';
    var print = 'img[src="img/products_print.png"]';
    var user = 'img[src="img/products_user.png"]';
    var web = 'img[src="img/products_web.png"]';
    var mock = 'img[src="img/products_mock.png"]';

    function addflex() {
        $('.products_item').addClass('addFlex');
    }

    $(selector).on('click', function () {
        $(selector).removeClass('active_color');
        $(this).addClass('active_color');
    });


    $('.nav_products_item:first-of-type').on('click', function () {
        $(all).removeClass('img_active');
        $(all).addClass('img_active');
        // $('.products_item').css("display", "inline-block");
    });
    $('.nav_products_item:nth-of-type(2)').on('click', function () {
        $(all).removeClass('img_active');
        $(print).addClass('img_active');
        addflex();

    });

    $('.nav_products_item:nth-of-type(3)').on('click', function () {
        $(all).removeClass('img_active');
        $(web).addClass('img_active');
        addflex();
    });
    $('.nav_products_item:nth-of-type(4)').on('click', function () {
        $(all).removeClass('img_active');
        $(user).addClass('img_active');
        addflex();
    });
    $('.nav_products_item:last-of-type').on('click', function () {
        $(all).removeClass('img_active');
        $(mock).addClass('img_active');
        $('.products_line > img:nth-of-type(4)').css("margin-right", "15px");
        addflex();
    });
});