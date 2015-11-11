/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldNormalDelay extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var textfield1 = new egret.TextField();
        this.addChild(textfield1);

        egret.setTimeout(function () {
            textfield1.text = "123123432433;"
        }, this, 1000);
    }
}

