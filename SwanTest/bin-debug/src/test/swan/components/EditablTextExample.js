var EditablTextExample = (function (_super) {
    __extends(EditablTextExample, _super);
    function EditablTextExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/swan\">\n                <s:layout>\n                    <s:VerticalLayout gap=\"20\"/>\n                </s:layout>\n                <s:Group>\n                    <s:Label text=\"账户：\" size=\"16\" textColor=\"0xFFFFFF\"/>\n                    <s:EditableText x=\"60\" size=\"16\" text=\"输入账户\" textColor=\"0xAAAAFF\"/>\n                </s:Group>\n                <s:Group>\n                    <s:Label text=\"密码：\" size=\"16\" textColor=\"0xFFFFFF\"/>\n                    <s:EditableText x=\"60\" text=\"输入密码\" displayAsPassword=\"true\" size=\"16\" textColor=\"0xAAAAFF\"/>\n                </s:Group>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var __egretProto__ = EditablTextExample.prototype;
    return EditablTextExample;
})(egret.DisplayObjectContainer);
EditablTextExample.prototype.__class__ = "EditablTextExample";
egret.registerClass(EditablTextExample,"EditablTextExample");
