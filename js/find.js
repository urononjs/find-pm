// SCROLL TO FORM
$(".play-btn-wrap").click(function (){
    $('html, body').animate({
        scrollTop: $(".registration").offset().top
    }, 1000);
});
// END-SCROLL TO FORM


// PRODUCT
$(document).ready(function(){
    $('.content_toggle').click(function(){
        $('.content_block').slideToggle(300, function(){
            if ($(this).is(':hidden')) {
                $('.content_toggle').html('Показати ще');
            } else {
                $('.content_toggle').html('Скрыть');
            }
        });
        return false;
    });
});
// END-PRODUCT


// SLIDER
jQuery("#carousel").owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    // autoplayTimeout: 7000,
    // smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 1
        },

        1024: {
            items: 2
        },

        1366: {
            items: 2
        }
    }
});
// END-SLIDER


// TIMER
//counts up or down depending on date entered in //format at the bottom

function counter(date) {
    var theDate = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function count() {
        var now = new Date();
        if (theDate > now) {
            var distance = theDate - now;
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
        } else {
            var distance = now - theDate;
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minutes = Math.floor((distance % _hour) / _minute);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var seconds = Math.floor((distance % _minute) / _second);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        var daytext = '';
        if (days > 1) {
            daytext = ' days ';
        } else {
            daytext = ' day ';
        }
        if (days > 0) {
            document.getElementById('counter').innerHTML = '<span class="days">' + days + '</span>' +  '<i> : </i>' + '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
        } else {
            document.getElementById('counter').innerHTML = '<span class="hours">' + hours + '</span>' + '<i> : </i>' + '<span class="minutes">' + minutes + '</span>' + '<i> : </i>' + '<span class="seconds">' + seconds + '</span>';
        }
    }
    timer = setInterval(count, 1000);
}

counter('09/30/2020 1:00:00 GMT-0400 (EDT)');
// END-TIMER