//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var LabelNormal = (function (_super) {
    __extends(LabelNormal, _super);
    function LabelNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=LabelNormal,p=c.prototype;
    p.init = function () {
        this.testUrl();
    };
    p.testUrl = function () {
        var ui = new eui.Label();
        ui.text = "sdfsdf";
        this.addChild(ui);
    };
    return LabelNormal;
}(eui.Group));
egret.registerClass(LabelNormal,'LabelNormal');
