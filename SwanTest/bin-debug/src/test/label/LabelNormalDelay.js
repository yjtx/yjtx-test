//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var LabelNormalDelay = (function (_super) {
    __extends(LabelNormalDelay, _super);
    function LabelNormalDelay() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = LabelNormalDelay.prototype;
    __egretProto__.init = function () {
        this.testUrl();
    };
    __egretProto__.testUrl = function () {
        var ui = new eui.Label();
        ui.text = "11";
        this.addChild(ui);
        egret.setTimeout(function () {
            ui.text = "12313;";
        }, this, 1000);
    };
    return LabelNormalDelay;
})(eui.Group);
LabelNormalDelay.prototype.__class__ = "LabelNormalDelay";
egret.registerClass(LabelNormalDelay,"LabelNormalDelay");
