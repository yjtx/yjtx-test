/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldInputTextWithDisplayAsPasswordAndRestrict = (function (_super) {
    __extends(TextFieldInputTextWithDisplayAsPasswordAndRestrict, _super);
    function TextFieldInputTextWithDisplayAsPasswordAndRestrict() {
        _super.call(this);
    }
    var d = __define,c=TextFieldInputTextWithDisplayAsPasswordAndRestrict,p=c.prototype;
    p.initRoot = function () {
        var textField1 = new egret.TextField();
        textField1.multiline = false;
        textField1.text = "aaa";
        textField1.size = 40;
        textField1.textColor = 0xff0000;
        textField1.type = egret.TextFieldType.INPUT;
        textField1.restrict = "a-z0-9";
        textField1.displayAsPassword = true;
        this.addChild(textField1);
        textField1.x = 110;
        textField1.y = 210;
        textField1.lineSpacing = 2;
        textField1.width = this.stage.stageWidth;
        textField1.height = 40;
        textField1.background = true;
        textField1.backgroundColor = 0x00ffff;
        textField1.border = true;
        textField1.borderColor = 0x00ff00;
        textField1.addEventListener(egret.Event.CHANGE, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        var textField2 = new egret.TextField();
        textField2.background = true;
        textField2.type = egret.TextFieldType.INPUT;
        textField2.textColor = 0;
        textField2.x = 110;
        textField2.y = 310;
        textField2.displayAsPassword = true;
        textField2.restrict = "a-z0-9";
        this.addChild(textField2);
        textField2.addEventListener(egret.Event.CHANGE, function (e) {
            egret.log(e.type + "   " + textField2.text);
        }, this);
        textField2.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField2.text);
        }, this);
        textField2.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField2.text);
        }, this);
    };
    return TextFieldInputTextWithDisplayAsPasswordAndRestrict;
})(EntryDisplayObjectContainer);
egret.registerClass(TextFieldInputTextWithDisplayAsPasswordAndRestrict,'TextFieldInputTextWithDisplayAsPasswordAndRestrict');
