/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawEllipse extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        this.testDrawArc(100, 100, 100);
    }

    private testDrawArc(x, y, r):void {
        var g = new egret.Sprite();
        g.x = x;
        g.y = y;
        g.graphics.beginFill(0xff0000, 0);
        g.graphics.lineStyle(3, 0xffff00, 1);
        g.graphics.drawEllipse(x, y, r, r * 0.8);
        g.graphics.endFill();

        this.addChild(g);
    }

}

