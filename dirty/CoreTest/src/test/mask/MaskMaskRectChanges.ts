/**
 * Created by yjtx on 15-7-10.
 */
class MaskMaskRectChanges extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("bar_5_0_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.x = 30;
        icon.y = 100;
        //icon.mask = new egret.Rectangle(0, 0, 231, 12);

        //icon.scrollRect = new egret.Rectangle(0, 0, 231, 12);

        egret.setTimeout(function () {
            icon.width = 0;
        }, this, 2000);
    }
}