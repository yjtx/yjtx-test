/**
 * @language en_US
 * The following example shows the general use of a ItemRenderer.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 ItemRenderer 的常规用法。
 */
var ItemRendererExample = (function (_super) {
    __extends(ItemRendererExample, _super);
    function ItemRendererExample() {
        _super.call(this);
        var exml = "<s:DataGroup class=\"Example.DataGroup\" xmlns:s=\"http://ns.egret.com/eui\" x=\"300\" y=\"50\">\n                <s:layout>\n                    <s:VerticalLayout gap=\"20\"/>\n                </s:layout>\n                    <s:itemRenderer>\n                        <s:ItemRenderer>\n                            <s:Label text=\"{data.label}\" textColor=\"{data.color}\"/>\n                        </s:ItemRenderer>\n                    </s:itemRenderer>\n                <s:ArrayCollection>\n                    <s:Array>\n                        <s:Object label=\"a\" color=\"0xcc9999\"/>\n                        <s:Object label=\"b\" color=\"0xff9966\"/>\n                        <s:Object label=\"c\" color=\"0xcc3333\"/>\n                        <s:Object label=\"d\" color=\"0xff6666\"/>\n                    </s:Array>\n                </s:ArrayCollection>\n            </s:DataGroup>";
        var clazz = EXML.parse(exml);
        var dataGroup = new clazz();
        this.addChild(dataGroup);
    }
    var d = __define,c=ItemRendererExample;p=c.prototype;
    return ItemRendererExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ItemRendererExample,"ItemRendererExample");
