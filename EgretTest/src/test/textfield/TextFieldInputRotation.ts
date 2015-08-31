/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldInputRotation extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testTextInput();
    }


    private testTextInput():void {
        //this.stage.rotation = 90;
        //this.rotation = 30;

        var textField = new egret.TextField();
        textField.multiline = false;
        textField.text = "aaa";
        textField.size = 40;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = 10;
        textField.y = 10;
        textField.lineSpacing = 2;
        textField.width = 200;
        textField.height = 40;
        textField.background = true;
        textField.backgroundColor = 0x00ffff;
        textField.border = true;
        textField.borderColor = 0x00ff00;
    }


}

