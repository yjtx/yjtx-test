/**
 * Created by yjtx on 15-7-10.
 */
var MaskCircleGraphics = (function (_super) {
    __extends(MaskCircleGraphics, _super);
    function MaskCircleGraphics() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=MaskCircleGraphics;p=c.prototype;
    p.init = function () {
        new LoadResources(this.testSimpleMaskRect, this, "preload", this.stage.textureScaleFactor);
    };
    p.testSimpleMaskRect = function () {
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x00ff00, 1);
        shape.graphics.drawCircle(100, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 100;
        shape.y = 100;
        icon.mask = shape;
    };
    return MaskCircleGraphics;
})(egret.DisplayObjectContainer);
egret.registerClass(MaskCircleGraphics,"MaskCircleGraphics");
