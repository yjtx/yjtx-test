/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldMiniWidth = (function (_super) {
    __extends(TextFieldMiniWidth, _super);
    function TextFieldMiniWidth() {
        _super.call(this);
    }
    var d = __define,c=TextFieldMiniWidth,p=c.prototype;
    p.initRoot = function () {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        this.addChild(textfield1);
        textfield1.width = 10;
    };
    return TextFieldMiniWidth;
}(EntryDisplayObjectContainer));
egret.registerClass(TextFieldMiniWidth,'TextFieldMiniWidth');
