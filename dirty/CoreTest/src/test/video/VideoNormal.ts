class VideoNormal extends egret.DisplayObjectContainer {

    private video:egret.Video;

    constructor() {
        super();

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
            text.text = "Loaded, click video to play";
        }, this);
        text.touchEnabled = true;
        text.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playVideo, this);
        this.addChild(text);
    }

    private _isplaying:boolean = false;
    private playVideo(e:egret.TouchEvent) {

        if (!this.video.paused) {
            this.video.fullscreen = !this.video.fullscreen;
            return;
        }

        this.video.play();
        this._isplaying = true;
    }

}