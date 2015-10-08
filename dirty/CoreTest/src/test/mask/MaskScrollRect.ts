/**
 * Created by yjtx on 15-7-10.
 */
class MaskScrollRect extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testSimpleScrollRect, this, "preload", this.stage.textureScaleFactor);
    }

    private testSimpleScrollRect():void {
        var texture:egret.Texture = RES.getRes("bg_jpg");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.scrollRect = new egret.Rectangle(100, 100, 100, 100);
    }
}