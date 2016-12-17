define(['plugins/http', 'durandal/app', 'knockout'], function () {
    var paises = function () {
        var self = this;
        var searchCountriesUri = 'http://192.168.160.39/api/Countries/Search/';
        var countriesUri = 'http://192.168.160.39/api/Countries/';
        var countriesCountUri = 'http://192.168.160.39/api/Countries/Count';
        self.searchText = ko.observable("");
        self.countries = ko.observableArray();
        self.countryID = ko.observable();
        self.countriesCount = ko.observable(null);
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
        getAllCountries = function () {
            ajaxHelper(countriesCountUri, 'GET').done(function (data) {
                self.countriesCount(data);
            }); ajaxHelper(countriesUri, 'GET').done(function (data) {
                self.countries(data);
            });
        };
        countryDetails = function (country) {
            ajaxHelper(countriesUri + country.countryID, 'GET').done(function (data) {
                self.countryID(data);
            });
        };
        clearCountries = function () {
            getAllCountries();
            self.searchText("");
        };
        searchCountries = function () {
            ajaxHelper(searchCountriesUri + "none?name=" + self.searchText(), 'GET').done(function (data) {
                self.countries(data);
            });
        };
        getAllCountries();
    };
    return paises;
});