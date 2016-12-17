define(['plugins/http', 'durandal/app', 'knockout'], function () {
    var diretores = function () {
        var self = this;
        var searchDirectorsUri = 'http://192.168.160.39/api/Directors/Search/';
        var directorsUri = 'http://192.168.160.39/api/Directors/';
        var directorsCountUri = 'http://192.168.160.39/api/Directors/Count';
        self.searchText = ko.observable("");
        self.directors = ko.observableArray();
        self.directorID = ko.observable();
        self.directorsCount = ko.observable(null);
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
            })
        }
        getAllDirectors = function () {
            ajaxHelper(directorsCountUri, 'GET').done(function (data) {
                self.directorsCount(data);
            }); ajaxHelper(directorsUri, 'GET').done(function (data) {
                self.directors(data);
            });
        };
        selectDirector = function (director) {
            ajaxHelper(directorsUri + director.directorID, 'GET').done(function (data) {
                self.directorID(data);
            });
        };
        clearDirectors = function () {
            getAllDirectors();
            self.searchText("");
        };
        searchDirectors = function () {
            ajaxHelper(searchDirectorsUri + self.searchText(), 'GET').done(function (data) {
                self.directors(data);
            });
        }
        getAllDirectors();
    };
    return diretores;
});