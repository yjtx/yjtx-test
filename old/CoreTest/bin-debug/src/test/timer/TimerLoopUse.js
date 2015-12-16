/**
 * Created by yjtx on 15-7-10.
 */
var TimerLoopUse = (function (_super) {
    __extends(TimerLoopUse, _super);
    function TimerLoopUse() {
        _super.call(this);
    }
    var __egretProto__ = TimerLoopUse.prototype;
    __egretProto__.initRoot = function () {
        var timer = new egret.Timer(100, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        timer.start();
    };
    __egretProto__.onTimerHandler = function (e) {
        console.log("asdfasdfs");
        var timer = e.currentTarget;
        timer.stop();
        timer.start();
        timer.stop();
    };
    return TimerLoopUse;
})(EntryDisplayObjectContainer);
TimerLoopUse.prototype.__class__ = "TimerLoopUse";
