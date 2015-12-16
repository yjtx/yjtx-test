/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldNormalDelay = (function (_super) {
    __extends(TextFieldNormalDelay, _super);
    function TextFieldNormalDelay() {
        _super.call(this);
    }
    var __egretProto__ = TextFieldNormalDelay.prototype;
    __egretProto__.initRoot = function () {
        var textfield1 = new egret.TextField();
        this.addChild(textfield1);
        egret.setTimeout(function () {
            textfield1.text = "123123432433;";
        }, this, 1000);
    };
    return TextFieldNormalDelay;
})(EntryDisplayObjectContainer);
TextFieldNormalDelay.prototype.__class__ = "TextFieldNormalDelay";
