var EditablTextExample = (function (_super) {
    __extends(EditablTextExample, _super);
    function EditablTextExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/eui\">\n                <s:layout>\n                    <s:VerticalLayout gap=\"20\"/>\n                </s:layout>\n                <s:Group>\n                    <s:Label text=\"\u8D26\u6237\uFF1A\" size=\"16\" textColor=\"0xFFFFFF\"/>\n                    <s:EditableText x=\"60\" size=\"16\" text=\"\u8F93\u5165\u8D26\u6237\" textColor=\"0xAAAAFF\"/>\n                </s:Group>\n                <s:Group>\n                    <s:Label text=\"\u5BC6\u7801\uFF1A\" size=\"16\" textColor=\"0xFFFFFF\"/>\n                    <s:EditableText x=\"60\" text=\"\u8F93\u5165\u5BC6\u7801\" displayAsPassword=\"true\" size=\"16\" textColor=\"0xAAAAFF\"/>\n                </s:Group>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var d = __define,c=EditablTextExample;p=c.prototype;
    return EditablTextExample;
})(egret.DisplayObjectContainer);
egret.registerClass(EditablTextExample,"EditablTextExample");
