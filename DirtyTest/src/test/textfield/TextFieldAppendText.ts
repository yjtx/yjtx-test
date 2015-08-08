/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldAppendText extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testAppendText();
    }

    private testAppendText():void {
        var textfield1 = new egret.TextField();
        textfield1.appendText("aaa");
        textfield1.appendText("bbb");
        textfield1.text = "";
        textfield1.appendText("ccc");
        textfield1.appendText("ddd");
        this.addChild(textfield1);
    }
}

