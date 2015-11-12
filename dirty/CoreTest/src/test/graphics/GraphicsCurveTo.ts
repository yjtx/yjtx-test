/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsCurveTo extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        this.testDrawArc(100, 100, 50);
        this.testDrawArc(100, 200, 50);
        this.testDrawArc(100, 300, 50);
        this.testDrawArc(100, 400, 50);
        this.testDrawArc(300, 100, 50);
    }

    private testDrawArc(x, y, r):void {
        var g = new egret.Shape();
        g.x = x;
        g.y = y;
        g.graphics.beginFill(0xff0000);
        g.graphics.lineStyle(1, 0xffff00);
        g.graphics.moveTo(0, 0);

        var angleMid = 0 - 30 / 2;
        var bx = x + r / Math.cos(30 / 2) * Math.cos(angleMid);
        var by = y + r / Math.cos(30 / 2) * Math.sin(angleMid);
        var cx = x + r * Math.cos(0);
        var cy = y + r * Math.sin(0);

        g.graphics.curveTo(bx, by, cx, cy);
        g.graphics.endFill();

        this.addChild(g);
    }

}

