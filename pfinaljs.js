define(['jquery','lodash'], function ($,_) {
    return {
        //模态框
        modal: function (options, callback) {
            require(['component/modal'], function (modal) {
                modal(options, callback);
            })
        }
        //select2下拉
        , select2: function (el, options) {
            require(['component/select2'], function (select2) {
                select2(el, options)
            })
        }
        //layui 日期选择
        , date: function (options) {
            require(['laydate'], function (laydate) {
                laydate.render(options)
            })
        }
        //视频播放器
        , video: function (TagName, callback) {
            require(['component/video'], function (video) {
                video(TagName, callback);
            })
        }
        , msg: function(msg,callback) {
            require(['layer'], function (layer) {
                layer.msg(msg)
            })
        }
        ,  spinners: function (callback) {
            require(['css!/less/css/spinner.css'])
        }
        //表单验证
        , validate: function (options) {
            var options = options ? options:''
            require(['plug/jquery_validate/jquery_validate'], function () {
                $.validate();
            })
        }
        //图片预览
        , preview: function (url, option) {
            option = option ? option : {};
            let opt = $.extend({
                type:1,
                title: '图片预览',
                area: ['50%', '60%'],
                content: '<div style="text-align: center">' +
                    '<img style="max-width: 100%;" src="' + url + '"/>' +
                    '</div>'
            }, option);
            require(['layer'], function (layer) {
                layer.open(opt)
            })
        }

         //设备检测
        , isMobile: function () {
            let userAgentInfo = navigator.userAgent;
            let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
            let flag = false;
            for (let v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = true;
                    break;
                }
            }
            return flag;
        }
    } 
    
})