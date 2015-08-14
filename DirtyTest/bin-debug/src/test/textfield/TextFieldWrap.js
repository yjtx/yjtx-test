/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldWrap = (function (_super) {
    __extends(TextFieldWrap, _super);
    function TextFieldWrap() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextFieldWrap.prototype;
    __egretProto__.init = function () {
        this.testTextFieldWidth();
    };
    __egretProto__.testTextFieldWidth = function () {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.width = 80;
        this.addChild(textfield1);
    };
    return TextFieldWrap;
})(egret.DisplayObjectContainer);
TextFieldWrap.prototype.__class__ = "TextFieldWrap";
egret.registerClass(TextFieldWrap,"TextFieldWrap");
