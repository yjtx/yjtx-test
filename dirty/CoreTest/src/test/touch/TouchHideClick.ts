/**
 * Created by yjtx on 15-7-10.
 *
 * up 事件不会影响 最后 click target对象改变
 */
class TouchHideClick extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    }

    private testSimpleMaskDO():void {
        var self = this;

        var texture:egret.Texture = RES.getRes("egret_icon_png");

        var icon:egret.Bitmap = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);


        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.touchEnabled = true;


        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("touch_tap");
        }, this);
        icon.x = 50;

        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e:egret.TouchEvent) {
            self.addChild(shape);
            shape.x = e.stageX - 50;
            shape.y = e.stageY - 50;

            egret.setTimeout(function () {
                if (shape.parent) {
                    self.removeChild(shape);
                }

            }, self, 1000);
        }, this);

    }


}