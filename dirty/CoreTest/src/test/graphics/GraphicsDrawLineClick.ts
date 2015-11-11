/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawLineClick extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        this.testDrawArc();
    }

    private lastX:number = 100;
    private lastY:number = 100;
    private shape:egret.Shape;
    private testDrawArc():void {
        this.shape = new egret.Shape();
        this.addChild(this.shape);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHandler, this);
    }

    private onClickHandler(e:egret.TouchEvent):void {

        this.shape.graphics.lineStyle(10, 0xff0000);
        this.shape.graphics.moveTo(this.lastX, this.lastY);
        this.lastX = e.stageX;
        this.lastY = e.stageY;

        egret.log(this.lastX + " " + this.lastY);

        this.shape.graphics.lineTo(this.lastX, this.lastY);
        this.shape.graphics.endFill();
    }

}