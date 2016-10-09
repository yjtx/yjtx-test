/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsSomeCircles extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot(): void {
        this.testDrawArc();
    }

    private testDrawArc(): void {
        var drawSp: egret.Sprite = new egret.Sprite();
        drawSp.graphics.beginFill(0xFFFFFF, 0.5);
        this.addChild(drawSp);

        var emptySP: egret.Sprite = new egret.Sprite();
        emptySP.graphics.beginFill(0xFFFFFF, 0);
        emptySP.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        emptySP.graphics.endFill();
        this.addChild(emptySP);
        emptySP.touchEnabled = true;
        emptySP.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (e) => {
            console.log(e.stageX, e.stageY);
            drawSp.graphics.beginFill(0xFFFFFF, 0.5);
            drawSp.graphics.drawCircle(e.stageX, e.stageY, 50);
        }, this);
        emptySP.addEventListener(egret.TouchEvent.TOUCH_MOVE, (e) => {
            drawSp.graphics.drawCircle(e.stageX, e.stageY, 50);
        }, this);
        emptySP.addEventListener(egret.TouchEvent.TOUCH_END, (e) => {
            drawSp.graphics.endFill();
        }, this);
    }

}