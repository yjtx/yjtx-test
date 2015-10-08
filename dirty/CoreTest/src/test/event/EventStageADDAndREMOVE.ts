/**
 * Created by yjtx on 15-6-23.
 */

class EventStageADDAndREMOVE extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.init();
    }

    private init():void {

        this.testTextField();
    }

    private testTextField():void {
        egret.setInterval(function(dt) {
            if (this.numChildren == 0) {
                var s = new TempContainer();
                this.addChild(s);
            }
            else {
                this.removeChildren();
            }
        }, this, 1000);
    }

}

class TempContainer extends egret.DisplayObjectContainer {

    constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStageHandler, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStageHandler, this);
    }

    /**
     * 加入到舞台，加入触摸事件
     * @private
     */
    public onAddToStageHandler(e:egret.Event) {
        console.log("onAddToStageHandler")
    }

    /**
     * 从 舞台删除，删除触摸事件
     * @private
     */
    public onRemoveFromStageHandler(e:egret.Event) {
        console.log("onRemoveFromStageHandler")
    }
}