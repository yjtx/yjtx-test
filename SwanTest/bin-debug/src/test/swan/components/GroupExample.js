/**
 * @language en_US
 * The following example shows the general use of a Group.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 Group 的常规用法。
 */
var GroupExample = (function (_super) {
    __extends(GroupExample, _super);
    function GroupExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/swan\">\n                <s:layout>\n                 <s:HorizontalLayout gap=\"20\"/>\n                </s:layout>\n                <s:Group>\n                    <s:layout>\n                        <s:VerticalLayout gap=\"20\"/>\n                    </s:layout>\n                    <s:Label text=\"北京\" textColor=\"0xFFFFFF\"/>\n                    <s:Label text=\"晴天\" textColor=\"0xFFFFCC\"/>\n                    <s:Image source=\"resource/examples/sunny.png\"/>\n                </s:Group>\n                <s:Group>\n                    <s:layout>\n                        <s:VerticalLayout gap=\"20\"/>\n                    </s:layout>\n                    <s:Label text=\"上海\" textColor=\"0xFFFFFF\"/>\n                    <s:Label text=\"多云\" textColor=\"0xFFFFCC\"/>\n                    <s:Image source=\"resource/examples/cloudy.png\"/>\n                </s:Group>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var __egretProto__ = GroupExample.prototype;
    return GroupExample;
})(egret.DisplayObjectContainer);
GroupExample.prototype.__class__ = "GroupExample";
egret.registerClass(GroupExample,"GroupExample");
