var ToggleButtonExample = (function (_super) {
    __extends(ToggleButtonExample, _super);
    function ToggleButtonExample() {
        _super.call(this);
        var exml = "<s:Group xmlns:s=\"http://ns.egret.com/eui\">\n                <s:ToggleButton x=\"100\" y=\"100\">\n                    <s:Skin states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\">\n                        <s:Image source=\"resource/examples/ToggleSwitch/toggle_switch_off.png\" includeIn=\"up,down\"/>\n                        <s:Image source=\"resource/examples/ToggleSwitch/toggle_switch_on.png\" includeIn=\"upAndSelected,downAndSelected\"/>\n                    </s:Skin>\n                </s:ToggleButton>\n            </s:Group>";
        var clazz = EXML.parse(exml);
        var button = new clazz();
        this.addChild(button);
    }
    var d = __define,c=ToggleButtonExample;p=c.prototype;
    return ToggleButtonExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ToggleButtonExample,"ToggleButtonExample");
