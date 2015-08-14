/**
 * @language en_US
 * The following example uses the class PropertyEventExample to show represents the event object
 * passed to the event listener when one of the properties of
 * an object has changed, and provides information about the change.
 */
/**
 * @language zh_CN
 * 以下示例使用 PropertyEventExample 类来演示对象的一个属性发生更改时传递到事件侦听器的事件
 */
var PropertyEventExample = (function (_super) {
    __extends(PropertyEventExample, _super);
    function PropertyEventExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = PropertyEventExample.prototype;
    __egretProto__.init = function () {
        this.group = new swan.Group();
        this.group.addEventListener(swan.PropertyEvent.PROPERTY_CHANGE, this.onChangeHandler, this);
        this.addChild(this.group);
        var layout = new swan.TileLayout();
        layout.horizontalGap = 20;
        layout.verticalGap = 20;
        layout.requestedColumnCount = 3;
        this.group.layout = layout;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchHandler, this);
    };
    __egretProto__.onTouchHandler = function () {
        var btn = this.getButton();
        this.group.addChild(btn);
    };
    __egretProto__.onChangeHandler = function (e) {
        console.log(e.type);
    };
    __egretProto__.getButton = function () {
        var exml = "<s:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Image source=\"resource/examples/button_up.png\" source.down=\"resource/examples/button_down.png\" scale\u0039Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <s:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new swan.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return PropertyEventExample;
})(egret.DisplayObjectContainer);
PropertyEventExample.prototype.__class__ = "PropertyEventExample";
egret.registerClass(PropertyEventExample,"PropertyEventExample");
