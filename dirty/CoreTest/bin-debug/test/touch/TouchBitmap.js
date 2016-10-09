/**
 * Created by yjtx on 15-7-10.
 */
var TouchBitmap = (function (_super) {
    __extends(TouchBitmap, _super);
    function TouchBitmap() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=TouchBitmap,p=c.prototype;
    p.initRoot = function () {
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("touch_tap");
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            console.log(e.type);
            console.log(egret.TouchEvent.TOUCH_BEGIN);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            console.log(e.type);
            console.log(egret.TouchEvent.TOUCH_END);
        }, this);
        icon.x = 50;
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        icon.pixelHitTest = true;
        icon.x = 300;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("touch_tap");
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            console.log("localX:" + e.localX + " localY:" + e.localY);
            console.log("stageX:" + e.stageX + " stageY:" + e.stageY);
            console.log("touch_move");
        }, this);
    };
    return TouchBitmap;
}(EntryDisplayObjectContainer));
egret.registerClass(TouchBitmap,'TouchBitmap');
