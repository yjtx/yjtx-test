//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}
var LabelNormal = (function (_super) {
    __extends(LabelNormal, _super);
    function LabelNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = LabelNormal.prototype;
    __egretProto__.init = function () {
        this.testUrl();
    };
    __egretProto__.testUrl = function () {
        var ui = new swan.Label();
        ui.text = "sdfsdf";
        this.addChild(ui);
    };
    return LabelNormal;
})(swan.Group);
LabelNormal.prototype.__class__ = "LabelNormal";
egret.registerClass(LabelNormal,"LabelNormal");
