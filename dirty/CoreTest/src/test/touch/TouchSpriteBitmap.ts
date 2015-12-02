/**
 * Created by yjtx on 15-7-10.
 */
class TouchSpriteBitmap extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("egret_icon_png");

        var btn2:egret.Sprite = new egret.Sprite();
        btn2.graphics.beginFill(0xff0000, 1);
        btn2.graphics.drawRect(0, 0, 100, 100);
        btn2.graphics.endFill();

        var img:egret.Bitmap = new egret.Bitmap(texture);
        img.x = 100;
        img.y = 100;
        btn2.addChild(img);

        this.addChild(btn2);
        btn2.y = 100;
        btn2.touchEnabled = true;
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e:egret.TouchEvent) {
            console.log(e.stageX, e.stageY);
            console.log(btn2.hitTestPoint(e.stageX, e.stageY, true))
        }, this);
    }


}