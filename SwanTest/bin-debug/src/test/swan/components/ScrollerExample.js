/**
 * @language en_US
 * The following example shows a List with a vertical scroll bar.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个垂直带滚动条的 List。
 */
var ScrollerExample = (function (_super) {
    __extends(ScrollerExample, _super);
    function ScrollerExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image width=\"200\" height=\"400\" source=\"resource/examples/selected.png\" scale\u0039Grid=\"1,1,4,4\"/>\n                <s:Scroller >\n                    <s:Skin>\n                        <s:HScrollBar id=\"horizontalScrollBar\" width=\"100%\" height=\"30\" bottom=\"0\">\n                            <s:Skin>\n                                <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale\u0039Grid=\"1,1,4,4\"/>\n                                <s:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/examples/thumb.png\"  scale\u0039Grid=\"1,1,4,4\"/>\n                            </s:Skin>\n                        </s:HScrollBar>\n                            <s:VScrollBar id=\"verticalScrollBar\" width=\"30\" height=\"100%\" right=\"0\">\n                            <s:Skin>\n                            <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale\u0039Grid=\"1,1,4,4\"/>\n                            <s:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/examples/thumb.png\"  scale\u0039Grid=\"1,1,4,4\"/>\n                        </s:Skin>\n                        </s:VScrollBar>\n                    </s:Skin>\n                    <s:List id=\"list\" width=\"200\" height=\"400\">\n                        <s:layout>\n                            <s:VerticalLayout gap=\"20\"/>\n                        </s:layout>\n                        <s:itemRenderer>\n                            <s:ItemRenderer states=\"up,down,disabled\" height=\"50\">\n                                <s:Label text=\"{data.label}\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                            </s:ItemRenderer>\n                        </s:itemRenderer>\n                        <s:ArrayCollection>\n                            <s:Array>\n                                <s:Object label=\"文字1\"/>\n                                <s:Object label=\"文字2\"/>\n                                <s:Object label=\"文字3\"/>\n                                <s:Object label=\"文字4\"/>\n                                <s:Object label=\"文字5\"/>\n                                <s:Object label=\"文字6\"/>\n                                <s:Object label=\"文字7\"/>\n                                <s:Object label=\"文字8\"/>\n                                <s:Object label=\"文字\u0039\"/>\n                                <s:Object label=\"文字10\"/>\n                            </s:Array>\n                        </s:ArrayCollection>\n                    </s:List>\n                </s:Scroller>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
    }
    var __egretProto__ = ScrollerExample.prototype;
    return ScrollerExample;
})(egret.DisplayObjectContainer);
ScrollerExample.prototype.__class__ = "ScrollerExample";
egret.registerClass(ScrollerExample,"ScrollerExample");
