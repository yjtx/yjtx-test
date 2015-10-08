/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldFlowRun extends egret.DisplayObjectContainer {
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
        input.textFlow = new egret.HtmlTextParser().parser('<u>花费 钻石<font color="0x0ff0ff" href="event:dfdf  d  fd" size="40">2dfdfdf0</font>抢</u>');
        input.size = 30;
        //input.width = 200;
        input.height = 140;
        input.x = 100;
        input.y = 100;
        input.scrollV = 1;
        //input.verticalAlign = egret.VerticalAlign.MIDDLE;
        c.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
            console.log(e.type);
            console.log(e.text);
        }, this);
        this.addChild(c);

        egret.setInterval(function () {
            input.rotation += -10;
        }, this, 100);
    }
}

