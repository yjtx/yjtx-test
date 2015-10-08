var TabBarExample = (function (_super) {
    __extends(TabBarExample, _super);
    function TabBarExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/eui\">\n                <s:TabBar dataProvider=\"{viewStack}\">\n                    <s:layout>\n                        <s:HorizontalLayout gap=\"20\"/>\n                    </s:layout>\n                    <s:itemRenderer>\n                        <s:ItemRenderer states=\"up,down\" height=\"50\">\n                            <s:Label text=\"{data}\" textColor.down=\"0xFFFFFF\" textColor.up=\"0x666666\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                        </s:ItemRenderer>\n                    </s:itemRenderer>\n                </s:TabBar>\n                <s:ViewStack y=\"50\" id=\"viewStack\">\n                    <s:Group name=\"tab1\">\n                        <s:Label text=\"测试面板1\" x=\"50\" y=\"50\"/>\n                    </s:Group>\n                    <s:Group name=\"tab2\">\n                        <s:Label text=\"测试面板2\" x=\"50\" y=\"50\"/>\n                    </s:Group>\n                </s:ViewStack>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var d = __define,c=TabBarExample;p=c.prototype;
    return TabBarExample;
})(egret.DisplayObjectContainer);
egret.registerClass(TabBarExample,"TabBarExample");
