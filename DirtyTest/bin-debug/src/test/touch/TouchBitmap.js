/**
 * Created by yjtx on 15-7-10.
 */
var TouchBitmap = (function (_super) {
    __extends(TouchBitmap, _super);
    function TouchBitmap() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TouchBitmap.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    };
    __egretProto__.testSimpleMaskDO = function () {
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("touch_tap");
        }, this);
        icon.x = 50;
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        icon.pixelHitTest = true;
        icon.x = 300;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("touch_tap");
        }, this);
    };
    return TouchBitmap;
})(egret.DisplayObjectContainer);
TouchBitmap.prototype.__class__ = "TouchBitmap";
egret.registerClass(TouchBitmap,"TouchBitmap");
