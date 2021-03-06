class EditablTextExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:layout>
                    <s:VerticalLayout gap="20"/>
                </s:layout>
                <s:Group>
                    <s:Label text="账户：" size="16" textColor="0xFFFFFF"/>
                    <s:EditableText x="60" size="16" text="输入账户" textColor="0xAAAAFF"/>
                </s:Group>
                <s:Group>
                    <s:Label text="密码：" size="16" textColor="0xFFFFFF"/>
                    <s:EditableText x="60" text="输入密码" displayAsPassword="true" size="16" textColor="0xAAAAFF"/>
                </s:Group>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var group:eui.Group = new clazz();
        this.addChild(group);

    }
}