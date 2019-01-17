define([
    window.pfinaljs.base_url + '/pfinaljs/plug/wangEditor/wangEditor.min.js',
    'css!' + window.pfinaljs.base_url + '/pfinaljs/plug/wangEditor/wangEditor.min.css'
], function (E) {
    return function (el, callback) {
        let editor = new E(el)
        editor.create()
        if ($.isFunction(callback)) {
            callback(editor);
        }
    }
});