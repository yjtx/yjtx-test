/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldAppendText = (function (_super) {
    __extends(TextFieldAppendText, _super);
    function TextFieldAppendText() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=TextFieldAppendText;p=c.prototype;
    p.init = function () {
        this.testAppendText();
    };
    p.testAppendText = function () {
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
egret.registerClass(TextFieldAppendText,"TextFieldAppendText");
