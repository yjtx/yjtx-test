/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldFlow extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testFlow();
    }

    private testFlow():void {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var input:egret.TextField;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('是\n否\n花费 钻石<font color="0x0000ff" href="event:dfdf  d  fd" size="40">2dfdfdf0</font>抢购\n<font color="0xffff00">封测\n登录大礼包</font>？');
        input.size = 30;
        //input.width = 200;
        input.height = 140;
        input.scrollV = 2;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        c.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
            console.log(e.type);
            console.log(e.text);
        }, this);


        var input = new egret.TextField();
        input.text = "fuck";
        input.size = 30;
        input.width = 200;
        input.y = 0;
        input.x = 0;
        input.textAlign = egret.HorizontalAlign.RIGHT;
        input.verticalAlign = egret.VerticalAlign.BOTTOM;
        input.height = 40;
        c.addChild(input);

        this.addChild(c);
    }
}

