/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsWithoutEndFill extends egret.DisplayObjectContainer {

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

        shape.graphics.clear();
        shape.graphics.lineStyle(2, 0xFF00FF, 1, true, "", "", "round");
        shape.graphics.moveTo(200, 20);
        shape.graphics.lineTo(300, 20);
        shape.graphics.drawArc(200, 20, 100, 0, 180 * Math.PI / 180, false);
        shape.graphics.lineTo(200, 20);
        //shape.graphics.endFill();

        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.y = 230;
        shape.graphics.clear();
        shape.graphics.beginFill(0xFF0000, 1);
        shape.graphics.moveTo(200, 20);
        shape.graphics.lineTo(300, 20);
        shape.graphics.drawArc(200, 20, 100, 0, 180 * Math.PI / 180, false);
        shape.graphics.lineTo(200, 20);
        //shape.graphics.endFill();

        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.y = 460;
        shape.graphics.clear();
        shape.graphics.beginFill(0xFF0000, 1);
        shape.graphics.lineStyle(2, 0xFF00FF, 1, true, "", "", "round");
        shape.graphics.moveTo(200, 20);
        shape.graphics.lineTo(300, 20);
        shape.graphics.drawArc(200, 20, 100, 0, 180 * Math.PI / 180, false);
        shape.graphics.lineTo(200, 20);
        //shape.graphics.endFill();

    }

}