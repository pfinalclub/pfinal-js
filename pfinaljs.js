define(['jquery', 'lodash'], function ($, _) {
    return {
        //模态框
        modal: function (options, callback) {
                require(['component/modal'], function (modal) {
                    modal(options, callback);
                })
            }
            //select2下拉
            ,
        select2: function (el, options) {
                require(['component/select2'], function (select2) {
                    select2(el, options)
                })
            }
            //layui 日期选择
            ,
        date: function (options) {
                require(['laydate'], function (laydate) {
                    laydate.render(options)
                })
            }
            //视频播放器
            ,
        video: function (TagName, callback) {
                require(['component/video'], function (video) {
                    video(TagName, callback);
                })
            }
            // 信息
            ,
        msg: function (msg, callback) {
                require(['layer'], function (layer) {
                    layer.msg(msg)
                })
            }
            // css 等待按钮
            ,
        spinners: function (callback) {
                //console.log(123);
                require(['css!' + window.location.host + '/pfnaljs/less/css/spinner.css'])
            }

            //瀑布流
            ,
        waterfall: function (el, data) {
                require(['pfinaljs', 'bootstrap', window.location.host + '/pfnaljs/plug/waterfall/bootstrap-waterfall'], function () {
                    $(el).data('bootstrap-waterfall-template', data).waterfall();
                })
            }

            //放大镜
            ,
        enlarge: function (options) {
                require(['jquery', 'enlarge'], function () {
                    $(".enlarge.inline-demo").data("options", options);
                    $(document).bind("enhance", function () {
                        $("body").addClass("enhanced");
                    });
                    $(document).trigger("enhance");
                })
            }

            //表单验证
            ,
        validate: function (options) {
                var options = options ? options : ''
                require(['plug/jquery_validate/jquery_validate'], function () {
                    $.validate();
                })
            }
            //图片预览
            ,
        preview: function (url, option) {
                option = option ? option : {};
                let opt = $.extend({
                    type: 1,
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
            //返回顶部
            ,
        scroll_top: function (html, el, top_num) {
                var button = '<div id="stroll_to_top" style="position: fixed;right: 10px;bottom: 10px;z-index: 1010;width: 32px;min-height: 32px;overflow: hidden;border-radius: 0;text-align: center;">' +
                    '<a style="display: block;" title="回到顶部"><i style="color: #ddd;line-height: 32px;    width:100%;background-color: #555;    vertical-align: middle;" class="fa fa-arrow-up"></i></a></div>';
                require(['jquery', 'bootstrap'], function () {
                    var _html = html ? html : button;
                    var obj = el ? $(el) : $('body');
                    obj.append(_html);
                    $(window).scroll(function () {
                        if ($(window).scrollTop() == 0) {
                            $("#stroll_to_top").css('opacity', 0)
                        } else {
                            $("#stroll_to_top").css('opacity', 1)
                        }
                    })
                    $("#stroll_to_top").bind("click", function () {
                        $("html,body").animate({
                            scrollTop: 0
                        }, 500);
                    })
                })
            }

            // 二维码
            ,
        qrcode: function (el, content, option) {
                var option = option
                require(['jquery', 'component/jquery.qrcode'], function () {
                    if (option == undefined) {
                        option = {
                            render: "table", //table方式
                            width: 200, //宽度
                            height: 200, //高度
                            text: content,
                            typeNumber: -1, //计算模式  
                            background: "#ffffff", //背景颜色
                            foreground: "#000000", //二维码颜色
                            src: '', //logo图片
                            toImg: false //是否转化为图片,默认为false
                        }
                        $(el).qrcode(option)
                    } else {
                        $(el).qrcode(option)
                    }
                    // if (option == undefined) {

                    //     }
                    // }
                    //
                })
            }
            // 文件切片上传
            ,
        upload_section: function (el, url, callback, el_btn) {
                require(['jquery', 'bootstrap'], function () {
                    var page = {
                        init: function (callback) {
                            if (el_btn) {
                                $(el_btn).click($.proxy(this.upload, this));
                            } else {
                                $(el).change($.proxy(this.upload, this, callback));
                            }
                        },
                        upload: function (callback) {
                            var file = $("#file")[0].files[0], //文件对象
                                name = file.name, //文件名
                                size = file.size, //总大小
                                succeed = 0;

                            var shardSize = 2 * 1024 * 1024, //以2MB为一个分片
                                shardCount = Math.ceil(size / shardSize); //总片数

                            for (var i = 0; i < shardCount; ++i) {
                                //计算每一片的起始与结束位置
                                var start = i * shardSize,
                                    end = Math.min(size, start + shardSize);

                                //构造一个表单，FormData是HTML5新增的
                                var form = new FormData();
                                form.append("data", file.slice(start, end)); //slice方法用于切出文件的一部分
                                form.append("name", name);
                                form.append("total", shardCount); //总片数
                                form.append("index", i + 1); //当前是第几片

                                //Ajax提交
                                $.ajax({
                                    url: url,
                                    type: "POST",
                                    data: form,
                                    async: true, //异步
                                    processData: false, //很重要，告诉jquery不要对form进行处理
                                    contentType: false, //很重要，指定为false才能形成正确的Content-Type
                                    success: function (res) {
                                        ++succeed
                                        callback && callback(res)
                                    }
                                });
                            }
                        }
                    }
                    page.init(callback);
                })
            }

            //设备检测
            ,
        isMobile: function () {
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
            // 百度图片上传
            ,
        webuploader: function (callback,option) {
            require(['plug/webuploader/js/webuploader','css!' + window.pfinaljs.base + 'pfinaljs/plug/webuploader/webuploader.css'],function(WebUploader){
                let uploader = '';
                if(option == undefined) {
                    uploader = WebUploader.create({
                        // swf文件路径
                        swf: '../plug/webuploader/Uploader.swf',
                        // 文件接收服务端。
                        server: 'http://webuploader.duapp.com/server/fileupload.php',
                        // 选择文件的按钮。可选。
                        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                        pick: '#picker',
                        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
                        resize: false
                    });
                } else {
                    uploader = WebUploader.create(option)
                } 
                if ($.isFunction(callback)) {
                    callback(uploader);
                }
            })           
        }
    }
})