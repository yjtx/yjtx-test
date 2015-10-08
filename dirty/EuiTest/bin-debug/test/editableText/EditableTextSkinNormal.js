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
    var d = __define,c=EditableTextSkinNormal;p=c.prototype;
    p.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/EditableTextNormal.exml"]);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.EditableTextNormal");
        this.addChild(ui);
    };
    return EditableTextSkinNormal;
})(eui.Group);
egret.registerClass(EditableTextSkinNormal,"EditableTextSkinNormal");
