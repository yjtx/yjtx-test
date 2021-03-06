/**
 * @language en_US
 * The following example uses the class BasicLayoutExample to show the absolute layout
 */
/**
 * @language zh_CN
 * 以下示例使用 BasicLayoutExample 类来演示绝对布局
 */
var BasicLayoutExample = (function (_super) {
    __extends(BasicLayoutExample, _super);
    function BasicLayoutExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=BasicLayoutExample;p=c.prototype;
    p.init = function () {
        var group = new eui.Group();
        this.addChild(group);
        var layout = new eui.BasicLayout();
        group.layout = layout;
        var btn1 = this.getButton();
        group.addChild(btn1);
        var btn2 = this.getButton();
        btn2.x = 110;
        btn2.y = 50;
        group.addChild(btn2);
        var btn3 = this.getButton();
        btn3.x = 250;
        btn3.y = 20;
        group.addChild(btn3);
    };
    p.getButton = function () {
        var exmlButton = "<s:Skin class=\"skins.ButtonSkin\" states=\"up,down,disabled\" minHeight=\"50\" minWidth=\"100\" xmlns:s=\"http://ns.egret.com/eui\">\n            <s:Image source=\"resource/examples/button_up.png\" source.down=\"resource/examples/button_down.png\" scale9Grid=\"1,3,8,8\" width=\"100%\" height=\"100%\"/>\n            <s:Label id=\"labelDisplay\" top=\"8\" bottom=\"8\" left=\"8\" right=\"8\" size=\"20\" fontFamily=\"Tahoma\" textColor=\"0xFFFFFF\" verticalAlign=\"middle\" textAlign=\"center\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exmlButton);
        var btn = new eui.Button();
        btn.skinName = "skins.ButtonSkin";
        return btn;
    };
    return BasicLayoutExample;
})(egret.Sprite);
egret.registerClass(BasicLayoutExample,"BasicLayoutExample");
