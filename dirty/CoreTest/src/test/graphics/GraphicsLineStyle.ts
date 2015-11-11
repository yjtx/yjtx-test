/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsLineStyle extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
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
            shape.graphics.lineTo(300, 200);
            shape.graphics.drawArc(200, 200, 100, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(200, 200);
            shape.graphics.endFill();
        }
    }

}