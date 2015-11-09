/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldInputNotClick extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testTextInput();
    }


    private testTextInput():void {
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.lineStyle(2, 0xffff00);
        shape.graphics.drawRect(0, 0, 200, 200);
        shape.graphics.endFill();
        shape.touchEnabled = true;

        var textField = new egret.TextField();
        textField.multiline = false;
        textField.text = "aaa";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 110;
        textField.y = 210;
        textField.lineSpacing = 2;
        textField.width = this.stage.stageWidth;
        textField.height = 40;
        textField.background = true;
        textField.backgroundColor = 0x00ffff;
        textField.border = true;
        textField.borderColor = 0x00ff00;


        var mask:egret.Shape = new egret.Shape();
        this.addChild(mask);
        mask.graphics.beginFill(0xff0000, 0);
        mask.graphics.drawRect(0, 0, textField.width, textField.height);
        mask.graphics.endFill();
        mask.touchEnabled = true;
        this.addChild(mask);
        mask.x = textField.x;
        mask.y = textField.y;


        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            textField.dispatchEvent(e);
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            textField.dispatchEvent(e);
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            textField.dispatchEvent(e);
        }, this);

        textField.addEventListener(egret.Event.CHANGE, function (e:egret.Event) {
            egret.log(e.type + "   " + textField.text);
        }, this);

        textField.addEventListener(egret.FocusEvent.FOCUS_IN, function (e:egret.Event) {
            egret.log(e.type + "   " + textField.text);
        }, this);


        textField.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e:egret.Event) {
            egret.log(e.type + "   " + textField.text);
        }, this);

    }


}

