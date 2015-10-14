/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawCurve extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
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

