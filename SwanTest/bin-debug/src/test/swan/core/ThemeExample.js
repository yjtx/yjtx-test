/**
 * @language en_US
 * The following example uses the class ThemeExample to show the skin theme
 */
/**
 * @language zh_CN
 * 以下示例使用 ThemeExample 类来显示皮肤主题
 */
var ThemeExample = (function (_super) {
    __extends(ThemeExample, _super);
    function ThemeExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = ThemeExample.prototype;
    __egretProto__.init = function () {
        var theme = new swan.Theme("resource/examples/green-theme.json", this.stage);
        this.progress = new swan.ProgressBar();
        this.progress.x = 30;
        this.progress.y = 30;
        this.progress.width = 200;
        this.addChild(this.progress);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEF, this);
    };
    __egretProto__.onEF = function () {
        this.progress.value += 1;
        if (this.progress.value >= 100)
            this.progress.value = 0;
    };
    return ThemeExample;
})(egret.DisplayObjectContainer);
ThemeExample.prototype.__class__ = "ThemeExample";
egret.registerClass(ThemeExample,"ThemeExample");
