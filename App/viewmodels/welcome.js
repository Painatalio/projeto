define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        closeModal: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = '';
        },
        trailer: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "http://www.imdb.com/videoembed/vi1590670873"
        },
        trailer2: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x55flyx";
        },
        trailer3: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x4m9s8d"
        },
        trailer4: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x441b0i";
        }
    };
});