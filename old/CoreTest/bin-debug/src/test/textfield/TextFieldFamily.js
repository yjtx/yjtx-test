/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldFamily = (function (_super) {
    __extends(TextFieldFamily, _super);
    function TextFieldFamily() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TextFieldFamily.prototype;
    __egretProto__.init = function () {
        this.testTextFieldWidth();
    };
    __egretProto__.testTextFieldWidth = function () {
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "Arial";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 10;
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "Microsoft YaHei";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 50;
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "微软雅黑";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 90;
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "Arial";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 130;
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "SumSun";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 170;
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "宋体";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 210;
    };
    return TextFieldFamily;
})(egret.DisplayObjectContainer);
TextFieldFamily.prototype.__class__ = "TextFieldFamily";
