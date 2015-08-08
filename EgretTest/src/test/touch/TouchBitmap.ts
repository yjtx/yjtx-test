/**
 * Created by yjtx on 15-7-10.
 */
class TouchBitmap extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testSimpleMaskDO, this, "preload", egret.MainContext.instance.rendererContext.texture_scale_factor);
    }

    private testSimpleMaskDO():void {
        var texture:egret.Texture = RES.getRes("egret_icon_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("touch_tap");
        }, this);
        icon.x = 50;
    }


}