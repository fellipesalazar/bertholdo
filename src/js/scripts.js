$(".banners").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: "<div class='arrow prev flex centered'><i class='fas fa-chevron-left'></i></div>",
    nextArrow: "<div class='arrow next flex centered'><i class='fas fa-chevron-right'></i></div>",
});

$(".products").slick({
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: "<div class='p arrow prev flex centered'><i class='fas fa-chevron-left'></i></div>",
    nextArrow: "<div class='p arrow next flex centered'><i class='fas fa-chevron-right'></i></div>",
    responsive: [
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

var phoneMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
phoneOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(phoneMaskBehavior.apply({}, arguments), options);
    }
};

$('.phone').mask(phoneMaskBehavior, phoneOptions);

$(".chat-header, .open-chat").click(function(){
    $(".chat, .chat-header .fas, .open-chat").toggleClass("open");
});

$(".back-to-top").click(function(){
    $("html, body").animate({
        scrollTop: 0
    });
});

$(".search").click(function(){
    $(".box-search").fadeToggle(250);
    $(".box-search input").focus();
});

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > getDocHeight() - 100) {
        $(".go-to-whats").addClass("bottom");
        $(".open-chat").addClass("bottom");
    }else{
        $(".go-to-whats").removeClass("bottom");
        $(".open-chat").removeClass("bottom");
    }
});

$("#toggleOn").click(function(){
    $(this).hide();
    $("#toggleOff").show().css("display","flex");
    $(".menu-mobile").fadeIn(250).css("display","flex");
});

$("#toggleOff").click(function(){
    $(this).hide();
    $("#toggleOn").show().css("display","flex");
    $(".menu-mobile").fadeOut(250);
});
