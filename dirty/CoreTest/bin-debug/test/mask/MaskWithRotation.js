/**
 * Created by yjtx on 15-7-10.
 */
var MaskWithRotation = (function (_super) {
    __extends(MaskWithRotation, _super);
    function MaskWithRotation() {
        _super.call(this, ["bg"]);
    }
    var d = __define,c=MaskWithRotation,p=c.prototype;
    p.initRoot = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.mask = new egret.Rectangle(100, 100, 100, 100);
        this.rotation = 90;
        this.x = 300;
    };
    return MaskWithRotation;
}(EntryDisplayObjectContainer));
egret.registerClass(MaskWithRotation,'MaskWithRotation');
