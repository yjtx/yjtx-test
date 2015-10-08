var ProgressBarExample = (function (_super) {
    __extends(ProgressBarExample, _super);
    function ProgressBarExample() {
        _super.call(this);
        var exml = "<s:ProgressBar xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Skin>\n                    <s:Image id=\"thumb\" width=\"100%\" height=\"100%\" source=\"resource/examples/thumb.png\" scale9Grid=\"1,1,4,4\"/>\n                    <s:Label id=\"labelDisplay\" textColor=\"0xffffff\" horizontalCenter=\"0\" verticalCenter=\"0\"/>\n                </s:Skin>\n            </s:ProgressBar>";
        var clazz = EXML.parse(exml);
        var progressBar = new clazz();
        progressBar.width = 500;
        progressBar.height = 40;
        progressBar.minimum = 0;
        progressBar.maximum = 100;
        this.addChild(progressBar);
        var add = 1;
        this.addEventListener(egret.Event.ENTER_FRAME, function (e) {
            progressBar.value += add;
            if (progressBar.value >= progressBar.maximum || progressBar.value <= progressBar.minimum) {
                add = -add;
            }
        }, null);
    }
    var d = __define,c=ProgressBarExample;p=c.prototype;
    return ProgressBarExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ProgressBarExample,"ProgressBarExample");
