/**
 * Created by yjtx on 15-7-10.
 */
var MaskMaskRect = (function (_super) {
    __extends(MaskMaskRect, _super);
    function MaskMaskRect() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = MaskMaskRect.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testSimpleMaskRect, this, "preload", this.stage.textureScaleFactor);
    };
    __egretProto__.testSimpleMaskRect = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.mask = new egret.Rectangle(100, 100, 100, 100);
    };
    return MaskMaskRect;
})(egret.DisplayObjectContainer);
MaskMaskRect.prototype.__class__ = "MaskMaskRect";
egret.registerClass(MaskMaskRect,"MaskMaskRect");
