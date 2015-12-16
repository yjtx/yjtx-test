var VideoNormal = (function (_super) {
    __extends(VideoNormal, _super);
    function VideoNormal() {
        _super.call(this);
        this._isplaying = false;
        this.video = new egret.Video();
        this.video.x = 50;
        this.video.y = 0;
        this.video.width = 427;
        this.video.height = 240;
        this.video.fullscreen = false;
        this.video.poster = this.video.fullscreen ? "resource/video/posterfullscreen.jpg" : "resource/video/posterinline.jpg";
        this.video.load("resource/video/trailer.mp4");
        this.addChild(this.video);
        var text = new egret.TextField();
        text.text = 'Loading';
        text.x = 50;
        text.y = 280 - 20;
        this.video.addEventListener(egret.Event.COMPLETE, function (e) {
            console.log("complete");
            text.text = "Loaded, click video to play";
        }, this);
        text.touchEnabled = true;
        text.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
        this.addChild(text);
    }
    var __egretProto__ = VideoNormal.prototype;
    __egretProto__.playVideo = function (e) {
        if (!this.video.paused) {
            this.video.fullscreen = !this.video.fullscreen;
            return;
        }
        this.video.play();
        this._isplaying = true;
    };
    return VideoNormal;
})(egret.DisplayObjectContainer);
VideoNormal.prototype.__class__ = "VideoNormal";
