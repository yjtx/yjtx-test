/**
 * Created by yjtx on 15-7-10.
 */
class TouchReleaseOutSide extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("egret_icon_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function () {
            console.log("TOUCH_RELEASE_OUTSIDE");
        }, this);
        icon.x = 50;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
    }


}