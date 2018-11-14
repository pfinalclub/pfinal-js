define([
    'jquery',
    'css!' + window.pfinaljs.base_url + '/pfinaljs/plug/webuploader/webuploader.css',
    window.pfinaljs.base_url + '/pfinaljs/plug/webuploader/webuploader.min.js',

], function () {
    return function (el,url,obj) {
        console.log(url) 
    }
})