var LabelNormal = (function (_super) {
    __extends(LabelNormal, _super);
    function LabelNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=LabelNormal,p=c.prototype;
    p.init = function () {
        this.testUrl();
    };
    p.testUrl = function () {
        var ui = new egret.gui.Label();
        ui.text = "sdasdfdasaasdnfsdf";
        ui.width = 100;
        ui.height = 60;
        this.addChild(ui);
    };
    return LabelNormal;
}(egret.DisplayObjectContainer));
egret.registerClass(LabelNormal,'LabelNormal');
