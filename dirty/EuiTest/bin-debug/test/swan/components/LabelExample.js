/**
 * @language en_US
 * The following example shows some of the tags, as well as the relative positioning.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一些标签，以及相对定位。
 */
var LabelExample = (function (_super) {
    __extends(LabelExample, _super);
    function LabelExample() {
        _super.call(this);
        var exml = "<s:Group width=\"600\" height=\"400\" xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Label text=\"\u5DE6\u4E0A\u89D2\" left=\"0\" top=\"0\" textColor=\"0xFFFFFF\"/>\n                <s:Label text=\"\u53F3\u4E0A\u89D2\" right=\"0\" top=\"0\" textColor=\"0xFFFFFF\"/>\n                <s:Label text=\"\u5DE6\u4E0B\u89D2\" left=\"0\" bottom=\"0\" textColor=\"0xFFFFFF\"/>\n                <s:Label text=\"\u53F3\u4E0B\u89D2\" right=\"0\" bottom=\"0\" textColor=\"0xFFFFFF\"/>\n                <s:Label text=\"\u5C45\u4E2D\" horizontalCenter=\"0\" verticalCenter=\"0\" textColor=\"0xFFFFFF\"/>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var d = __define,c=LabelExample;p=c.prototype;
    return LabelExample;
})(egret.DisplayObjectContainer);
egret.registerClass(LabelExample,"LabelExample");
