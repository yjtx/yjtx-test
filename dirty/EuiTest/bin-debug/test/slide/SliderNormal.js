//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var SliderNormal = (function (_super) {
    __extends(SliderNormal, _super);
    function SliderNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=SliderNormal,p=c.prototype;
    p.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/SliderNormal.exml"]);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.SliderNormal");
        this.addChild(ui);
    };
    return SliderNormal;
}(eui.Group));
egret.registerClass(SliderNormal,'SliderNormal');
