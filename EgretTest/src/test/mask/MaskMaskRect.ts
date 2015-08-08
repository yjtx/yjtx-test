/**
 * Created by yjtx on 15-7-10.
 */
class MaskMaskRect extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testSimpleMaskRect, this, "preload", egret.MainContext.instance.rendererContext.texture_scale_factor);
    }

    private testSimpleMaskRect():void {
        var texture:egret.Texture = RES.getRes("bg_jpg");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.mask = new egret.Rectangle(100, 100, 100, 100);
    }
}