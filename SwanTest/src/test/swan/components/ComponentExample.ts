/**
 * @language en_US
 * Usually swan.Component is used as a container for basic layout.
 */
/**
 * @language zh_CN
 * 通常 swan.Component 可以作为简单布局的容器。
 */
class ComponentExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var shape = new egret.Shape();
        shape.graphics.beginFill(0x666666, 1);
        shape.graphics.drawRect(0, 0, 400, 300);
        shape.graphics.endFill();
        this.addChild(shape);

        var exml =
            `<s:Skin xmlns:s="http://ns.egret.com/swan">
                <s:Label text="标题" horizontalCenter="0"/>
                <s:Label text="egret" right="0" bottom="0"/>
            </s:Skin>`;

        var component = new swan.Component();
        component.width = 400;
        component.height = 300;
        component.skinName = exml;
        this.addChild(component);
    }
}