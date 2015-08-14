/**
 * @language en_US
 * The following example uses the class HorizontalLayoutExample to show
 * arranges the layout elements in a horizontal sequence,left to right
 */
/**
 * @language zh_CN
 * 以下示例使用 HorizontalLayoutExample 类来演示按水平顺序从左到右排列布局元素
 */
var HorizontalLayoutExample = (function (_super) {
    __extends(HorizontalLayoutExample, _super);
    function HorizontalLayoutExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = HorizontalLayoutExample.prototype;
    __egretProto__.init = function () {
        var group = new swan.Group();
        group.x = 20;
        group.y = 20;
        this.addChild(group);
        var layout = new swan.HorizontalLayout();
        layout.gap = 30;
        group.layout = layout;
        for (var i = 0; i < 3; i++) {
            var btn = this.getButton();
            group.addChild(btn);
        }
    };
    __egretProto__.getButton = function () {
        var exml = "<s:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Image source=\"resource/examples/button_up.png\" source.down=\"resource/examples/button_down.png\" scale\u0039Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <s:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new swan.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return HorizontalLayoutExample;
})(egret.Sprite);
HorizontalLayoutExample.prototype.__class__ = "HorizontalLayoutExample";
egret.registerClass(HorizontalLayoutExample,"HorizontalLayoutExample");
