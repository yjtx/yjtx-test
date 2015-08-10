/**
 * @language en_US
 * The following example shows the general use of a ItemRenderer.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 ItemRenderer 的常规用法。
 */
class ItemRendererExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var exml =
            `<s:DataGroup class="Example.DataGroup" xmlns:s="http://ns.egret.com/swan" x="300" y="50">
                <s:layout>
                    <s:VerticalLayout gap="20"/>
                </s:layout>
                    <s:itemRenderer>
                        <s:ItemRenderer>
                            <s:Label text="{data.label}" textColor="{data.color}"/>
                        </s:ItemRenderer>
                    </s:itemRenderer>
                <s:ArrayCollection>
                    <s:Array>
                        <s:Object label="a" color="0xcc9999"/>
                        <s:Object label="b" color="0xff9966"/>
                        <s:Object label="c" color="0xcc3333"/>
                        <s:Object label="d" color="0xff6666"/>
                    </s:Array>
                </s:ArrayCollection>
            </s:DataGroup>`;

        var clazz = EXML.parse(exml);
        var dataGroup:swan.DataGroup = new clazz();
        this.addChild(dataGroup);
    }
}