/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsArcCircleRun extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);

        var angle = 60;
        egret.setInterval(function () {
            angle+= 2;
            changeGraphics(angle);
            angle = angle % 360;
        }, this, 16);

        function changeGraphics(angle) {
            shape.graphics.clear();

            shape.graphics.lineStyle(2, 0x0000ff, 1);
            //shape.graphics.moveTo(200, 200);
            //shape.graphics.lineTo(300, 200);
            shape.graphics.drawArc(200, 200, 100, 0, angle * Math.PI / 180, false);
            //shape.graphics.lineTo(200, 200);
            shape.graphics.endFill();
        }
    }

}

