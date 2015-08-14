/**
 * Created by yjtx on 15-7-10.
 */
var MaskScrollRect = (function (_super) {
    __extends(MaskScrollRect, _super);
    function MaskScrollRect() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = MaskScrollRect.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testSimpleScrollRect, this, "preload", this.stage.textureScaleFactor);
    };
    __egretProto__.testSimpleScrollRect = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.scrollRect = new egret.Rectangle(100, 100, 100, 100);
    };
    return MaskScrollRect;
})(egret.DisplayObjectContainer);
MaskScrollRect.prototype.__class__ = "MaskScrollRect";
egret.registerClass(MaskScrollRect,"MaskScrollRect");
