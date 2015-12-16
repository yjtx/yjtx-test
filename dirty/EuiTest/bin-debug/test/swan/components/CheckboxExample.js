var CheckboxExample = (function (_super) {
    __extends(CheckboxExample, _super);
    function CheckboxExample() {
        _super.call(this);
        var checkboxSkin = "<s:Skin states=\"up,down,disabled,upAndSelected,downAndSelected,disabledAndSelected\" xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Group width=\"100%\" height=\"100%\">\n                    <s:layout>\n                        <s:HorizontalLayout verticalAlign=\"middle\"/>\n                    </s:layout>\n                    <s:Image fillMode=\"scale\" alpha=\"1\" alpha.disabled=\"0.5\" alpha.down=\"0.7\"\n                             source=\"resource/examples/CheckBox/checkbox_unselect.png\"\n                             source.upAndSelected=\"resource/examples/CheckBox/checkbox_select_up.png\"\n                             source.downAndSelected=\"resource/examples/CheckBox/checkbox_select_down.png\"\n                             source.disabledAndSelected=\"resource/examples/CheckBox/checkbox_select_disabled.png\"/>\n                    <s:Label id=\"labelDisplay\" size=\"20\" textColor=\"0x707070\"\n                             textAlign=\"center\" verticalAlign=\"middle\"\n                             fontFamily=\"Tahoma\"/>\n                </s:Group>\n            </s:Skin>";
        var checkbox = new eui.CheckBox();
        //组件可以接受：皮肤类定义,皮肤类名,皮肤实例,EXML文件内容,或外部EXML文件路径作为 skinName 的值
        //这里我们直接用 EXML 内容作为 skinName
        checkbox.skinName = checkboxSkin;
        checkbox.label = "CheckBox Example";
        checkbox.addEventListener(egret.Event.CHANGE, function (e) { return checkbox.label = checkbox.selected ? "Selected" : "Unselected"; }, this);
        checkbox.x = 50;
        checkbox.y = 50;
        this.addChild(checkbox);
    }
    var d = __define,c=CheckboxExample;p=c.prototype;
    return CheckboxExample;
})(eui.Group);
egret.registerClass(CheckboxExample,"CheckboxExample");
