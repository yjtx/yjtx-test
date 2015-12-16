/**
 * Created by yjtx on 15-6-23.
 */
var StageRegionPolicy = (function (_super) {
    __extends(StageRegionPolicy, _super);
    function StageRegionPolicy() {
        _super.call(this, ["bitmap"]);
    }
    var d = __define,c=StageRegionPolicy,p=c.prototype;
    p.initRoot = function () {
        var texture = RES.getRes("img_scale9_png");
        var icon = new egret.Bitmap();
        icon.texture = texture;
        this.addChild(icon);
        icon.scaleX = icon.scaleY = 1.5;
        this.stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.OFF;
    };
    return StageRegionPolicy;
})(EntryDisplayObjectContainer);
egret.registerClass(StageRegionPolicy,'StageRegionPolicy');
