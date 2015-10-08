/**
 * Created by yjtx on 15-7-10.
 */
class TouchSpriteBitmap extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    }

    private testSimpleMaskDO():void {
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
        btn2.x = 200;
        btn2.y = 400;
        btn2.touchEnabled = true;
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function(evt:egret.TouchEvent)
        {
            console.log(evt);
        }, this);
    }


}