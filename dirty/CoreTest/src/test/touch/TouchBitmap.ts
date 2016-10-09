/**
 * Created by yjtx on 15-7-10.
 */
class TouchBitmap extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("egret_icon_png");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e:egret.TouchEvent) {
            console.log("touch_tap");
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e:egret.TouchEvent) {
            console.log(e.type);
            console.log(egret.TouchEvent.TOUCH_BEGIN);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e:egret.TouchEvent) {
            console.log(e.type);
            console.log(egret.TouchEvent.TOUCH_END);
        }, this);
        icon.x = 50;

        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        icon.pixelHitTest = true;
        icon.x = 300;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e:egret.TouchEvent) {
            console.log("touch_tap");
        }, this);

        icon.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e:egret.TouchEvent) {
            console.log("localX:" +  e.localX + " localY:" + e.localY);
            console.log("stageX:" +  e.stageX + " stageY:" + e.stageY);
            console.log("touch_move");
        }, this);
    }


}