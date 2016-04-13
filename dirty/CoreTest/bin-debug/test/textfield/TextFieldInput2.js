/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldInput2 = (function (_super) {
    __extends(TextFieldInput2, _super);
    function TextFieldInput2() {
        _super.call(this);
    }
    var d = __define,c=TextFieldInput2,p=c.prototype;
    p.initRoot = function () {
        this.createTextField("111", 40, 10, 120, 150, 40, egret.VerticalAlign.TOP, egret.HorizontalAlign.LEFT);
        this.createTextField("222", 40, 210, 120, 150, 40, egret.VerticalAlign.MIDDLE, egret.HorizontalAlign.LEFT);
        this.createTextField("222", 40, 410, 120, 150, 40, egret.VerticalAlign.BOTTOM, egret.HorizontalAlign.LEFT);
    };
    p.createTextField = function (text, size, x, y, width, height, verticalAlign, textAlign) {
        var textField = new egret.TextField();
        textField.multiline = false;
        textField.text = text;
        textField.size = size;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = x;
        textField.y = y;
        textField.lineSpacing = 2;
        textField.width = width;
        textField.height = height;
        textField.background = true;
        textField.backgroundColor = 0x00ffff;
        textField.border = true;
        textField.borderColor = 0x00ff00;
        textField.verticalAlign = verticalAlign;
        textField.textAlign = textAlign;
    };
    return TextFieldInput2;
}(EntryDisplayObjectContainer));
egret.registerClass(TextFieldInput2,'TextFieldInput2');
