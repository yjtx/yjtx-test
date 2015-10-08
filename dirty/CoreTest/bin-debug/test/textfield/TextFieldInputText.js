/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldInputText = (function (_super) {
    __extends(TextFieldInputText, _super);
    function TextFieldInputText() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=TextFieldInputText;p=c.prototype;
    p.init = function () {
        this.testTextInput();
    };
    p.testTextInput = function () {
        var textField = new egret.TextField();
        textField.multiline = false;
        textField.text = "aaa";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 110;
        textField.y = 210;
        textField.lineSpacing = 2;
        textField.width = 200;
        textField.height = 40;
        textField.background = true;
        textField.backgroundColor = 0x00ffff;
        textField.border = true;
        textField.borderColor = 0x00ff00;
        textField.addEventListener(egret.Event.CHANGE, function (e) {
            egret.log(e.type + "   " + textField.text);
        }, this);
        textField.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField.text);
        }, this);
        textField.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField.text);
        }, this);
        var textField = new egret.TextField();
        textField.background = true;
        textField.type = egret.TextFieldType.INPUT;
        textField.textColor = 0;
        textField.x = 110;
        textField.y = 310;
        this.addChild(textField);
        textField.addEventListener(egret.Event.CHANGE, function (e) {
            egret.log(e.type + "   " + textField.text);
        }, this);
        textField.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField.text);
        }, this);
        textField.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField.text);
        }, this);
    };
    return TextFieldInputText;
})(egret.DisplayObjectContainer);
egret.registerClass(TextFieldInputText,"TextFieldInputText");
