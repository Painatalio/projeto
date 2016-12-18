define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        closeModal: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = '';
        },
        trailer: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x42pgdt?autoplay=1&quality='720'";
        },
        trailer2: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x4m9s8d?autoplay=1&quality='720'";
        },
        trailer3: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x55flyx?autoplay=1&quality='720'"
        },
        trailer4: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x441b0i?autoplay=1&quality='720'";
        }
    };
});