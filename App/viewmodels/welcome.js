define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        closeModal: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = '';
        },
        trailer: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x42pgdt";
        },
        trailer2: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x4m9s8d";
        },
        trailer3: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x55flyx"
        },
        trailer4: function () {
            var s = document.getElementsByTagName("IFRAME")[0];
            s.src = "//www.dailymotion.com/embed/video/x441b0i";
        }
    };
});
