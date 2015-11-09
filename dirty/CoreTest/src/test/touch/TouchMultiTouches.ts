/**
 * Created by yjtx on 15-7-10.
 */
class TouchMultiTouches extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.stage.maxTouches = 99;

        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    }

    private testSimpleMaskDO():void {
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