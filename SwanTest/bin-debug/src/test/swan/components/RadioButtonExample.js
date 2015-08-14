var RadioButtonExample = (function (_super) {
    __extends(RadioButtonExample, _super);
    function RadioButtonExample() {
        _super.call(this);
        var skinExml = "<s:Skin class=\"skins.RadioButtonSkin\" states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\" xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image includeIn=\"disabledAndSelected\" source=\"resource/examples/RadioButton/radiobutton_select_disabled.png\"/>\n                <s:Image includeIn=\"downAndSelected\" source=\"resource/examples/RadioButton/radiobutton_select_down.png\"/>\n                <s:Image includeIn=\"upAndSelected\" source=\"resource/examples/RadioButton/radiobutton_select_up.png\"/>\n                <s:Image includeIn=\"up,down,disabled\" source=\"resource/examples/RadioButton/radiobutton_unselect.png\"/>\n                <s:Label x=\"38\" id=\"labelDisplay\" textColor=\"0xffffff\" size=\"18\"/>\n            </s:Skin>";
        EXML.parse(skinExml);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/swan\">\n                <s:layout>\n                    <s:VerticalLayout gap=\"20\"/>\n                </s:layout>\n                <s:RadioButton label=\"A. This is a radioButton.\" skinName=\"skins.RadioButtonSkin\"/>\n                <s:RadioButton label=\"B. This is a progressBar.\" skinName=\"skins.RadioButtonSkin\"/>\n                <s:RadioButton label=\"C. This is a textField.\" skinName=\"skins.RadioButtonSkin\"/>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
        group.x = 50;
        group.y = 50;
    }
    var __egretProto__ = RadioButtonExample.prototype;
    return RadioButtonExample;
})(egret.DisplayObjectContainer);
RadioButtonExample.prototype.__class__ = "RadioButtonExample";
egret.registerClass(RadioButtonExample,"RadioButtonExample");
