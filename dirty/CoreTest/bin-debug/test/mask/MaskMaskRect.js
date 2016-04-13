/**
 * Created by yjtx on 15-7-10.
 */
var MaskMaskRect = (function (_super) {
    __extends(MaskMaskRect, _super);
    function MaskMaskRect() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=MaskMaskRect,p=c.prototype;
    p.initRoot = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.mask = new egret.Rectangle(100, 100, 100, 100);
    };
    return MaskMaskRect;
}(EntryDisplayObjectContainer));
egret.registerClass(MaskMaskRect,'MaskMaskRect');
