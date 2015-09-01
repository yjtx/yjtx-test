/**
 * Created by yjtx on 15-6-23.
 */
var EventStageRESIZE = (function (_super) {
    __extends(EventStageRESIZE, _super);
    function EventStageRESIZE() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = EventStageRESIZE.prototype;
    __egretProto__.init = function () {
        console.log("11111");
        this.stage.addEventListener(egret.Event.RESIZE, function (e) {
            console.log("22222");
        }, this);
    };
    return EventStageRESIZE;
})(egret.DisplayObjectContainer);
EventStageRESIZE.prototype.__class__ = "EventStageRESIZE";
egret.registerClass(EventStageRESIZE,"EventStageRESIZE");
