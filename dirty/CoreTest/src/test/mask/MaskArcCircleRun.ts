/**
 * Created by yjtx on 15-7-10.
 */
class MaskArcCircleRun extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.test, this, "preload", this.stage.textureScaleFactor);
    }

    private test():void {
        var sky:egret.Bitmap = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(sky);
        var stageW:number = this.stage.stageWidth;
        var stageH:number = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;


        this.testDrawArc("progressTime_png", 200, 100);
        this.testDrawArc("progressCircle_png", 200, 300);
    }

    private testDrawArc(key, x, y):void {
        var bitmap = new egret.Bitmap(RES.getRes(key));
        this.addChild(bitmap);
        bitmap.x = x;
        bitmap.y = y;
        bitmap.width = bitmap.height = 140;

        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.x = bitmap.x + bitmap.width / 2;
        shape.y = bitmap.y + bitmap.height / 2;

        bitmap.mask = shape;

        var angle = 0;
        egret.setInterval(function () {
            angle+= 2;
            changeGraphics(angle);
            angle = angle % 360;
        }, this, 16);

        function changeGraphics(angle) {
            shape.graphics.clear();

            shape.graphics.beginFill(0x00ffff, 1);
            shape.graphics.lineTo(100, 0);
            shape.graphics.drawArc(0, 0, 100, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
    }

}

