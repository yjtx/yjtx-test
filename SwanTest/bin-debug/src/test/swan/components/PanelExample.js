/**
 * @language en_US
 * The exmaple follow shows a panel.
 */
/**
 * @language zh_CN
 * 下面的例子演示了一个面板。
 */
var PanelExample = (function (_super) {
    __extends(PanelExample, _super);
    function PanelExample() {
        _super.call(this);
        var exml = "<s:Panel title=\"title panel\" xmlns:s=\"http://ns.egret.com/swan\">\n                    <s:Skin>\n                        <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/track.png\" scale\u0039Grid=\"1,1,4,4\"/>\n                        <s:Group id=\"moveArea\" width=\"100%\" height=\"40\">\n                            <s:Image width=\"100%\" height=\"100%\" source=\"resource/examples/thumb.png\" scale\u0039Grid=\"1,1,4,4\"/>\n                            <s:Label id=\"titleDisplay\" text=\"标题\" textColor=\"0\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </s:Group>\n                        <s:Button id=\"closeButton\" right=\"-15\" y=\"-15\">\n                            <s:Skin states=\"up,down,disabled\">\n                                <s:Image width=\"50\" height=\"50\" source=\"resource/examples/close.png\" scaleX.up=\"1\" scaleX.down=\"0.\u00395\" scaleY.up=\"1\" scaleY.down=\"0.\u00395\"/>\n                            </s:Skin>\n                        </s:Button>\n                    </s:Skin>\n                </s:Panel>";
        var clazz = EXML.parse(exml);
        var panel = new clazz();
        panel.width = 600;
        panel.height = 400;
        this.addChild(panel);
    }
    var __egretProto__ = PanelExample.prototype;
    return PanelExample;
})(egret.DisplayObjectContainer);
PanelExample.prototype.__class__ = "PanelExample";
egret.registerClass(PanelExample,"PanelExample");
