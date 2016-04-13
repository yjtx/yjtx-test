/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldMiniWidth extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var textfield1 = new egret.TextField();
        textfield1.text = "asdf11sfsfsf 1dsfsfasdflj1\nsadaf\nfdsfs";
        this.addChild(textfield1);
        textfield1.width = 10;
    }
}

