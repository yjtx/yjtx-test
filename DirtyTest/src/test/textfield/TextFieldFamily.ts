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
        textfield.text = "一行白鹭上青天，all birds! 默认";
        textfield.fontFamily = "dfsafafdf";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 10;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 微软雅黑";
        textfield.fontFamily = "Microsoft YaHei";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 50;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 宋体";
        textfield.fontFamily = "SumSun";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 90;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 黑体";
        textfield.fontFamily = "SimHei";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 130;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 新宋体";
        textfield.fontFamily = "NSimSun";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 170;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 新细明体";
        textfield.fontFamily = "PMingLiU";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 210;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 标楷体";
        textfield.fontFamily = "DFKai-SB";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 250;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! 楷体";
        textfield.fontFamily = "KaiTi";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 290;

        var textfield = new egret.TextField();
        textfield.text = "一行白鹭上青天，all birds! Arial";
        textfield.fontFamily = "Arial";
        this.addChild(textfield);
        textfield.x = 10;
        textfield.y = 330;
    }
}

