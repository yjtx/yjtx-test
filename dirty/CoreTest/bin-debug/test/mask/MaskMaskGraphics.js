/**
 * Created by yjtx on 15-7-10.
 */
var MaskMaskGraphics = (function (_super) {
    __extends(MaskMaskGraphics, _super);
    function MaskMaskGraphics() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=MaskMaskGraphics,p=c.prototype;
    p.initRoot = function () {
        this.circle();
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawEllipse(200, 200, 190, 160);
        shape.graphics.endFill();
        shape.y = 100;
        icon.mask = shape;
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(1111);
        }, this);
    };
    p.circle = function () {
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawCircle(100, 100, 100);
        shape.graphics.endFill();
        shape.x = 200;
        icon.mask = shape;
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(1111);
        }, this);
    };
    return MaskMaskGraphics;
}(EntryDisplayObjectContainer));
egret.registerClass(MaskMaskGraphics,'MaskMaskGraphics');
