/**
 * Created by yjtx on 15-7-10.
 */
var TouchReleaseOutSide = (function (_super) {
    __extends(TouchReleaseOutSide, _super);
    function TouchReleaseOutSide() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=TouchReleaseOutSide;p=c.prototype;
    p.init = function () {
        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    };
    p.testSimpleMaskDO = function () {
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            console.log("TOUCH_RELEASE_OUTSIDE");
        }, this);
        icon.x = 50;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
    };
    return TouchReleaseOutSide;
})(egret.DisplayObjectContainer);
egret.registerClass(TouchReleaseOutSide,"TouchReleaseOutSide");