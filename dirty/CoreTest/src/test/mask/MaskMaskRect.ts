/**
 * Created by yjtx on 15-7-10.
 */
class MaskMaskRect extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("bg_jpg");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.mask = new egret.Rectangle(100, 100, 100, 100);
    }
}