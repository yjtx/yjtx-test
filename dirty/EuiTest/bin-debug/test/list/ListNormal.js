var ListNormal = (function (_super) {
    __extends(ListNormal, _super);
    function ListNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=ListNormal;p=c.prototype;
    p.init = function () {
        new LoadResources(this.testUrl, this, this.stage, ["resource/components/blue/ListGroup.exml"]);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.ListGroup");
        this.addChild(ui);
    };
    return ListNormal;
})(eui.Group);
egret.registerClass(ListNormal,"ListNormal");
