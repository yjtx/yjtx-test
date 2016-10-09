/**
 * Created by yjtx on 15-11-12.
 */
var PanelWithButton = (function (_super) {
    __extends(PanelWithButton, _super);
    function PanelWithButton() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=PanelWithButton,p=c.prototype;
    p.initRoot = function () {
        var panel = new eui.Panel();
        panel.skin;
        panel.title = "标题";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
        var btn = new eui.Button();
        panel.closeButton = btn;
        btn.label = "关闭";
        panel.addChild(btn);
        btn.x = 300;
        // var panel = new eui.Panel();
        // panel.title = "标题";
        // panel.horizontalCenter = 0;
        // panel.verticalCenter = 0;
        // this.addChild(panel);
        // panel.closeButton.label="关闭";
    };
    return PanelWithButton;
}(EntryEuiDocument));
egret.registerClass(PanelWithButton,'PanelWithButton');
