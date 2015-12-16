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
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Image width=\"200\" height=\"400\" source=\"resource/examples/selected.png\" scale9Grid=\"1,1,4,4\"/>\n                <s:Scroller >\n                    <s:Skin>\n                        <s:HScrollBar id=\"horizontalScrollBar\" width=\"100%\" height=\"30\" bottom=\"0\">\n                            <s:Skin>\n                                <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale9Grid=\"1,1,4,4\"/>\n                                <s:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/examples/thumb.png\"  scale9Grid=\"1,1,4,4\"/>\n                            </s:Skin>\n                        </s:HScrollBar>\n                            <s:VScrollBar id=\"verticalScrollBar\" width=\"30\" height=\"100%\" right=\"0\">\n                            <s:Skin>\n                            <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale9Grid=\"1,1,4,4\"/>\n                            <s:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/examples/thumb.png\"  scale9Grid=\"1,1,4,4\"/>\n                        </s:Skin>\n                        </s:VScrollBar>\n                    </s:Skin>\n                    <s:List id=\"list\" width=\"200\" height=\"400\">\n                        <s:layout>\n                            <s:VerticalLayout gap=\"20\"/>\n                        </s:layout>\n                        <s:itemRenderer>\n                            <s:ItemRenderer states=\"up,down,disabled\" height=\"50\">\n                                <s:Label text=\"{data.label}\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                            </s:ItemRenderer>\n                        </s:itemRenderer>\n                        <s:ArrayCollection>\n                            <s:Array>\n                                <s:Object label=\"\u6587\u5B571\"/>\n                                <s:Object label=\"\u6587\u5B572\"/>\n                                <s:Object label=\"\u6587\u5B573\"/>\n                                <s:Object label=\"\u6587\u5B574\"/>\n                                <s:Object label=\"\u6587\u5B575\"/>\n                                <s:Object label=\"\u6587\u5B576\"/>\n                                <s:Object label=\"\u6587\u5B577\"/>\n                                <s:Object label=\"\u6587\u5B578\"/>\n                                <s:Object label=\"\u6587\u5B579\"/>\n                                <s:Object label=\"\u6587\u5B5710\"/>\n                            </s:Array>\n                        </s:ArrayCollection>\n                    </s:List>\n                </s:Scroller>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
    }
    var d = __define,c=ScrollerExample;p=c.prototype;
    return ScrollerExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ScrollerExample,"ScrollerExample");
