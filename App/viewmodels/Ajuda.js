define(['plugins/http', 'durandal/app', 'knockout'], function () {
    return {
        validar: $('form').submit(function (event) {
            var retVal = true;
            if ($.trim($('#nome').val()).length < 3) {
                if ($('#nome_Error').hasClass("no_error"))
                    $('#nome_Error').removeClass("no_error").addClass("error");
                retVal = false;
            }
            else {
                if ($('#nome_Error').hasClass("error"))
                    $('#nome_Error').removeClass("error").addClass("no_error");
            };
            return retVal;
        }),
    };
});