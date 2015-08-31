/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldInputRotation = (function (_super) {
    __extends(TextFieldInputRotation, _super);
    function TextFieldInputRotation() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextFieldInputRotation.prototype;
    __egretProto__.init = function () {
        this.testTextInput();
    };
    __egretProto__.testTextInput = function () {
        //this.stage.rotation = 90;
        //this.rotation = 30;
        var textField = new egret.TextField();
        textField.multiline = false;
        textField.text = "aaa";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 10;
        textField.y = 10;
        textField.lineSpacing = 2;
        textField.width = 200;
        textField.height = 40;
        textField.background = true;
        textField.backgroundColor = 0x00ffff;
        textField.border = true;
        textField.borderColor = 0x00ff00;
    };
    return TextFieldInputRotation;
})(egret.DisplayObjectContainer);
TextFieldInputRotation.prototype.__class__ = "TextFieldInputRotation";
