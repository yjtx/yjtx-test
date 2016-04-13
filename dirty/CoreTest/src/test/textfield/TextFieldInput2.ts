/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldInput2 extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        this.createTextField("111", 40, 10, 120, 150, 40, egret.VerticalAlign.TOP, egret.HorizontalAlign.LEFT);

        this.createTextField("222", 40, 210, 120, 150, 40, egret.VerticalAlign.MIDDLE, egret.HorizontalAlign.LEFT);

        this.createTextField("222", 40, 410, 120, 150, 40, egret.VerticalAlign.BOTTOM, egret.HorizontalAlign.LEFT);
    }

    private createTextField(text:string, size:number, x:number, y:number, width:number, height:number, verticalAlign:string, textAlign:string):void {
        var textField = new egret.TextField();
        textField.multiline = false;
        textField.text = text;
        textField.size = size;
        textField.textColor = 0xff0000;
        textField.type = egret.TextFieldType.INPUT;
        this.addChild(textField);
        textField.x = x;
        textField.y = y;
        textField.lineSpacing = 2;
        textField.width = width;
        textField.height = height;
        textField.background = true;
        textField.backgroundColor = 0x00ffff;
        textField.border = true;
        textField.borderColor = 0x00ff00;
        textField.verticalAlign = verticalAlign;
        textField.textAlign = textAlign;
    }

}

