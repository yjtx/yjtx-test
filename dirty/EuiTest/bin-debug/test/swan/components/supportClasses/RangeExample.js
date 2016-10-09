/**
 * @language en_US
 * The following example shows how to extend eui.Range to a instrumentation style Component
 */
/**
 * @language zh_CN
 * 下面的例子显示了如何实现一个仪表效果的 eui.Range 组件
 */
var RangeViewer = (function (_super) {
    __extends(RangeViewer, _super);
    function RangeViewer() {
        _super.call(this);
        this.skinName =
            "<s:Skin class=\"skins.RangeViewerSkin\" minWidth=\"30\" minHeight=\"18\" xmlns:s=\"http://ns.egret.com/eui\">\n\t        <s:Image x=\"0\" y=\"0\" source=\"resource/examples/range-background.png\"/>\n\t        <s:Image id=\"pointer\" x=\"60\" y=\"60\" source=\"resource/examples/pointer.png\"/>\n        </s:Skin>";
    }
    var d = __define,c=RangeViewer,p=c.prototype;
    p.updateSkinDisplayList = function () {
        var range = this.maximum - this.minimum;
        var rate = (this.value - this.minimum) / range;
        var angle = -150 + rate * 120;
        this.pointer.rotation = angle;
    };
    return RangeViewer;
}(eui.Range));
egret.registerClass(RangeViewer,'RangeViewer');
var RangeExample = (function (_super) {
    __extends(RangeExample, _super);
    function RangeExample() {
        _super.call(this);
        var rangeViewer = new RangeViewer();
        rangeViewer.minimum = 0;
        rangeViewer.maximum = 120;
        rangeViewer.x = 50;
        rangeViewer.y = 50;
        var timer = new egret.Timer(1000);
        timer.addEventListener(egret.TimerEvent.TIMER, function (e) { return rangeViewer.value = Math.random() * 120; }, this);
        timer.start();
        this.addChild(rangeViewer);
    }
    var d = __define,c=RangeExample,p=c.prototype;
    return RangeExample;
}(eui.Group));
egret.registerClass(RangeExample,'RangeExample');
