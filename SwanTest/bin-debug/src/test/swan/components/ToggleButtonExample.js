var ToggleButtonExample = (function (_super) {
    __extends(ToggleButtonExample, _super);
    function ToggleButtonExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/swan\">\n                <s:ToggleButton x=\"100\" y=\"100\">\n                    <s:Skin states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\">\n                        <s:Image source=\"resource/examples/ToggleSwitch/toggle_switch_off.png\" includeIn=\"up,down\"/>\n                        <s:Image source=\"resource/examples/ToggleSwitch/toggle_switch_on.png\" includeIn=\"upAndSelected,downAndSelected\"/>\n                    </s:Skin>\n                </s:ToggleButton>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var button = new clazz();
        this.addChild(button);
    }
    var __egretProto__ = ToggleButtonExample.prototype;
    return ToggleButtonExample;
})(egret.DisplayObjectContainer);
ToggleButtonExample.prototype.__class__ = "ToggleButtonExample";
egret.registerClass(ToggleButtonExample,"ToggleButtonExample");
