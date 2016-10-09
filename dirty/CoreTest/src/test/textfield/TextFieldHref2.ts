/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldHref2 extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        this.test3(100, egret.VerticalAlign.BOTTOM, egret.HorizontalAlign.RIGHT);
        this.test3(200, egret.VerticalAlign.MIDDLE, egret.HorizontalAlign.CENTER);
        this.test3(300, egret.VerticalAlign.TOP, egret.HorizontalAlign.LEFT);

        this.test2(400, egret.VerticalAlign.BOTTOM, egret.HorizontalAlign.RIGHT);
        this.test2(500, egret.VerticalAlign.MIDDLE, egret.HorizontalAlign.CENTER);
        this.test2(600, egret.VerticalAlign.TOP, egret.HorizontalAlign.LEFT);
    }

    private test3(y:number, valign:string, halign:string):void {
        var input:egret.TextField;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('<a href="event:dddd">2dfdfdf0</a>');
        input.size = 30;
        input.height = 90;
        input.width = 300;
        input.y = y;
        input.x = 10;
        input.border = true;
        input.verticalAlign = valign;
        input.textAlign = halign;
        this.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
            console.log(e.type);
            console.log(e.text);
        }, this);

    }

    private test2(y:number, valign:string, halign:string):void {
        var input:egret.TextField;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('asdfasdfasdfasdfasfasdf\n<a href="event:dddd">2dfdfdf0</a>');
        input.size = 30;
        input.height = 90;
        input.y = y;
        input.x = 10;
        input.border = true;
        input.verticalAlign = valign;
        input.textAlign = halign;
        this.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e:egret.TextEvent) {
            console.log(e.type);
            console.log(e.text);
        }, this);

    }
}

