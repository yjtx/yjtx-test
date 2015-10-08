/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldNormal extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testNormal();
    }

    private testNormal():void {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.background = true;
        textfield1.backgroundColor = 0xff00ff;
        this.addChild(textfield1);
    }
}

