define([
    'https://cdn.bootcss.com/flv.js/1.5.0/flv.js'
], function (flv) {
    return function (TagName, callback) {
        let videoElement = $(TagName);
        if (flv.isSupported()) {
            var flvPlayer = flv.createPlayer({
                type: 'flv',
                url:  'rtmp://live.hkstv.hk.lxdns.com/live/hks'
            });
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            flvPlayer.play();
        }
    }
})