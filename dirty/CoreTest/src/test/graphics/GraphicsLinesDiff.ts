/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsLinesDiff extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.createGameScene();
    }

    private createGameScene(): void {
        var shape:egret.Shape;

        shape = new egret.Shape();
        this.addChild(shape);

        shape.graphics.lineStyle(10, 0xff0000);
        shape.graphics.moveTo(10, 10);
        shape.graphics.lineTo(10, 100);
        shape.graphics.lineTo(50, 50);
        shape.graphics.lineTo(100, 10);
        shape.graphics.lineTo(140, 130);
        shape.graphics.lineTo(200, 10);

    }

}

