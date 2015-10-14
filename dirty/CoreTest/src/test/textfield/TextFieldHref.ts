/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldHref extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.test1();
        this.test2();
        this.test3();
    }

    private test1():void {
        var input:egret.TextField;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('是\n否\n花费 钻石<font color="0x0000ff" size="40"><a href="event:dfdf  d  fd">2dfdfdf0</a></font>抢购\n<font color="0xffff00">封测\n登录大礼包</font>？');
        input.size = 30;
        input.height = 140;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
            console.log(e.type);
            console.log(e.text);
        }, this);

    }
    private test2():void {
        var input:egret.TextField;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('是\n否\n花费 钻石<font color="0x0000ff" size="40"><a href="http://www.baidu.com">2dfdfdf0</a></font>抢购\n<font color="0xffff00">封测\n登录大礼包</font>？');
        input.size = 30;
        input.height = 140;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(input);
        input.touchEnabled = true;
        input.y = 200;
    }

    private test3():void {
        var input:egret.TextField;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('是\n否\n花费 钻石<font color="0x0000ff" size="40"><a href="event:dfdf  d  fd">2dfdfdf0</a></font>抢购\n<font color="0xffff00">封测\n登录大礼包</font>？');
        input.size = 30;
        input.height = 140;
        input.y = 350;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        input.textAlign = egret.HorizontalAlign.RIGHT;
        this.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
            console.log(e.type);
            console.log(e.text);
        }, this);

    }
}

