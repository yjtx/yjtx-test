//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}
var LabelNormalDelay = (function (_super) {
    __extends(LabelNormalDelay, _super);
    function LabelNormalDelay() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=LabelNormalDelay;p=c.prototype;
    p.init = function () {
        this.testUrl();
    };
    p.testUrl = function () {
        var ui = new egret.gui.Label();
        ui.text = "11";
        this.addChild(ui);
        egret.setTimeout(function () {
            ui.text = "12313;";
        }, this, 1000);
    };
    return LabelNormalDelay;
})(egret.DisplayObjectContainer);
egret.registerClass(LabelNormalDelay,"LabelNormalDelay");
