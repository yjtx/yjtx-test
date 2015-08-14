var ListNormal = (function (_super) {
    __extends(ListNormal, _super);
    function ListNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = ListNormal.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/components/blue/ListGroup.exml"]);
    };
    __egretProto__.testUrl = function () {
        var ui = utils.createClass("components.ListGroup");
        this.addChild(ui);
    };
    return ListNormal;
})(swan.Group);
ListNormal.prototype.__class__ = "ListNormal";
egret.registerClass(ListNormal,"ListNormal");
