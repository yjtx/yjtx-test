/**
 * Created by yjtx on 15-7-10.
 */
var TouchMultiTouches = (function (_super) {
    __extends(TouchMultiTouches, _super);
    function TouchMultiTouches() {
        _super.call(this, ["preload"]);
    }
    var __egretProto__ = TouchMultiTouches.prototype;
    __egretProto__.initRoot = function () {
        egret.MainContext.instance.touchContext.maxTouches = 99;
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        icon.width = this.stage.stageWidth;
        icon.height = this.stage.stageHeight;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            console.log("1  " + e.touchPointID);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            console.log("2  " + e.touchPointID);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("1  " + e.touchPointID);
        }, this);
    };
    return TouchMultiTouches;
})(EntryDisplayObjectContainer);
TouchMultiTouches.prototype.__class__ = "TouchMultiTouches";
