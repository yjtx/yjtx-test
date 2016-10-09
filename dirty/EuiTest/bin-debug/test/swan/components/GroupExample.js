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
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/eui\">\n                <s:layout>\n                 <s:HorizontalLayout gap=\"20\"/>\n                </s:layout>\n                <s:Group>\n                    <s:layout>\n                        <s:VerticalLayout gap=\"20\"/>\n                    </s:layout>\n                    <s:Label text=\"\u5317\u4EAC\" textColor=\"0xFFFFFF\"/>\n                    <s:Label text=\"\u6674\u5929\" textColor=\"0xFFFFCC\"/>\n                    <s:Image source=\"resource/examples/sunny.png\"/>\n                </s:Group>\n                <s:Group>\n                    <s:layout>\n                        <s:VerticalLayout gap=\"20\"/>\n                    </s:layout>\n                    <s:Label text=\"\u4E0A\u6D77\" textColor=\"0xFFFFFF\"/>\n                    <s:Label text=\"\u591A\u4E91\" textColor=\"0xFFFFCC\"/>\n                    <s:Image source=\"resource/examples/cloudy.png\"/>\n                </s:Group>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var d = __define,c=GroupExample,p=c.prototype;
    return GroupExample;
}(egret.DisplayObjectContainer));
egret.registerClass(GroupExample,'GroupExample');
