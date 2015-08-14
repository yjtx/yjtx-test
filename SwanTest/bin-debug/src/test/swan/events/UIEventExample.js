/**
 * @language en_US
 * The following example uses the class UIEventExample to show the ui component trigger the event
 */
/**
 * @language zh_CN
 * 以下示例使用 UIEventExample 类来演示UI组件触发事件
 */
var UIEventExample = (function (_super) {
    __extends(UIEventExample, _super);
    function UIEventExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = UIEventExample.prototype;
    __egretProto__.init = function () {
        var panel = this.getPanel();
        panel.x = 200;
        panel.addEventListener(swan.UIEvent.CREATION_COMPLETE, this.onUIEventHandler, this);
        panel.addEventListener(swan.UIEvent.CLOSING, this.onUIEventHandler, this);
        panel.addEventListener(swan.UIEvent.MOVE, this.onUIEventHandler, this);
        this.addChild(panel);
        var list = new swan.List();
        var arr = new swan.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        list.dataProvider = arr;
        list.itemRenderer = IR_UIEvents;
        var scroller = new swan.Scroller();
        scroller.viewport = list;
        scroller.height = 190;
        this.addChild(scroller);
        scroller.addEventListener(swan.UIEvent.CHANGE_START, this.onUIEventHandler, this);
        scroller.addEventListener(swan.UIEvent.CHANGE_END, this.onUIEventHandler, this);
    };
    __egretProto__.onUIEventHandler = function (e) {
        console.log("swan.UIEvent:", e.type);
    };
    __egretProto__.getPanel = function () {
        var exmlButton = "<s:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Image source=\"resource/examples/button_up.png\" source.down=\"resource/examples/button_down.png\" scale\u0039Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <s:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </s:Skin>";
        EXML.parse(exmlButton);
        var exml = "<s:Skin class=\"skins.PanelSkin\" xmlns:s=\"http://ns.egret.com/swan\" minWidth=\"450\" minHeight=\"25\">\n            <s:Image left=\"0\" right=\"0\" bottom=\"0\"  top=\"0\" source=\"resource/examples/border.png\" scale\u0039Grid=\"2,2,12,12\"/>\n            <s:Group id=\"moveArea\" left=\"0\" right=\"0\" top=\"1\" height=\"45\">\n                <s:Image left=\"0\" right=\"0\" bottom=\"0\"  top=\"0\" source=\"resource/examples/header.png\"/>\n                <s:Label id=\"titleDisplay\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" wordWrap=\"false\" left=\"15\" right=\"5\" verticalCenter=\"0\"/>\n            </s:Group>\n            <s:Group id=\"contentGroup\" width=\"100%\" height=\"200\" top=\"50\" bottom=\"30\"/>\n            <s:Button skinName = \"skins.ButtonSkin\" id=\"closeButton\" label=\"close\" bottom=\"5\" horizontalCenter=\"0\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exml);
        var panel = new swan.Panel();
        panel.skinName = "skins.PanelSkin";
        return panel;
    };
    return UIEventExample;
})(egret.DisplayObjectContainer);
UIEventExample.prototype.__class__ = "UIEventExample";
egret.registerClass(UIEventExample,"UIEventExample");
var IR_UIEvents = (function (_super) {
    __extends(IR_UIEvents, _super);
    function IR_UIEvents() {
        _super.call(this);
        this.label = new swan.Label();
        this.addChild(this.label);
    }
    var __egretProto__ = IR_UIEvents.prototype;
    __egretProto__.dataChanged = function () {
        this.label.text = "label:" + this.data.toString();
    };
    return IR_UIEvents;
})(swan.ItemRenderer);
IR_UIEvents.prototype.__class__ = "IR_UIEvents";
egret.registerClass(IR_UIEvents,"IR_UIEvents");
