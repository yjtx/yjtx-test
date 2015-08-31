/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldWrap extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testTextFieldWidth();
    }

    private testTextFieldWidth():void {
        //var textfield1 = new egret.TextField();
        //textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        //textfield1.width = 80;
        //this.addChild(textfield1);
        //textfield1.wordWrap = true;

        var textfield1 = new egret.TextField();
        textfield1.text = "阿德福利将拉动是缴费 卡交水电费asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.width = 180;
        textfield1.wordWrap = true;
        textfield1.y = 280;
        this.addChild(textfield1);
    }
}

