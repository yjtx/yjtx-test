/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsSomeCircles extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testDrawArc();
    }

    private testDrawArc():void {
        var drawSp:egret.Sprite = new egret.Sprite();
        drawSp.graphics.beginFill(0xFFFFFF,0.5);
        this.addChild(drawSp);

        var emptySP:egret.Sprite = new egret.Sprite();
        emptySP.graphics.beginFill(0xFFFFFF,0);
        emptySP.graphics.drawRect(0,0,this.stage.stageWidth, this.stage.stageHeight);
        emptySP.graphics.endFill();
        this.addChild(emptySP);
        emptySP.touchEnabled = true;
        emptySP.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{

            drawSp.graphics.drawCircle(e.localX, e.localY,50);
            drawSp.graphics.endFill();
        },this);
        emptySP.addEventListener(egret.TouchEvent.TOUCH_MOVE,(e)=>{

            drawSp.graphics.drawCircle(e.localX, e.localY,50);
            drawSp.graphics.endFill();
        },this);
        emptySP.addEventListener(egret.TouchEvent.TOUCH_END,(e)=>{
            //drawSp.graphics.clear();

        },this);
    }

}