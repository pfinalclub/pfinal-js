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
        layer:   window.pfinaljs.base + 'plug/layer/layer',
        laydate: window.pfinaljs.base + 'plug/laydate/laydate',
        bootstrap: 'https://cdn.bootcss.com/bootstrap/4.1.1/js/bootstrap.bundle.min',
        lodash: 'https://cdn.bootcss.com/lodash.js/4.17.10/lodash.min',
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        
    },
    shim:{
        pfinaljs: {
            deps: ["css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"]
        },
        layer:{
            deps:['css!'+  window.pfinaljs.base +'plug/layer/theme/default/layer' ]
        },
        bootstrap:{
            deps: ['css!https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.min.css']
        }
    },
    waitSeconds: 30
})
