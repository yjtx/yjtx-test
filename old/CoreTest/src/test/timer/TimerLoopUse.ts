/**
 * Created by yjtx on 15-7-10.
 */
class TimerLoopUse extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var timer:egret.Timer = new egret.Timer(100, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        timer.start();
    }

    private onTimerHandler(e:egret.TimerEvent):void {
        console.log("asdfasdfs")
        var timer:egret.Timer = <egret.Timer>e.currentTarget;
        timer.stop();
        timer.start();
        timer.stop();
    }



}

