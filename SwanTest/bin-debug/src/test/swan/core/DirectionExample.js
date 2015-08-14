/**
 * @language en_US
 * The following example uses the class DirectionExample to control the progressbar’s move direction
 */
/**
 * @language zh_CN
 * 以下示例使用 DirectionExample 类来控制进度条增长方向
 */
var DirectionExample = (function (_super) {
    __extends(DirectionExample, _super);
    function DirectionExample() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = DirectionExample.prototype;
    __egretProto__.init = function () {
        this.progress_LTR = this.getProgressBar();
        this.progress_LTR.direction = swan.Direction.LTR;
        this.progress_LTR.width = 200;
        this.addChild(this.progress_LTR);
        this.progress_RTL = this.getProgressBar();
        this.progress_RTL.y = 50;
        this.progress_RTL.direction = swan.Direction.RTL;
        this.progress_RTL.width = 200;
        this.addChild(this.progress_RTL);
        this.progress_TTB = this.getProgressBar();
        this.progress_TTB.width = 60;
        this.progress_TTB.y = 100;
        this.progress_TTB.direction = swan.Direction.TTB;
        this.progress_TTB.height = 200;
        this.addChild(this.progress_TTB);
        this.progress_BTT = this.getProgressBar();
        this.progress_BTT.width = 60;
        this.progress_BTT.x = 100;
        this.progress_BTT.y = 100;
        this.progress_BTT.direction = swan.Direction.BTT;
        this.progress_BTT.height = 200;
        this.addChild(this.progress_BTT);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEF, this);
    };
    __egretProto__.onEF = function () {
        this.progress_LTR.value += 1;
        if (this.progress_LTR.value >= 100)
            this.progress_LTR.value = 0;
        this.progress_RTL.value += 1;
        if (this.progress_RTL.value >= 100)
            this.progress_RTL.value = 0;
        this.progress_TTB.value += 1;
        if (this.progress_TTB.value >= 100)
            this.progress_TTB.value = 0;
        this.progress_BTT.value += 1;
        if (this.progress_BTT.value >= 100)
            this.progress_BTT.value = 0;
        //this.getProgressBar();
    };
    __egretProto__.getProgressBar = function () {
        var exml = "<s:Skin class=\"skins.ProgressBarSkin\" xmlns:s=\"http://ns.egret.com/swan\" minWidth=\"30\" minHeight=\"18\">\n            <s:Image source=\"resource/examples/track.png\" scale\u0039Grid=\"1,1,4,4\" width=\"100%\" height=\"100%\" verticalCenter=\"0\"/>\n            <s:Image id=\"thumb\" height=\"100%\" width=\"100%\" source=\"resource/examples/thumb.png\"/>\n            <s:Label id=\"labelDisplay\" textAlign=\"center\" verticalAlign=\"middle\" size=\"15\" fontFamily=\"Tahoma\" textColor=\"0x707070\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n        </s:Skin>";
        var clazz = EXML.parse(exml);
        var bar = new swan.ProgressBar();
        bar.skinName = "skins.ProgressBarSkin";
        return bar;
    };
    return DirectionExample;
})(egret.DisplayObjectContainer);
DirectionExample.prototype.__class__ = "DirectionExample";
egret.registerClass(DirectionExample,"DirectionExample");
