//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var ImageNormal = (function (_super) {
    __extends(ImageNormal, _super);
    function ImageNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = ImageNormal.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/ImageNormal.exml"]);
    };
    __egretProto__.testUrl = function () {
        var ui = utils.createClass("components.ImageNormal");
        this.addChild(ui);
    };
    return ImageNormal;
})(eui.Group);
ImageNormal.prototype.__class__ = "ImageNormal";
egret.registerClass(ImageNormal,"ImageNormal");
