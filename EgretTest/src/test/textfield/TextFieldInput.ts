/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldInput extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testTextInput();
    }


    private testTextInput():void {

        var TextField = new egret.TextField();
        TextField.text = "";
        TextField.size = 30;
        TextField.textColor = 0xff0000;
        TextField.type = egret.TextFieldType.INPUT
        this.addChild(TextField);
        TextField.x = 100;
        TextField.y = 100;
        TextField.lineSpacing = 20;
        TextField.height = 180;
        TextField.background = true;
        TextField.backgroundColor = 0x00ffff;
        TextField.border = true;
        TextField.borderColor = 0x00ff00;


        var TextField = new egret.TextField();
        TextField.text = "";
        TextField.size = 30;
        TextField.multiline = true;
        TextField.textColor = 0xff0000;
        TextField.type = egret.TextFieldType.INPUT
        this.addChild(TextField);
        TextField.x = 100;
        TextField.y = 400;
        TextField.lineSpacing = 20;
        TextField.height = 180;
        TextField.background = true;
        TextField.backgroundColor = 0x00ffff;
        TextField.border = true;
        TextField.borderColor = 0x00ff00;

        //var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        //this.addChild(c);
        //c.x = 100;
        //c.y = 400;
        //c.scaleX = c.scaleY = 0.7;
        //var textfield3 = new egret.TextField();
        //textfield3.text = "sfsfsf";
        //textfield3.size = 60;
        //textfield3.textColor = 0xffff00;
        //c.addChild(textfield3);
        //
        //var textfield2 = new egret.TextField();
        //textfield2.text = "sfsfsf";
        //textfield2.size = 60;
        //textfield2.textColor = 0xffffff;
        //this.addChild(textfield2);
        //textfield2.x = 100;
        //textfield2.y = 400;
        //textfield2.scaleX = textfield2.scaleY = 0.5;

    }
}

