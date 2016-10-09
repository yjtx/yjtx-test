//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var EditableTextNormal = (function (_super) {
    __extends(EditableTextNormal, _super);
    function EditableTextNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=EditableTextNormal,p=c.prototype;
    p.init = function () {
        this.testUrl();
    };
    p.testUrl = function () {
        var ui = new eui.EditableText();
        ui.width = 300;
        ui.height = 100;
        ui.border = true;
        this.addChild(ui);
    };
    return EditableTextNormal;
}(eui.Group));
egret.registerClass(EditableTextNormal,'EditableTextNormal');
