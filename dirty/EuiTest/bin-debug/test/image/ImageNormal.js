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
    var d = __define,c=ImageNormal,p=c.prototype;
    p.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/ImageNormal.exml"]);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.ImageNormal");
        this.addChild(ui);
    };
    return ImageNormal;
}(eui.Group));
egret.registerClass(ImageNormal,'ImageNormal');
