/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldNormal extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        textfield1.background = true;
        textfield1.backgroundColor = 0xff00ff;
        this.addChild(textfield1);
    }
}

