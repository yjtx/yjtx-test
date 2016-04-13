/**
 * Created by yjtx on 15-6-23.
 */
var StageFrameRate = (function (_super) {
    __extends(StageFrameRate, _super);
    function StageFrameRate() {
        _super.call(this);
    }
    var d = __define,c=StageFrameRate,p=c.prototype;
    p.initRoot = function () {
        this.stage.frameRate = 24;
    };
    return StageFrameRate;
}(EntryDisplayObjectContainer));
egret.registerClass(StageFrameRate,'StageFrameRate');
