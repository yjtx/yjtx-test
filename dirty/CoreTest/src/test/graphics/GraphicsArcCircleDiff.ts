/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsArcCircleDiff extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var num = 10;

        var shape1:egret.Shape = new egret.Shape();
        this.addChild(shape1);
        shape1.x = 0;
        shape1.y = 300;
        shape1.graphics.lineStyle(6, 0xff0000);
        for (var i = 0; i < num; i++) {
            //shape1.graphics.moveTo(100 + 90 * Math.cos(Math.PI / 12 * i), 100 + 90 * Math.sin(Math.PI / 12 * i));
            shape1.graphics.drawArc(100, 100, 90, Math.PI / 12 * i, Math.PI / 12 * (i + 1), false);
            shape1.graphics.endFill();
        }

        var shape2:egret.Shape = new egret.Shape();
        this.addChild(shape2);
        shape2.x = 200;
        shape2.y = 300;

        shape2.graphics.lineStyle(6, 0xff0000);
        for (var i = 0; i < num; i++) {
            shape2.graphics.drawArc(100, 100, 90, Math.PI / 12 * i, Math.PI / 12 * (i + 1), false);
        }
        shape2.graphics.endFill();

    }

}

