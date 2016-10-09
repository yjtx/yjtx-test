var TextInputNormal = (function (_super) {
    __extends(TextInputNormal, _super);
    function TextInputNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=TextInputNormal,p=c.prototype;
    p.init = function () {
        this.testUrl();
    };
    p.testUrl = function () {
        var text = new egret.gui.TextInput();
        text.text = "sdfsdsdff";
        text.width = 200;
        text.height = 30;
        text.addEventListener(egret.Event.CHANGE, function (e) {
            console.log(text.text);
        }, this);
        var ui = new egret.gui.UIAsset();
        ui.x = ui.y = 100;
        ui.source = text;
        this.addChild(ui);
    };
    return TextInputNormal;
}(egret.DisplayObjectContainer));
egret.registerClass(TextInputNormal,'TextInputNormal');
