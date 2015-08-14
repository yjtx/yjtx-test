/**
 * @language en_US
 * The following example uses the class TileLayoutExample to show
 * arranges the layout elements in columns and rows
 */
/**
 * @language zh_CN
 * 以下示例使用 TileLayoutExample 类来演示单元格元素
 */
var TileLayoutExample = (function (_super) {
    __extends(TileLayoutExample, _super);
    function TileLayoutExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TileLayoutExample.prototype;
    __egretProto__.init = function () {
        var group = new swan.Group();
        this.addChild(group);
        var layout = new swan.TileLayout();
        layout.horizontalGap = 20;
        layout.verticalGap = 20;
        layout.requestedColumnCount = 3;
        group.layout = layout;
        for (var i = 0; i < 10; i++) {
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
    return TileLayoutExample;
})(egret.Sprite);
TileLayoutExample.prototype.__class__ = "TileLayoutExample";
egret.registerClass(TileLayoutExample,"TileLayoutExample");
