var AllExamples = (function (_super) {
    __extends(AllExamples, _super);
    function AllExamples() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=AllExamples;p=c.prototype;
    p.init = function () {
        var skins = [
            "resource/components/blue/ListGroup.exml",
            "resource/components/blue/TabBar.exml",
            "resource/components/CloseButton.exml",
            "resource/components/CancelButton.exml",
            "resource/components/MainGroup.exml"
        ];
        new LoadResources(this.testUrl, this, this.stage, skins);
    };
    p.testUrl = function () {
        var ui = utils.createClass("components.MainGroup");
        this.addChild(ui);
    };
    return AllExamples;
})(eui.Group);
egret.registerClass(AllExamples,"AllExamples");
