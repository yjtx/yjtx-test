/**
 * Created by yjtx on 15-7-10.
 */
class TimerStartStop extends EntryDisplayObjectContainer {

    timer:egret.Timer;
    public constructor() {
        super();
    }

    protected initRoot():void {
        this.timer = new egret.Timer(5000, 10);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        this.timer.start();

        var timer1 = new egret.Timer(4000, 1);
        timer1.addEventListener(egret.TimerEvent.TIMER, this.onTimer1Handler, this);
        timer1.start();
    }

    private onTimer1Handler(e:egret.TimerEvent):void {
        console.log(egret.getTimer());
        this.timer.stop();
        this.timer.start();
    }

    private onTimerHandler(e:egret.TimerEvent):void {
        console.log(egret.getTimer());
    }


}

