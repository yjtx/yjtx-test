var TextInputNormal = (function (_super) {
    __extends(TextInputNormal, _super);
    function TextInputNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextInputNormal.prototype;
    __egretProto__.init = function () {
        this.testUrl();
    };
    __egretProto__.testUrl = function () {
        var text = new egret.gui.TextInput();
        text.text = "sdfsdsdff";
        text.width = 200;
        text.height = 30;
        text.multiline = true;
        text.addEventListener(egret.Event.CHANGE, function (e) {
            console.log(text.text);
        }, this);
        var ui = new egret.gui.UIAsset();
        ui.x = ui.y = 100;
        ui.source = text;
        this.addChild(ui);
    };
    return TextInputNormal;
})(egret.DisplayObjectContainer);
TextInputNormal.prototype.__class__ = "TextInputNormal";
