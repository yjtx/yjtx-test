//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var ButtonCancel = (function (_super) {
    __extends(ButtonCancel, _super);
    function ButtonCancel() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=ButtonCancel,p=c.prototype;
    p.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/components/CancelButton.exml"]);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.CancelButton");
        this.addChild(ui);
    };
    return ButtonCancel;
}(eui.Group));
egret.registerClass(ButtonCancel,'ButtonCancel');
