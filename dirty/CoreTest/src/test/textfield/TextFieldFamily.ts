/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldFamily extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        egret.TextField.default_fontFamily = "SimHei";

        this.addText("一行白鹭上青天，all birds! 浏览器 默认", "aa");

        this.addText("一行白鹭上青天，all birds! Egret 默认", null);

        this.addText("一行白鹭上青天，all birds! Arial", "Arial");

        this.addText("一行白鹭上青天，all birds! 微软雅黑", "Microsoft YaHei");
        this.addText("一行白鹭上青天，all birds! 宋体", "SumSun");
        this.addText("一行白鹭上青天，all birds! 黑体", "SimHei");
        this.addText("一行白鹭上青天，all birds! 新宋体", "NSimSun");
        this.addText("一行白鹭上青天，all birds! 新细明体", "PMingLiU");
        this.addText("一行白鹭上青天，all birds! 标楷体", "DFKai-SB");
        this.addText("一行白鹭上青天，all birds! 楷体", "KaiTi");
    }

    private addText(text:string, family:string):void {
        var textfield:egret.TextField = new egret.TextField();
        textfield.text = text;
        textfield.fontFamily = family;
        textfield.x = 10;
        textfield.y = this.numChildren * 40 + 10;
        this.addChild(textfield);
    }
}

