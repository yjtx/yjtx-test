/**
 * Created by yjtx on 15-7-10.
 */
var TimerLoopUse = (function (_super) {
    __extends(TimerLoopUse, _super);
    function TimerLoopUse() {
        _super.call(this);
    }
    var d = __define,c=TimerLoopUse,p=c.prototype;
    p.initRoot = function () {
        var timer = new egret.Timer(100, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerHandler, this);
        timer.start();
    };
    p.onTimerHandler = function (e) {
        console.log("asdfasdfs");
        var timer = e.currentTarget;
        timer.stop();
        timer.start();
        timer.stop();
    };
    return TimerLoopUse;
}(EntryDisplayObjectContainer));
egret.registerClass(TimerLoopUse,'TimerLoopUse');
