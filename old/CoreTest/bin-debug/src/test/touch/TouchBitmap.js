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
        new LoadResources(this.testSimpleMaskDO, this, "preload", egret.MainContext.instance.rendererContext.texture_scale_factor);
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
    };
    return TouchBitmap;
})(egret.DisplayObjectContainer);
TouchBitmap.prototype.__class__ = "TouchBitmap";
