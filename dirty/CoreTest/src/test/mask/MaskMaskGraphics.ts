/**
 * Created by yjtx on 15-7-10.
 */
class MaskMaskGraphics extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        this.circle();

        var texture:egret.Texture = RES.getRes("bg_jpg");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawEllipse(200, 200, 190, 160);
        shape.graphics.endFill();
        shape.y = 100;

        icon.mask = shape;

        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(1111)
        }, this);
    }

    private circle():void {
        var texture:egret.Texture = RES.getRes("bg_jpg");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawCircle(100, 100, 100);
        shape.graphics.endFill();
        shape.x = 200;
        icon.mask = shape;
        
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log(1111)
        }, this);
    }
}