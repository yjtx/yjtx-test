/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldBackground extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var textfield1 = new egret.TextField();
        textfield1.text = "sfsfsf";
        textfield1.size = 60;
        textfield1.textColor = 0xff0000;
        this.addChild(textfield1);
        textfield1.x = 100;
        textfield1.y = 400;
        textfield1.background = true;
        textfield1.backgroundColor = 0x00ffff;
        textfield1.border = true;
        textfield1.borderColor = 0x00ff00;

        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this.addChild(c);
        c.x = 100;
        c.y = 400;
        c.scaleX = c.scaleY = 0.7;
        var textfield3 = new egret.TextField();
        textfield3.text = "sfsfsf";
        textfield3.size = 60;
        textfield3.textColor = 0xffff00;
        c.addChild(textfield3);

        var textfield2 = new egret.TextField();
        textfield2.text = "sfsfsf";
        textfield2.size = 60;
        textfield2.textColor = 0xffffff;
        this.addChild(textfield2);
        textfield2.x = 100;
        textfield2.y = 400;
        textfield2.scaleX = textfield2.scaleY = 0.5;

    }
}

