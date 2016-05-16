/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldFlow extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var input:egret.TextField;
        input = new egret.TextField();
        // input.textFlow = new egret.HtmlTextParser().parser('是\n否\n<u>花费 钻石<font color="0x0ff0ff" href="event:dfdf  d  fd" size="40">2dfdfdf0</font>抢</u>购\n<font color="0xff0000">封测\n登录<u>大礼</u>包</font>？');
        input.textFlow = new egret.HtmlTextParser().parser("是\n否\n<u>花费 钻石<font color=0x0ff0ff href='event:dfdf  d  fd' size=40>2dfdfdf0</font>抢</u>购\n<font color=0xff0000>封测\n登录<u>大礼</u>包</font>？");
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
        this.addChild(c);
    }
}

