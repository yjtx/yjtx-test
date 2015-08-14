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
        scrollerAuto.scrollPolicyV = swan.ScrollPolicy.AUTO;
        scrollerAuto.height = 190;
        this.addChild(scrollerAuto);
        var txt1 = this.getTxt(swan.ScrollPolicy.AUTO);
        txt1.y = 400;
        this.addChild(txt1);
        var scrollerAuto2 = this.getScroller();
        scrollerAuto2.x = 120;
        scrollerAuto2.scrollPolicyV = swan.ScrollPolicy.AUTO;
        scrollerAuto2.height = 400;
        this.addChild(scrollerAuto2);
        var txt2 = this.getTxt(swan.ScrollPolicy.AUTO);
        txt2.x = 120;
        txt2.y = 400;
        this.addChild(txt2);
        var scrollerON = this.getScroller();
        scrollerON.scrollPolicyV = swan.ScrollPolicy.ON;
        scrollerON.x = 240;
        scrollerON.height = 400;
        this.addChild(scrollerON);
        var txt3 = this.getTxt(swan.ScrollPolicy.ON);
        txt3.x = 240;
        txt3.y = 400;
        this.addChild(txt3);
        var scrollerOFF = this.getScroller();
        scrollerOFF.scrollPolicyV = swan.ScrollPolicy.OFF;
        scrollerOFF.x = 360;
        scrollerOFF.height = 400;
        this.addChild(scrollerOFF);
        var txt4 = this.getTxt(swan.ScrollPolicy.OFF);
        txt4.x = 360;
        txt4.y = 400;
        this.addChild(txt4);
    }
    var __egretProto__ = ScrollPolicyExample.prototype;
    __egretProto__.getScroller = function () {
        var list = new swan.List();
        var arr = new swan.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_ScrollPolicy;
        var scroller = new swan.Scroller();
        scroller.viewport = list;
        return scroller;
    };
    __egretProto__.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    };
    return ScrollPolicyExample;
})(egret.DisplayObjectContainer);
ScrollPolicyExample.prototype.__class__ = "ScrollPolicyExample";
egret.registerClass(ScrollPolicyExample,"ScrollPolicyExample");
var IR_ScrollPolicy = (function (_super) {
    __extends(IR_ScrollPolicy, _super);
    function IR_ScrollPolicy() {
        _super.call(this);
        this.label = new swan.Label();
        this.addChild(this.label);
    }
    var __egretProto__ = IR_ScrollPolicy.prototype;
    __egretProto__.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_ScrollPolicy;
})(swan.ItemRenderer);
IR_ScrollPolicy.prototype.__class__ = "IR_ScrollPolicy";
egret.registerClass(IR_ScrollPolicy,"IR_ScrollPolicy");
