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

    }
}

