/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldFamily = (function (_super) {
    __extends(TextFieldFamily, _super);
    function TextFieldFamily() {
        _super.call(this);
    }
    var d = __define,c=TextFieldFamily,p=c.prototype;
    p.initRoot = function () {
        egret.TextField.default_fontFamily = "SimHei";
        this.addText("一行白鹭上青天，all birds! 浏览器 默认", "aa");
        this.addText("一行白鹭上青天，all birds! Egret 默认", null);
        this.addText("一行白鹭上青天，all birds! Arial", "Arial");
        this.addText("一行白鹭上青天，all birds! 微软雅黑", "Microsoft YaHei");
        this.addText("一行白鹭上青天，all birds! 宋体", "SumSun");
        this.addText("一行白鹭上青天，all birds! 黑体", "SimHei");
        this.addText("一行白鹭上青天，all birds! 新宋体", "NSimSun");
        this.addText("一行白鹭上青天，all birds! 新细明体", "PMingLiU");
        this.addText("一行白鹭上青天，all birds! 标楷体", "DFKai-SB");
        this.addText("一行白鹭上青天，all birds! 楷体", "KaiTi");
    };
    p.addText = function (text, family) {
        var textfield = new egret.TextField();
        textfield.text = text;
        textfield.fontFamily = family;
        textfield.x = 10;
        textfield.y = this.numChildren * 40 + 10;
        this.addChild(textfield);
    };
    return TextFieldFamily;
})(EntryDisplayObjectContainer);
egret.registerClass(TextFieldFamily,'TextFieldFamily');
