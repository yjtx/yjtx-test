var ToggleSwitchExample = (function (_super) {
    __extends(ToggleSwitchExample, _super);
    function ToggleSwitchExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/swan\">\n                <s:ToggleButton x=\"100\" y=\"100\">\n                    <s:Skin states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\">\n                        <s:Image source=\"resource/examples/ToggleSwitch/toggle_switch_off.png\" includeIn=\"up,down\"/>\n                        <s:Image source=\"resource/examples/ToggleSwitch/toggle_switch_on.png\" includeIn=\"upAndSelected,downAndSelected\"/>\n                    </s:Skin>\n                </s:ToggleButton>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
    var __egretProto__ = ToggleSwitchExample.prototype;
    return ToggleSwitchExample;
})(egret.DisplayObjectContainer);
ToggleSwitchExample.prototype.__class__ = "ToggleSwitchExample";
egret.registerClass(ToggleSwitchExample,"ToggleSwitchExample");
