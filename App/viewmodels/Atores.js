define(['plugins/http', 'durandal/app', 'knockout'], function () {
    var atores = function () {
        var self = this;
        var searchActorsUri = 'http://192.168.160.39/api/Actors/Search/';
        var actorsUri = 'http://192.168.160.39/api/Actors/';
        var actorsCountUri = 'http://192.168.160.39/api/Actors/Count';
        self.searchText = ko.observable("");
        self.actors = ko.observableArray();
        self.actorID = ko.observable();
        self.actorsCount = ko.observable(null);
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
        getAllActors = function () {
            ajaxHelper(actorsCountUri, 'GET').done(function (data) {
                self.actorsCount(data);
            }); ajaxHelper(actorsUri, 'GET').done(function (data) {
                self.actors(data);
            });
        };
        selectActor = function (actor) {
            ajaxHelper(actorsUri + actor.actorID, 'GET').done(function (data) {
                self.actorID(data);
            });
        };
        clearActors = function () {
            getAllActors();
            self.searchText("");
        };
        searchActors = function () {
            ajaxHelper(searchActorsUri + self.searchText(), 'GET').done(function (data) {
                self.actors(data);
            });
        };
        getAllActors();
    };
    return atores;
});