/**
 * 前端模块配置
 * @author 南丞 <lampxiezi@163.com>
 * @homepage  https://friday-go.cc/
 */

require.config({
    urlArgs: 'version=0.1',
    baseUrl: window.pfinaljs.base,
    paths: {
        css: 'css.min',
        pfinaljs: 'pfinaljs',
        layer: window.pfinaljs.base + 'pfinaljs/plug/plug/layer/layer',
        laydate: window.pfinaljs.base + 'pfinaljs/plug/plug/laydate/laydate',
        enlarge: window.pfinaljs.base + 'pfinaljs/plug/plug/enlarge/enlarge',
        bootstrap: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min',
        bootstrap4: 'https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.bundle.min',
        lodash: 'https://cdn.bootcss.com/lodash.js/4.17.10/lodash.min',
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        webuploader: window.pfinaljs.base + 'pfinaljs/plug/webuploader/webuploader.min'
    },
    shim: {
        pfinaljs: {
            deps: ["css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"]
        },
        layer: {
            deps: ['css!' + window.pfinaljs.base + 'plug/layer/theme/default/layer.css']
        },
        bootstrap: {
            deps: ['css!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css']
        },
        bootstrap4: {
            deps: ['css!https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap-grid.min.css']
        },
        enlarge: {
            deps: [window.pfinaljs.base + 'plug/enlarge/enlarge.init.js', 'css!' + window.pfinaljs.base_url + 'pfinaljs/plug/enlarge/enlarge.css']
        },
        webuploader: {
            deps: ['css!' + window.pfinaljs.base + 'pfinaljs/plug/webuploader/webuploader.css']
        }
    },
    waitSeconds: 30
})