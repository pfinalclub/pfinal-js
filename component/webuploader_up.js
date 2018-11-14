define([
        'jquery',
        window.pfinaljs.base_url + '/pfinaljs/plug/webuploader/webuploader.min.js',
        'css!' + window.pfinaljs.base_url + '/pfinaljs/plug/webuploader/webuploader.css',

    ],
    function (jquery, WebUploader) {
        return function (el,url) {
            var uploader = WebUploader.create({
                swf: window.pfinaljs.base_url + '/pfinaljs/plug/webuploader/Uploader.swf',
                pick: el,
                server: url,
                resize: false
            })
            return uploader;
        }
    })