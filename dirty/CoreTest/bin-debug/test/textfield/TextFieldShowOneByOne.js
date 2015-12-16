/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldShowOneByOne = (function (_super) {
    __extends(TextFieldShowOneByOne, _super);
    function TextFieldShowOneByOne() {
        _super.call(this);
    }
    var d = __define,c=TextFieldShowOneByOne,p=c.prototype;
    p.initRoot = function () {
        var str = "啊哈哈哈，装花蝶舞真有趣。竟然被你看出来，我是黄大仙。人类见到我也要敬我三分。";
        var textfield1 = new egret.TextField();
        textfield1.text = "";
        textfield1.fontFamily = "Microsoft YaHei";
        textfield1.size = 19;
        this.addChild(textfield1);
        textfield1.width = 450;
        textfield1.y = 100;
        var count = 0;
        egret.setInterval(function () {
            count++;
            textfield1.text = str.substr(0, count);
            if (count == str.length) {
                count = 0;
            }
        }, this, 200);
    };
    return TextFieldShowOneByOne;
})(EntryDisplayObjectContainer);
egret.registerClass(TextFieldShowOneByOne,'TextFieldShowOneByOne');
