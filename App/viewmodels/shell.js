define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: false, menu: '' },
                { route: 'Atores', moduleId: 'viewmodels/Atores', nav: true, menu: 'Atores' },
                { route: 'Diretores', moduleId: 'viewmodels/Diretores', nav: true, menu: 'Diretores' },
                { route: 'Filmes', moduleId: 'viewmodels/Filmes', nav: true, menu: 'Filmes' },
                { route: 'Generos', moduleId: 'viewmodels/Generos', nav: true, menu: 'Géneros' },
                { route: 'Linguas', moduleId: 'viewmodels/Linguas', nav: true, menu: 'Línguas' },
                { route: 'Paises', moduleId: 'viewmodels/Paises', nav: true, menu: 'Países'},
                { route: 'Ajuda', moduleId: 'viewmodels/Ajuda', nav: true, menu: 'Ajuda' }
            ]).buildNavigationModel();
            return router.activate();
        }
    }
})