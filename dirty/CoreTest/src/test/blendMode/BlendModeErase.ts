/**
 * Created by yjtx on 15-7-10.
 */
class BlendModeErase extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testDrawArc();
    }

    private testDrawArc():void {
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
        erase.x = 200;
        erase.y = 200;

        erase.blendMode = egret.BlendMode.ERASE;

        this.addChild(container);

        //var renderTexture:egret.RenderTexture = new egret.RenderTexture();
        //renderTexture.drawToTexture(container);
        //
        //var bitmap:egret.Bitmap = new egret.Bitmap();
        //bitmap.texture = renderTexture;
        //this.addChild(bitmap);


    }

}