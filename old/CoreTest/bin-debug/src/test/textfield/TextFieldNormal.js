/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldNormal = (function (_super) {
    __extends(TextFieldNormal, _super);
    function TextFieldNormal() {
        _super.call(this);
    }
    var __egretProto__ = TextFieldNormal.prototype;
    __egretProto__.initRoot = function () {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.background = true;
        textfield1.backgroundColor = 0xff00ff;
        this.addChild(textfield1);
    };
    return TextFieldNormal;
})(EntryDisplayObjectContainer);
TextFieldNormal.prototype.__class__ = "TextFieldNormal";
