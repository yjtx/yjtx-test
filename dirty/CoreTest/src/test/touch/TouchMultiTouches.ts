/**
 * Created by yjtx on 15-7-10.
 */
class TouchMultiTouches extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        this.stage.maxTouches = 99;

        var texture:egret.Texture = RES.getRes("bg_jpg");
        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        icon.width = this.stage.stageWidth;
        icon.height = this.stage.stageHeight;
        this.addChild(icon);
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e:egret.TouchEvent) {
            egret.log("1  " + e.touchPointID);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e:egret.TouchEvent) {
            egret.log("2  " + e.touchPointID);
        }, this);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e:egret.TouchEvent) {
            egret.log("1  " + e.touchPointID);
        }, this);
    }


}