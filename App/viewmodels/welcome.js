define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        closeModal: function () {
            var s = document.getElementsByTagName("IFRAME")[1];
            s.src = '';
        },
        trailer: function () {
            var s = document.getElementsByTagName("IFRAME")[1];
            s.src = "http://www.imdb.com/videoembed/vi282768921"
        },
        trailer2: function () {
            var s = document.getElementsByTagName("IFRAME")[1];
            s.src = "http://www.imdb.com/videoembed/vi2827400729";
        },
        trailer3: function () {
            var s = document.getElementsByTagName("IFRAME")[1];
            s.src = "http://www.imdb.com/videoembed/vi2433726233"
        },
        trailer4: function () {
            var s = document.getElementsByTagName("IFRAME")[1];
            s.src = "http://www.imdb.com/videoembed/vi956348185";
        },
    };
});