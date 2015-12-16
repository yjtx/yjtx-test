/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldWrap = (function (_super) {
    __extends(TextFieldWrap, _super);
    function TextFieldWrap() {
        _super.call(this);
    }
    var d = __define,c=TextFieldWrap,p=c.prototype;
    p.initRoot = function () {
        //var textfield1 = new egret.TextField();
        //textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        //textfield1.width = 80;
        //this.addChild(textfield1);
        //textfield1.wordWrap = true;
        var textfield1 = new egret.TextField();
        textfield1.text = "阿德福利将拉动是缴费 卡交水电费asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.width = 180;
        textfield1.wordWrap = true;
        textfield1.y = 280;
        this.addChild(textfield1);
    };
    return TextFieldWrap;
})(EntryDisplayObjectContainer);
egret.registerClass(TextFieldWrap,'TextFieldWrap');
