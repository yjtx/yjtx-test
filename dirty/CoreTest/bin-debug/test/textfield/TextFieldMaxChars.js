/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldMaxChars = (function (_super) {
    __extends(TextFieldMaxChars, _super);
    function TextFieldMaxChars() {
        _super.call(this);
    }
    var d = __define,c=TextFieldMaxChars,p=c.prototype;
    p.initRoot = function () {
        var self = this;
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.lineStyle(2, 0xffff00);
        shape.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        shape.graphics.endFill();
        var textField1 = new egret.TextField();
        textField1.multiline = false;
        textField1.text = "aaa";
        textField1.size = 40;
        textField1.textColor = 0xff0000;
        textField1.type = egret.TextFieldType.INPUT;
        textField1.maxChars = 8;
        this.addChild(textField1);
        textField1.x = 110;
        textField1.y = 210;
        textField1.lineSpacing = 2;
        textField1.width = this.stage.stageWidth;
        textField1.height = 40;
        textField1.background = true;
        textField1.backgroundColor = 0x00ffff;
        textField1.border = true;
        textField1.borderColor = 0x00ff00;
        textField1.addEventListener(egret.Event.CHANGE, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        var textField2 = new egret.TextField();
        textField2.background = true;
        textField2.type = egret.TextFieldType.INPUT;
        textField2.width = 400;
        textField2.textColor = 0;
        textField2.x = 10;
        textField2.y = 310;
        this.addChild(textField2);
        textField2.addEventListener(egret.Event.CHANGE, function (e) {
            egret.log(e.type + "   " + textField2.text);
        }, this);
        textField2.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField2.text);
        }, this);
        textField2.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField2.text);
            textField2.text = self.getChar(textField2.text, 9);
        }, this);
    };
    p.getChar = function (_str, _len) {
        var _ba = new egret.ByteArray;
        _ba.writeUTFBytes(_str);
        if (_ba.length < _len) {
            console.log(_str);
            return _str;
        }
        _ba.position = 0;
        return _ba.readUTFBytes(_len) + "...";
    };
    return TextFieldMaxChars;
})(EntryDisplayObjectContainer);
egret.registerClass(TextFieldMaxChars,'TextFieldMaxChars');
