/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldAppendText = (function (_super) {
    __extends(TextFieldAppendText, _super);
    function TextFieldAppendText() {
        _super.call(this);
    }
    var __egretProto__ = TextFieldAppendText.prototype;
    __egretProto__.initRoot = function () {
        var textfield1 = new egret.TextField();
        textfield1.appendText("aaa");
        textfield1.appendText("bbb");
        textfield1.text = "";
        textfield1.appendText("ccc");
        textfield1.appendText("ddd");
        this.addChild(textfield1);
    };
    return TextFieldAppendText;
})(EntryDisplayObjectContainer);
TextFieldAppendText.prototype.__class__ = "TextFieldAppendText";
