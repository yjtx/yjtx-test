class ToggleSwitchExample extends egret.DisplayObjectContainer{
    public constructor() {
        super();

        var exml =
            `<s:Group xmlns:s="http://ns.egret.com/eui">
                <s:ToggleButton x="100" y="100">
                    <s:Skin states="up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected">
                        <s:Image source="resource/examples/ToggleSwitch/toggle_switch_off.png" includeIn="up,down"/>
                        <s:Image source="resource/examples/ToggleSwitch/toggle_switch_on.png" includeIn="upAndSelected,downAndSelected"/>
                    </s:Skin>
                </s:ToggleButton>
            </s:Group>`;

        var clazz = EXML.parse(exml);
        var group = new clazz();
        this.addChild(group);
    }
}