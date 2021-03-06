/**
 * Created by yjtx on 15-7-10.
 */
class MaskCircleGraphics extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("egret_icon_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);

        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x00ff00, 1);
        shape.graphics.drawCircle(100, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 100;
        shape.y = 100;

        icon.mask = shape;
    }
}