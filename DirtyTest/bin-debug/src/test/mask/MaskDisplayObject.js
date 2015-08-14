/**
 * Created by yjtx on 15-7-10.
 */
var MaskDisplayObject = (function (_super) {
    __extends(MaskDisplayObject, _super);
    function MaskDisplayObject() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = MaskDisplayObject.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    };
    __egretProto__.testSimpleMaskDO = function () {
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x00ff00, 1);
        shape.graphics.drawCircle(100, 100, 100);
        shape.graphics.endFill();
        shape.x = 100;
        shape.y = 100;
        this.addChild(shape);
        shape.mask = icon;
    };
    return MaskDisplayObject;
})(egret.DisplayObjectContainer);
MaskDisplayObject.prototype.__class__ = "MaskDisplayObject";
egret.registerClass(MaskDisplayObject,"MaskDisplayObject");
