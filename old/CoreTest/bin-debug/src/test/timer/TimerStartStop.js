/**
 * Created by yjtx on 15-7-10.
 */
var TimerStartStop = (function (_super) {
    __extends(TimerStartStop, _super);
    function TimerStartStop() {
        _super.call(this);
    }
    var __egretProto__ = TimerStartStop.prototype;
    __egretProto__.initRoot = function () {
        this.timer = new egret.Timer(5000, 10);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        this.timer.start();
        var timer1 = new egret.Timer(4000, 1);
        timer1.addEventListener(egret.TimerEvent.TIMER, this.onTimer1Handler, this);
        timer1.start();
    };
    __egretProto__.onTimer1Handler = function (e) {
        console.log(egret.getTimer());
        this.timer.stop();
        this.timer.start();
    };
    __egretProto__.onTimerHandler = function (e) {
        console.log(egret.getTimer());
    };
    return TimerStartStop;
})(EntryDisplayObjectContainer);
TimerStartStop.prototype.__class__ = "TimerStartStop";
