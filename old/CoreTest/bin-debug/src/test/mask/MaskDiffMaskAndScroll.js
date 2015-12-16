/**
 * Created by yjtx on 15-7-10.
 */
var MaskDiffMaskAndScroll = (function (_super) {
    __extends(MaskDiffMaskAndScroll, _super);
    function MaskDiffMaskAndScroll() {
        _super.call(this, ["preload"]);
    }
    var __egretProto__ = MaskDiffMaskAndScroll.prototype;
    __egretProto__.initRoot = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.mask = new egret.Rectangle(100, 100, 100, 100);
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("maskRect");
        }, this);
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.scrollRect = new egret.Rectangle(100, 100, 100, 100);
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("scrollRect");
        }, this);
    };
    return MaskDiffMaskAndScroll;
})(EntryDisplayObjectContainer);
MaskDiffMaskAndScroll.prototype.__class__ = "MaskDiffMaskAndScroll";
