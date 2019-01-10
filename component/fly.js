define([
    'https://cdn.bootcss.com/flv.js/1.5.0/flv.js',
], function (flv) {
    
    return function (TagName, callback) {
        console.log(TagName);
        var videoElement = document.getElementById(TagName);
        if (flv.isSupported()) {
            var flvPlayer = flv.createPlayer({
                type: $(videoElement).attr('type'),
                url: $(videoElement).attr('source')
            });
            //console.log(flvPlayer);
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            flvPlayer.play();
        }
        if ($.isFunction(callback)) {
             callback(flvPlayer);
        }
    }
})