/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldTextArea extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 10;
        textField.y = 10;
        textField.lineSpacing = 20;
        textField.width = 200;
        textField.height = 40;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 220;
        textField.y = 10;
        textField.lineSpacing = 20;
        textField.width = 200;
        textField.height = 30;
        textField.background = true;
        textField.backgroundColor = 0xffffff;
        textField.border = true;
        textField.borderColor = 0x000000;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.textAlign = egret.HorizontalAlign.LEFT;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.textAlign = egret.HorizontalAlign.CENTER;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.textAlign = egret.HorizontalAlign.RIGHT;


        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.verticalAlign = egret.VerticalAlign.MIDDLE;
        textField.textAlign = egret.HorizontalAlign.LEFT;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.verticalAlign = egret.VerticalAlign.MIDDLE;
        textField.textAlign = egret.HorizontalAlign.CENTER;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.verticalAlign = egret.VerticalAlign.MIDDLE;
        textField.textAlign = egret.HorizontalAlign.RIGHT;


        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.verticalAlign = egret.VerticalAlign.BOTTOM;
        textField.textAlign = egret.HorizontalAlign.LEFT;

        var textField = new egret.TextField();
        textField.multiline = true;
        textField.text = "aaa\nbb";
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
        textField.verticalAlign = egret.VerticalAlign.BOTTOM;
        textField.textAlign = egret.HorizontalAlign.CENTER;

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
        textField.verticalAlign = egret.VerticalAlign.BOTTOM;
        textField.textAlign = egret.HorizontalAlign.RIGHT;
    }


}

