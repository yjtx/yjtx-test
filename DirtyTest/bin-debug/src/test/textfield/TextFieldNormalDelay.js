/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldNormalDelay = (function (_super) {
    __extends(TextFieldNormalDelay, _super);
    function TextFieldNormalDelay() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextFieldNormalDelay.prototype;
    __egretProto__.init = function () {
        this.testNormal();
    };
    __egretProto__.testNormal = function () {
        var textfield1 = new egret.TextField();
        this.addChild(textfield1);
        egret.setTimeout(function () {
            textfield1.text = "123123432433;";
        }, this, 1000);
    };
    return TextFieldNormalDelay;
})(egret.DisplayObjectContainer);
TextFieldNormalDelay.prototype.__class__ = "TextFieldNormalDelay";
egret.registerClass(TextFieldNormalDelay,"TextFieldNormalDelay");
