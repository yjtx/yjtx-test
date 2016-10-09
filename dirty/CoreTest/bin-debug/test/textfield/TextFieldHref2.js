/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldHref2 = (function (_super) {
    __extends(TextFieldHref2, _super);
    function TextFieldHref2() {
        _super.call(this);
    }
    var d = __define,c=TextFieldHref2,p=c.prototype;
    p.initRoot = function () {
        this.test3(100, egret.VerticalAlign.BOTTOM, egret.HorizontalAlign.RIGHT);
        this.test3(200, egret.VerticalAlign.MIDDLE, egret.HorizontalAlign.CENTER);
        this.test3(300, egret.VerticalAlign.TOP, egret.HorizontalAlign.LEFT);
        this.test2(400, egret.VerticalAlign.BOTTOM, egret.HorizontalAlign.RIGHT);
        this.test2(500, egret.VerticalAlign.MIDDLE, egret.HorizontalAlign.CENTER);
        this.test2(600, egret.VerticalAlign.TOP, egret.HorizontalAlign.LEFT);
    };
    p.test3 = function (y, valign, halign) {
        var input;
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
        input.addEventListener(egret.TextEvent.LINK, function (e) {
            console.log(e.type);
            console.log(e.text);
        }, this);
    };
    p.test2 = function (y, valign, halign) {
        var input;
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
        input.addEventListener(egret.TextEvent.LINK, function (e) {
            console.log(e.type);
            console.log(e.text);
        }, this);
    };
    return TextFieldHref2;
}(EntryDisplayObjectContainer));
egret.registerClass(TextFieldHref2,'TextFieldHref2');
