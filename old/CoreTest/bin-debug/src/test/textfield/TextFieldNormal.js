/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldNormal = (function (_super) {
    __extends(TextFieldNormal, _super);
    function TextFieldNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextFieldNormal.prototype;
    __egretProto__.init = function () {
        this.testNormal();
    };
    __egretProto__.testNormal = function () {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.background = true;
        textfield1.backgroundColor = 0xff00ff;
        this.addChild(textfield1);
    };
    return TextFieldNormal;
})(egret.DisplayObjectContainer);
TextFieldNormal.prototype.__class__ = "TextFieldNormal";
