//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}
var EditableTextNormal = (function (_super) {
    __extends(EditableTextNormal, _super);
    function EditableTextNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = EditableTextNormal.prototype;
    __egretProto__.init = function () {
        this.testUrl();
    };
    __egretProto__.testUrl = function () {
        var ui = new swan.EditableText();
        ui.width = 300;
        ui.height = 100;
        ui.border = true;
        this.addChild(ui);
    };
    return EditableTextNormal;
})(swan.Group);
EditableTextNormal.prototype.__class__ = "EditableTextNormal";
egret.registerClass(EditableTextNormal,"EditableTextNormal");
