/**
 * @language en_US
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个垂直带滚动条的 List。
 */
var VScrollBarExample = (function (_super) {
    __extends(VScrollBarExample, _super);
    function VScrollBarExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Image width=\"200\" height=\"400\" source=\"resource/examples/selected.png\" scale9Grid=\"1,1,4,4\"/>\n                <s:Scroller >\n                    <s:Skin>\n                        <s:HScrollBar id=\"horizontalScrollBar\" width=\"100%\" height=\"30\" bottom=\"0\">\n                            <s:Skin>\n                                <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale9Grid=\"1,1,4,4\"/>\n                                <s:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/examples/thumb.png\"  scale9Grid=\"1,1,4,4\"/>\n                            </s:Skin>\n                        </s:HScrollBar>\n                        <s:VScrollBar id=\"verticalScrollBar\" width=\"30\" height=\"100%\" right=\"0\">\n                            <s:Skin>\n                                <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale9Grid=\"1,1,4,4\"/>\n                                <s:Image id=\"thumb\" width=\"30\" height=\"30\" source=\"resource/examples/thumb.png\"  scale9Grid=\"1,1,4,4\"/>\n                            </s:Skin>\n                        </s:VScrollBar>\n                    </s:Skin>\n                        <s:List id=\"list\" width=\"200\" height=\"400\">\n                            <s:layout>\n                                <s:VerticalLayout gap=\"20\"/>\n                            </s:layout>\n                            <s:itemRenderer>\n                                <s:ItemRenderer states=\"up,down,disabled\" height=\"50\">\n                                    <s:Label text=\"{data.label}\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                                </s:ItemRenderer>\n                            </s:itemRenderer>\n                            <s:ArrayCollection>\n                                <s:Array>\n                                    <s:Object label=\"\u9879\u76EE1\"/>\n                                    <s:Object label=\"\u9879\u76EE2\"/>\n                                    <s:Object label=\"\u9879\u76EE3\"/>\n                                    <s:Object label=\"\u9879\u76EE4\"/>\n                                    <s:Object label=\"\u9879\u76EE5\"/>\n                                    <s:Object label=\"\u9879\u76EE6\"/>\n                                    <s:Object label=\"\u9879\u76EE7\"/>\n                                    <s:Object label=\"\u9879\u76EE8\"/>\n                                    <s:Object label=\"\u9879\u76EE9\"/>\n                                    <s:Object label=\"\u9879\u76EE10\"/>\n                                    <s:Object label=\"\u9879\u76EE11\"/>\n                                    <s:Object label=\"\u9879\u76EE12\"/>\n                                    <s:Object label=\"\u9879\u76EE13\"/>\n                                    <s:Object label=\"\u9879\u76EE14\"/>\n                                    <s:Object label=\"\u9879\u76EE15\"/>\n                                    <s:Object label=\"\u9879\u76EE16\"/>\n                                </s:Array>\n                            </s:ArrayCollection>\n                        </s:List>\n                </s:Scroller>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var scroller = new clazz();
        this.addChild(scroller);
    }
    var d = __define,c=VScrollBarExample;p=c.prototype;
    return VScrollBarExample;
})(egret.DisplayObjectContainer);
egret.registerClass(VScrollBarExample,"VScrollBarExample");
