/**
 * Created by yjtx on 15-6-23.
 */
var EventStageADDAndREMOVE = (function (_super) {
    __extends(EventStageADDAndREMOVE, _super);
    function EventStageADDAndREMOVE() {
        _super.call(this);
        this.init();
    }
    var __egretProto__ = EventStageADDAndREMOVE.prototype;
    __egretProto__.init = function () {
        this.testTextField();
    };
    __egretProto__.testTextField = function () {
        egret.setInterval(function (dt) {
            if (this.numChildren == 0) {
                var s = new TempContainer();
                this.addChild(s);
            }
            else {
                this.removeChildren();
            }
        }, this, 1000);
    };
    return EventStageADDAndREMOVE;
})(egret.DisplayObjectContainer);
EventStageADDAndREMOVE.prototype.__class__ = "EventStageADDAndREMOVE";
var TempContainer = (function (_super) {
    __extends(TempContainer, _super);
    function TempContainer() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStageHandler, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStageHandler, this);
    }
    var __egretProto__ = TempContainer.prototype;
    /**
     * 加入到舞台，加入触摸事件
     * @private
     */
    __egretProto__.onAddToStageHandler = function (e) {
        console.log("onAddToStageHandler");
    };
    /**
     * 从 舞台删除，删除触摸事件
     * @private
     */
    __egretProto__.onRemoveFromStageHandler = function (e) {
        console.log("onRemoveFromStageHandler");
    };
    return TempContainer;
})(egret.DisplayObjectContainer);
TempContainer.prototype.__class__ = "TempContainer";
