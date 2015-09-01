//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var ButtonOK = (function (_super) {
    __extends(ButtonOK, _super);
    function ButtonOK() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = ButtonOK.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/ButtonOK.exml"]);
    };
    __egretProto__.testUrl = function () {
        var ui = utils.createClass("components.OKButton");
        this.addChild(ui);
    };
    return ButtonOK;
})(eui.Group);
ButtonOK.prototype.__class__ = "ButtonOK";
egret.registerClass(ButtonOK,"ButtonOK");
