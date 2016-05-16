/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldInputRotation = (function (_super) {
    __extends(TextFieldInputRotation, _super);
    function TextFieldInputRotation() {
        _super.call(this);
    }
    var d = __define,c=TextFieldInputRotation,p=c.prototype;
    p.initRoot = function () {
        this.stage.setContentSize(800, 480);
        this.stage.orientation = egret.OrientationMode.LANDSCAPE_FLIPPED;
        this.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
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
            // egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            // egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            // egret.log(e.type + "   " + textField1.text);
        }, this);
        var textField2 = new egret.TextField();
        textField2.background = true;
        textField2.type = egret.TextFieldType.INPUT;
        textField2.textColor = 0;
        textField2.x = 110;
        textField2.y = 310;
        textField2.rotation = 90;
        textField2.width = 300;
        textField2.height = 60;
        textField2.anchorOffsetX = 150;
        textField2.anchorOffsetY = 30;
        this.addChild(textField2);
        textField2.addEventListener(egret.Event.CHANGE, function (e) {
            // egret.log(e.type + "   " + textField2.text);
        }, this);
        textField2.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            // egret.log(e.type + "   " + textField2.text);
        }, this);
        textField2.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            // egret.log(e.type + "   " + textField2.text);
        }, this);
    };
    return TextFieldInputRotation;
}(EntryDisplayObjectContainer));
egret.registerClass(TextFieldInputRotation,'TextFieldInputRotation');
