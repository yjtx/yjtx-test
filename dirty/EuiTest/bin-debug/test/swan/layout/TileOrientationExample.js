/**
 * @language en_US
 * The following example uses the class TileOrientationExample to show
 *  the property orientation in TileLayout class
 */
/**
 * @language zh_CN
 * 以下示例使用 TileOrientationExample 类来演示 TileLayout 类的 orientation 可定义的值
 */
var TileOrientationExample = (function (_super) {
    __extends(TileOrientationExample, _super);
    function TileOrientationExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=TileOrientationExample;p=c.prototype;
    p.init = function () {
        var arrValues = [eui.TileOrientation.ROWS, eui.TileOrientation.COLUMNS];
        for (var i = 0, max = arrValues.length; i < max; i++) {
            var group = new eui.Group();
            group.width = 550;
            group.height = 180;
            group.y = i * 250;
            this.addChild(group);
            var layout = new eui.TileLayout();
            layout.orientation = arrValues[i];
            layout.requestedColumnCount = 3;
            layout.requestedRowCount = 3;
            group.layout = layout;
            var txt = this.getTxt(arrValues[i]);
            txt.x = 350;
            txt.y = i * 250;
            this.addChild(txt);
            for (var j = 0; j < 6; j++) {
                var btn = this.getButton();
                group.addChild(btn);
            }
        }
    };
    p.getTxt = function (value) {
        var txt = new egret.TextField;
        txt.size = 20;
        txt.textColor = 0xffffff;
        txt.text = value;
        return txt;
    };
    p.getButton = function () {
        var exml = "<s:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:s=\"http://ns.egret.com/eui\">\n            <s:Image source=\"resource/examples/button_up.png\" source.down=\"resource/examples/button_down.png\" scale9Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <s:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exml);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return TileOrientationExample;
})(egret.Sprite);
egret.registerClass(TileOrientationExample,"TileOrientationExample");
