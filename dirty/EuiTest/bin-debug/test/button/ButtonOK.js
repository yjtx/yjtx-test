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
    var d = __define,c=ButtonOK;p=c.prototype;
    p.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/ButtonOK.exml"]);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.OKButton");
        this.addChild(ui);
    };
    return ButtonOK;
})(eui.Group);
egret.registerClass(ButtonOK,"ButtonOK");
