/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawRectTwice extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var sp:egret.Sprite = new egret.Sprite();
        this.addChild(sp);
        sp.graphics.lineStyle(1);
        sp.graphics.drawRect(50,50,100,100);
        sp.graphics.drawRect(150,50,100,100);
    }

}

