/**
 * Created by yjtx on 15-7-10.
 */
var TouchMultiTouches = (function (_super) {
    __extends(TouchMultiTouches, _super);
    function TouchMultiTouches() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=TouchMultiTouches,p=c.prototype;
    p.initRoot = function () {
        this.stage.maxTouches = 99;
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        icon.width = this.stage.stageWidth;
        icon.height = this.stage.stageHeight;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            egret.log("1  " + e.touchPointID);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            egret.log("2  " + e.touchPointID);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            egret.log("1  " + e.touchPointID);
        }, this);
    };
    return TouchMultiTouches;
})(EntryDisplayObjectContainer);
egret.registerClass(TouchMultiTouches,'TouchMultiTouches');
