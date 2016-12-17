define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: false, menu: '' },
                { route: 'Filmes', moduleId: 'viewmodels/Filmes', moduleRootId: 'viewmodels', nav: true, menu: 'Filmes' },
                { route: 'Atores', moduleId: 'viewmodels/Atores', nav: true, menu: 'Atores' },
                { route: 'Diretores', moduleId: 'viewmodels/Diretores', nav: true, menu: 'Diretores' },
                { route: 'Generos', moduleId: 'viewmodels/Generos', nav: true, menu: 'Géneros' },
                { route: 'Paises', moduleId: 'viewmodels/Paises', nav: true, menu: 'Países'},
                { route: 'Linguas', moduleId: 'viewmodels/Linguas', nav: true, menu: 'Línguas' },
            ]).buildNavigationModel();
            return router.activate();
        }
    }
})