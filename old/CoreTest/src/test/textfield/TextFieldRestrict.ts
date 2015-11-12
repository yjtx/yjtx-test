/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldRestrict extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "没有限制";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 10;
        textField.y = 60;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = null;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "完全限制";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 170;
        textField.y = 60;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "";

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "a-z";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 330;
        textField.y = 60;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "a-z";


        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "^a-z";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 10;
        textField.y = 270;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "^a-z";

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "a-z^h-q";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 170;
        textField.y = 270;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "a-z^h-q";

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "a-z\\^12";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 330;
        textField.y = 270;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "a-z\\^12";


        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "a-z^";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 10;
        textField.y = 480;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "a-z^";

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "黄海鹰";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 170;
        textField.y = 480;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
        textField.restrict = "黄海鹰";

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 330;
        textField.y = 480;
        textField.lineSpacing = 20;
        textField.width = 150;
        textField.height = 200;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;
    }
}

