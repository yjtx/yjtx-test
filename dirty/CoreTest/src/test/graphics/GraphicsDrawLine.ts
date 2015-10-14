/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawLine extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testDrawArc();
    }

    private testDrawArc():void {
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);

        shape.graphics.lineStyle(10,0);
        shape.graphics.lineTo(0,0);
        shape.graphics.lineTo(100,100);
        shape.graphics.lineTo(200,100);
    }

}