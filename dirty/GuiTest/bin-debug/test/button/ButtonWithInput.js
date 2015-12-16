/**
 * Created by yjtx on 15-11-12.
 */
var ButtonWithInput = (function (_super) {
    __extends(ButtonWithInput, _super);
    function ButtonWithInput() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ButtonWithInput;p=c.prototype;
    p.initRoot = function () {
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
            egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_IN, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        textField1.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e) {
            egret.log(e.type + "   " + textField1.text);
        }, this);
        var guiLayer = new egret.gui.UIStage();
        this.addChild(guiLayer);
        var btn = new egret.gui.Button();
        btn.label = "确定";
        guiLayer.addElement(btn);
        btn.y = 300;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("btn  TOUCH_TAP");
        }, this);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("this  TOUCH_TAP");
        }, this);
    };
    return ButtonWithInput;
})(EntryDisplayObjectContainer);
egret.registerClass(ButtonWithInput,"ButtonWithInput");
