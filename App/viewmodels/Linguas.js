define(['plugins/http', 'durandal/app', 'knockout'], function () {
    var linguas = function () {
        var self = this;
        var searchLanguagesUri = 'http://192.168.160.39/api/Languages/Search/';
        var languagesUri = 'http://192.168.160.39/api/Languages/';
        var languagesCountUri = 'http://192.168.160.39/api/Languages/Count';
        self.searchText = ko.observable("");
        self.languages = ko.observableArray();
        self.languageID = ko.observable();
        self.languagesCount = ko.observable(null);
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
        getAllLanguages = function () {
            ajaxHelper(languagesCountUri, 'GET').done(function (data) {
                self.languagesCount(data);
            }); ajaxHelper(languagesUri, 'GET').done(function (data) {
                self.languages(data);
            });
        };
        languageDetails = function (laguage) {
            ajaxHelper(languagesUri + laguage.languageID, 'GET').done(function (data) {
                self.languageID(data);
            });
        };
        clearLanguages = function () {
            getAllLanguages();
            self.searchText("");
        };
        searchLanguages = function () {
            ajaxHelper(searchLanguagesUri + self.searchText(), 'GET').done(function (data) {
                self.languages(data);
            });
        }
        getAllLanguages();
    };
    return linguas;
});