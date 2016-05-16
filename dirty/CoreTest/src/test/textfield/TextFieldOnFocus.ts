/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldOnFocus extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.beginFill(0xff0000);
        shape.graphics.lineStyle(2, 0xffff00);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.touchEnabled = true;

        var textField2= new egret.TextField();
        textField2.background = true;
        textField2.type = egret.TextFieldType.INPUT;
        textField2.textColor = 0;
        textField2.x = 110;
        textField2.y = 610;
        this.addChild(textField2);
        textField2.addEventListener(egret.Event.CHANGE, function (e:egret.Event) {
            egret.log(e.type + "   " + textField2.text);
        }, this);

        textField2.addEventListener(egret.FocusEvent.FOCUS_IN, function (e:egret.Event) {
            egret.log(e.type + "   " + textField2.text);
        }, this);

        textField2.addEventListener(egret.FocusEvent.FOCUS_OUT, function (e:egret.Event) {
            egret.log(e.type + "   " + textField2.text);
        }, this);

        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("1111")
            textField2.setFocus();
        }, this);
    }


}

