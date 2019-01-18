define([
    'jquery',
    window.pfinaljs.base_url + '/pfinaljs/plug/bootstrap-notify/bootstrap-notify.min.js',
], function($) {
    //console.log($);
    return function (options, settings) {
        return $.notify(options, settings);
    }
});