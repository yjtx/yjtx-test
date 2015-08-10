/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldNormalDelay extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testNormal();
    }

    private testNormal():void {
        var textfield1 = new egret.TextField();
        this.addChild(textfield1);

        egret.setTimeout(function () {
            textfield1.text = "123123432433;"
        }, this, 1000);
    }
}

