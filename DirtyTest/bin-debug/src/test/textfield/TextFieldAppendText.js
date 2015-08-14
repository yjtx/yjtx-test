/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldAppendText = (function (_super) {
    __extends(TextFieldAppendText, _super);
    function TextFieldAppendText() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextFieldAppendText.prototype;
    __egretProto__.init = function () {
        this.testAppendText();
    };
    __egretProto__.testAppendText = function () {
        var textfield1 = new egret.TextField();
        textfield1.appendText("aaa");
        textfield1.appendText("bbb");
        textfield1.text = "";
        textfield1.appendText("ccc");
        textfield1.appendText("ddd");
        this.addChild(textfield1);
    };
    return TextFieldAppendText;
})(egret.DisplayObjectContainer);
TextFieldAppendText.prototype.__class__ = "TextFieldAppendText";
egret.registerClass(TextFieldAppendText,"TextFieldAppendText");
