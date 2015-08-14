/**
 * @language en_US
 * The following example uses the class ColumnAlignExample to show
 *  the property columnAlign in TileLayout class
 */
/**
 * @language zh_CN
 * 以下示例使用 ColumnAlignExample 类来演示 TileLayout 类的 columnAlign 可定义的值
 */
var ColumnAlignExample = (function (_super) {
    __extends(ColumnAlignExample, _super);
    function ColumnAlignExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = ColumnAlignExample.prototype;
    __egretProto__.init = function () {
        var arrAlign = [swan.ColumnAlign.LEFT, swan.ColumnAlign.JUSTIFY_USING_GAP, swan.ColumnAlign.JUSTIFY_USING_WIDTH];
        for (var i = 0, max = arrAlign.length; i < max; i++) {
            var group = new swan.Group();
            group.width = 500;
            group.y = i * 120;
            this.addChild(group);
            var layout = new swan.TileLayout();
            layout.columnAlign = arrAlign[i];
            group.layout = layout;
            var txt = this.getTxt(arrAlign[i]);
            txt.x = 500;
            txt.y = i * 120;
            this.addChild(txt);
            for (var j = 0; j < 4; j++) {
                var btn = this.getButton();
                group.addChild(btn);
            }
        }
    };
    __egretProto__.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.text = value;
        txt.textColor = 0xffffff;
        return txt;
    };
    __egretProto__.getButton = function () {
        var exml = "<s:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:s=\"http://ns.egret.com/swan\">\n            <s:Image source=\"resource/examples/button_up.png\" source.down=\"resource/examples/button_down.png\" scale\u0039Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <s:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new swan.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return ColumnAlignExample;
})(egret.Sprite);
ColumnAlignExample.prototype.__class__ = "ColumnAlignExample";
egret.registerClass(ColumnAlignExample,"ColumnAlignExample");
