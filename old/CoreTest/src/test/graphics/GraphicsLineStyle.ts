/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsLineStyle extends egret.DisplayObjectContainer {

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
        }, this, 3000);

        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.lineStyle(50, 0xFFFFFF, 1, true, "", "", "round");
            shape.graphics.moveTo(200, 200);
            shape.graphics.lineTo(100 * Math.sin(angle) + 200, 100 * Math.cos(angle) + 200);
            shape.graphics.endFill();
        }
    }

}