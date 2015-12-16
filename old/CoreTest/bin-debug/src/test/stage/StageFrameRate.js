/**
 * Created by yjtx on 15-6-23.
 */
var StageFrameRate = (function (_super) {
    __extends(StageFrameRate, _super);
    function StageFrameRate() {
        _super.call(this);
    }
    var __egretProto__ = StageFrameRate.prototype;
    __egretProto__.initRoot = function () {
        this.stage.frameRate = 24;
        egret.Profiler.getInstance().run();
    };
    return StageFrameRate;
})(EntryDisplayObjectContainer);
StageFrameRate.prototype.__class__ = "StageFrameRate";
