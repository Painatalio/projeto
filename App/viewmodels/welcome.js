define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        displayName: 'Bemvindo à ITW App!',
        description: 'Esta plataforma servirá para o desenvolvimento de aplcações móveis na unidade curricular de Introdução às tecnologias Web (ITW) no ano letivo de 2015/16.',
        features: [
            'Clean MV* Architecture',
            'JS & HTML Modularity',
            'Simple App Lifecycle',
            'Eventing, Modals, Message Boxes, etc.',
            'Navigation & Screen State Management',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS'
        ],
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