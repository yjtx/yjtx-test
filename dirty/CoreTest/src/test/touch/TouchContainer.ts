/**
 * Created by yjtx on 15-7-10.
 */
class TouchContainer extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("egret_icon_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = false;

        var c = new egret.DisplayObjectContainer();
        this.addChild(c);
        c.touchChildren = true;
        c.width = 400;
        c.height = 400;

        c.addChild(icon);
        c.touchEnabled = true;
        c.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP")
        }, this);


        var texture:egret.Texture = RES.getRes("egret_icon_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = false;
        icon.pixelHitTest = true;

        var c = new egret.DisplayObjectContainer();
        this.addChild(c);
        c.touchChildren = true;
        c.width = 400;
        c.height = 400;
        c.y = 450;

        c.addChild(icon);
        c.touchEnabled = true;
        c.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP")
        }, this);
    }


}