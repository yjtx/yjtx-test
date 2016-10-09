/**
 * @language en_US
 * Usually eui.Component is used as a container for basic layout.
 */
/**
 * @language zh_CN
 * 通常 eui.Component 可以作为简单布局的容器。
 */
var ComponentExample = (function (_super) {
    __extends(ComponentExample, _super);
    function ComponentExample() {
        _super.call(this);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x666666, 1);
        shape.graphics.drawRect(0, 0, 400, 300);
        shape.graphics.endFill();
        this.addChild(shape);
        var exml = "<s:Skin xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Label text=\"\u6807\u9898\" horizontalCenter=\"0\"/>\n                <s:Label text=\"egret\" right=\"0\" bottom=\"0\"/>\n            </s:Skin>";
        var component = new eui.Component();
        component.width = 400;
        component.height = 300;
        component.skinName = exml;
        this.addChild(component);
    }
    var d = __define,c=ComponentExample,p=c.prototype;
    return ComponentExample;
}(egret.DisplayObjectContainer));
egret.registerClass(ComponentExample,'ComponentExample');
