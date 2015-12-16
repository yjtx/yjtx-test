/**
 * Created by yjtx on 15-7-10.
 */
var MaskScrollRect = (function (_super) {
    __extends(MaskScrollRect, _super);
    function MaskScrollRect() {
        _super.call(this, ["preload"]);
    }
    var __egretProto__ = MaskScrollRect.prototype;
    __egretProto__.initRoot = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.scrollRect = new egret.Rectangle(100, 100, 100, 100);
    };
    return MaskScrollRect;
})(EntryDisplayObjectContainer);
MaskScrollRect.prototype.__class__ = "MaskScrollRect";
