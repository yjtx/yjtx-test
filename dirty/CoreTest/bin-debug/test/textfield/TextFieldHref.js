/**
 * Created by yjtx on 15-6-23.
 */
var TextFieldHref = (function (_super) {
    __extends(TextFieldHref, _super);
    function TextFieldHref() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=TextFieldHref;p=c.prototype;
    p.init = function () {
        this.testFlow();
    };
    p.testFlow = function () {
        var input;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('是\n否\n花费 钻石<font color="0x0000ff" size="40"><a href="event:dfdf  d  fd">2dfdfdf0</a></font>抢购\n<font color="0xffff00">封测\n登录大礼包</font>？');
        input.size = 30;
        input.height = 140;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(input);
        input.touchEnabled = true;
        input.addEventListener(egret.TextEvent.LINK, function (e) {
            console.log(e.type);
            console.log(e.text);
        }, this);
        var input;
        input = new egret.TextField();
        input.textFlow = new egret.HtmlTextParser().parser('是\n否\n花费 钻石<font color="0x0000ff" size="40"><a href="http://www.baidu.com">2dfdfdf0</a></font>抢购\n<font color="0xffff00">封测\n登录大礼包</font>？');
        input.size = 30;
        input.height = 140;
        input.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(input);
        input.touchEnabled = true;
        input.y = 200;
    };
    return TextFieldHref;
})(egret.DisplayObjectContainer);
egret.registerClass(TextFieldHref,"TextFieldHref");
