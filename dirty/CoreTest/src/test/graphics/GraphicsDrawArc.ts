/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawArc extends egret.DisplayObjectContainer {

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

        var angle = 60;
        egret.setInterval(function () {
            changeGraphics(angle);
            angle+= 10;
            angle = angle % 360;
        }, this, 16);

        function changeGraphics(angle) {
            shape.graphics.clear();

            //shape.graphics.lineStyle(2, 0x0000ff, 1);
            shape.graphics.beginFill(0x00ffff, 1);
            shape.graphics.moveTo(200, 200);
            shape.graphics.lineTo(300, 200);
            shape.graphics.drawArc(200, 200, 100, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(200, 200);
            shape.graphics.endFill();
        }
    }

}

