/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldFamily extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testTextFieldWidth();
    }

    private testTextFieldWidth():void {
        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "Arial";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 10;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "Microsoft YaHei";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 50;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "微软雅黑";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 90;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "Arial";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 130;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "SumSun";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 170;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds!";
        textfield.fontFamily = "宋体";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 210;
    }
}

