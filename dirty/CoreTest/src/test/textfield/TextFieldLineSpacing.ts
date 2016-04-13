/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldLineSpacing extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var textField = new egret.TextField();
        textField.type = egret.TextFieldType.INPUT;
        textField.multiline = true;
        textField.text = "232323242323323";
        textField.x = 10;
        textField.width = 200;
        textField.y = 300;
        textField.lineSpacing = 50;
        textField.height = 100;
        this.addChild(textField);
        textField.border = true;

        var textField = new egret.TextField();
        textField.type = egret.TextFieldType.INPUT;
        textField.multiline = true;
        textField.text = "232342r2sdfsdfadf";
        textField.x = 220;
        textField.width = 200;
        textField.y = 300;
        textField.lineSpacing = 20;
        textField.height = 100;
        this.addChild(textField);
        textField.border = true;
    }
}

