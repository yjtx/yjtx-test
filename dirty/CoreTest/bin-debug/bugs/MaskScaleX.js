/**
 * Created by yjtx on 15-7-10.
 */
var MaskScaleX = (function (_super) {
    __extends(MaskScaleX, _super);
    function MaskScaleX() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=MaskScaleX,p=c.prototype;
    p.initRoot = function () {
        // var texture:egret.Texture = RES.getRes("egret_icon_png");
        // var icon:egret.Bitmap = new egret.Bitmap(texture);
        // this.addChild(icon);
        // icon.alpha = 0.5;
        // var shape:egret.Shape = new egret.Shape();
        // shape.graphics.beginFill(0x00ff00, 1);
        // shape.graphics.drawCircle(100, 100, 100);
        // shape.graphics.endFill();
        // shape.x = 100;
        // shape.y = 100;
        // this.addChild(shape);
        // shape.mask = icon;
        var rightEffMash;
        rightEffMash = new egret.Shape();
        rightEffMash.graphics.beginFill(0xfff000, 1);
        rightEffMash.graphics.drawCircle(0, 0, 150);
        rightEffMash.graphics.endFill();
        var rightEff = new egret.Bitmap(RES.getRes("bg_jpg"));
        rightEff.mask = rightEffMash;
        this.addChild(rightEff);
        rightEff.x = 200;
        rightEff.y = 200;
        this.addChild(rightEffMash);
        rightEffMash.x = 200;
        rightEffMash.y = 200;
        var leftEffeMash;
        leftEffeMash = new egret.Shape();
        leftEffeMash.graphics.beginFill(0xfff000, 1);
        leftEffeMash.graphics.drawCircle(0, 0, 150);
        leftEffeMash.graphics.endFill();
        var leftEff = new egret.Bitmap(RES.getRes("bg_jpg"));
        leftEff.scaleX = -1;
        leftEff.mask = leftEffeMash;
        this.addChild(leftEff);
        leftEff.x = 200;
        leftEff.y = 400;
        this.addChild(leftEffeMash);
        leftEffeMash.x = 200;
        leftEffeMash.y = 400;
    };
    return MaskScaleX;
}(EntryDisplayObjectContainer));
egret.registerClass(MaskScaleX,'MaskScaleX');
