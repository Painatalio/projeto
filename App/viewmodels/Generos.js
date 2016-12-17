define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
    var generos = function () {
        var self = this;
        var searchGenresUri = 'http://192.168.160.39/api/Genres/Search/';
        var genresUri = 'http://192.168.160.39/api/Genres/';
        var genresCountUri = 'http://192.168.160.39/api/Genres/Count';
        self.searchText = ko.observable("");
        self.genres = ko.observableArray();
        self.genreID = ko.observable();
        self.genresCount = ko.observable(null);
        self.error = ko.observable();
        self.searchTextGood = ko.computed(function () {
            return (self.searchText().length < 3)
        }, self);
        function ajaxHelper(uri, method, data) {
            self.error('');
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            });
        };
        getAllGenres = function () {
            ajaxHelper(genresCountUri, 'GET').done(function (data) {
                self.genresCount(data);
            }); ajaxHelper(genresUri, 'GET').done(function (data) {
                self.genres(data);
            });
        };
        genreDetails = function (genre) {
            ajaxHelper(genresUri + genre.genreID, 'GET').done(function (data) {
                self.genreID(data);
            });
        };
        clearGenres = function () {
            getAllGenres();
            self.searchText("");
        };
        searchGenres = function () {
            ajaxHelper(searchGenresUri + self.searchText(), 'GET').done(function (data) {
                self.genres(data);
            });
        };
        getAllGenres();
    };
    return generos;
});