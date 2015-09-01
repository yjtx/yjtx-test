//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var EditableTextSkinNormal = (function (_super) {
    __extends(EditableTextSkinNormal, _super);
    function EditableTextSkinNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = EditableTextSkinNormal.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/EditableTextNormal.exml"]);
    };
    __egretProto__.testUrl = function () {
        var ui = utils.createClass("components.EditableTextNormal");
        this.addChild(ui);
    };
    return EditableTextSkinNormal;
})(eui.Group);
EditableTextSkinNormal.prototype.__class__ = "EditableTextSkinNormal";
egret.registerClass(EditableTextSkinNormal,"EditableTextSkinNormal");
