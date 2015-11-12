/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawCurve extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(2,0x00ff00);
        shp.graphics.moveTo(100,100);
        shp.graphics.curveTo(100,100,200,50);
        shp.graphics.endFill();
        shp.name = "test";
        shp.x = 200;
        shp.y = 200;
        this.addChild(shp);
    }
}

