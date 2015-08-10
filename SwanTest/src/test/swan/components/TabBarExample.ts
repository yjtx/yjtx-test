class TabBarExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/swan">
                <s:TabBar dataProvider="{viewStack}">
                    <s:layout>
                        <s:HorizontalLayout gap="20"/>
                    </s:layout>
                    <s:itemRenderer>
                        <s:ItemRenderer states="up,down" height="50">
                            <s:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/>
                        </s:ItemRenderer>
                    </s:itemRenderer>
                </s:TabBar>
                <s:ViewStack y="50" id="viewStack">
                    <s:Group name="tab1">
                        <s:Label text="测试面板1" x="50" y="50"/>
                    </s:Group>
                    <s:Group name="tab2">
                        <s:Label text="测试面板2" x="50" y="50"/>
                    </s:Group>
                </s:ViewStack>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
}