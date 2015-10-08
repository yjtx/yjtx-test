/**
 * @language en_US
 * The following example uses the class ScrollPolicyExample to show the policy of the scroller
 */
/**
 * @language zh_CN
 * 以下示例使用 ScrollPolicyExample 类来控制滚动条的策略
 */
var ScrollPolicyExample = (function (_super) {
    __extends(ScrollPolicyExample, _super);
    function ScrollPolicyExample() {
        _super.call(this);
        var scrollerAuto = this.getScroller();
        scrollerAuto.scrollPolicyV = eui.ScrollPolicy.AUTO;
        scrollerAuto.height = 190;
        this.addChild(scrollerAuto);
        var txt1 = this.getTxt(eui.ScrollPolicy.AUTO);
        txt1.y = 400;
        this.addChild(txt1);
        var scrollerAuto2 = this.getScroller();
        scrollerAuto2.x = 120;
        scrollerAuto2.scrollPolicyV = eui.ScrollPolicy.AUTO;
        scrollerAuto2.height = 400;
        this.addChild(scrollerAuto2);
        var txt2 = this.getTxt(eui.ScrollPolicy.AUTO);
        txt2.x = 120;
        txt2.y = 400;
        this.addChild(txt2);
        var scrollerON = this.getScroller();
        scrollerON.scrollPolicyV = eui.ScrollPolicy.ON;
        scrollerON.x = 240;
        scrollerON.height = 400;
        this.addChild(scrollerON);
        var txt3 = this.getTxt(eui.ScrollPolicy.ON);
        txt3.x = 240;
        txt3.y = 400;
        this.addChild(txt3);
        var scrollerOFF = this.getScroller();
        scrollerOFF.scrollPolicyV = eui.ScrollPolicy.OFF;
        scrollerOFF.x = 360;
        scrollerOFF.height = 400;
        this.addChild(scrollerOFF);
        var txt4 = this.getTxt(eui.ScrollPolicy.OFF);
        txt4.x = 360;
        txt4.y = 400;
        this.addChild(txt4);
    }
    var d = __define,c=ScrollPolicyExample;p=c.prototype;
    p.getScroller = function () {
        var list = new eui.List();
        var arr = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ScrollPolicy;
        var scroller = new eui.Scroller();
        scroller.viewport = list;
        return scroller;
    };
    p.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    };
    return ScrollPolicyExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ScrollPolicyExample,"ScrollPolicyExample");
var IR_ScrollPolicy = (function (_super) {
    __extends(IR_ScrollPolicy, _super);
    function IR_ScrollPolicy() {
        _super.call(this);
        this.label = new eui.Label();
        this.addChild(this.label);
    }
    var d = __define,c=IR_ScrollPolicy;p=c.prototype;
    p.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_ScrollPolicy;
})(eui.ItemRenderer);
egret.registerClass(IR_ScrollPolicy,"IR_ScrollPolicy");
