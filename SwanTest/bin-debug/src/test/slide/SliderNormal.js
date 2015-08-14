//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}
var SliderNormal = (function (_super) {
    __extends(SliderNormal, _super);
    function SliderNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = SliderNormal.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/SliderNormal.exml"]);
    };
    __egretProto__.testUrl = function () {
        var ui = utils.createClass("components.SliderNormal");
        this.addChild(ui);
    };
    return SliderNormal;
})(swan.Group);
SliderNormal.prototype.__class__ = "SliderNormal";
egret.registerClass(SliderNormal,"SliderNormal");
