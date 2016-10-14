/**
 * Created by yjtx on 15-7-10.
 */
class BlendModeErase extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var sky:egret.Bitmap = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(sky);
        var stageW:number = this.stage.stageWidth;
        var stageH:number = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        var container:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        container.width = 300;
        container.height = 300;
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 1);
        shape.graphics.drawRect(0, 0, 300, 300);
        shape.graphics.endFill();
        container.addChild(shape);

        var erase:egret.Shape = new egret.Shape();
        erase.graphics.beginFill(0x000000, 1);
        erase.graphics.drawCircle(50, 50, 50);
        erase.graphics.endFill();
        container.addChild(erase);
        erase.x = 500;
        erase.y = 500;

        erase.blendMode = egret.BlendMode.ERASE;


        var renderTexture:egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(container);

        var bitmap:egret.Bitmap = new egret.Bitmap();
        bitmap.texture = renderTexture;
        this.addChild(bitmap);
        bitmap.y = 350;

        bitmap.touchEnabled = true;
        bitmap.pixelHitTest = true;
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log(e.type);
        }, this);
    }

}