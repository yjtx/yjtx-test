/**
 * Created by yjtx on 15-7-10.
 */
var MaskMaskRectChanges = (function (_super) {
    __extends(MaskMaskRectChanges, _super);
    function MaskMaskRectChanges() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=MaskMaskRectChanges,p=c.prototype;
    p.initRoot = function () {
        var texture = RES.getRes("bar_5_0_png");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.x = 30;
        icon.y = 100;
        //icon.mask = new egret.Rectangle(0, 0, 231, 12);
        //icon.scrollRect = new egret.Rectangle(0, 0, 231, 12);
        egret.setTimeout(function () {
            icon.width = 0;
        }, this, 2000);
    };
    return MaskMaskRectChanges;
}(EntryDisplayObjectContainer));
egret.registerClass(MaskMaskRectChanges,'MaskMaskRectChanges');
