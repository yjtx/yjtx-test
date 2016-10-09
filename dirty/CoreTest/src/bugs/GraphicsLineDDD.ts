/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsLineDDD extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        
        this.once(egret.Event.ADDED_TO_STAGE, this.initRoot, this);
    }

    private line:egret.Shape;
    protected initRoot():void {
        this.line=new egret.Shape();
        this.line.graphics.lineStyle(1, 0);
//        this.line.graphics.beginFill(0x2FB108);
//        this.line.graphics.moveTo(100, 100);
//        this.line.graphics.lineTo(500, 500);
//        this.line.graphics.endFill();
        this.addChild(this.line);


//        this.auhtBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAuth, this);
//        this.lianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLian, this);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this);
//        MessageCenter.getInstance().addListener(DrawLineConst.BEGIN_DRAW,this.beginDraw,this);
//        MessageCenter.getInstance().addListener(DrawLineConst.END_DRAW,this.endDraw,this);

    }

    private onBegin(e:egret.TouchEvent):void
    {
//        this.line.graphics.clear();
        console.log("beggin"+e.localX+","+e.localY);
        this.line.graphics.moveTo(e.localX, e.localY);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
    }

    private onMove(e:egret.TouchEvent):void
    {
        console.log("moveee"+e.localX+","+e.localY);
        this.line.graphics.lineTo(e.localX, e.localY);
    }

    private onEnd(e:egret.TouchEvent):void
    {
        console.log("end"+e.localX+","+e.localY);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
    }

}

