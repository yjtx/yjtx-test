/**
 * @language en_US
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 HSlider。
 */
var HSliderExample = (function (_super) {
    __extends(HSliderExample, _super);
    function HSliderExample() {
        _super.call(this);
        var exml = "<s:Skin minWidth=\"20\" minHeight=\"8\"  xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Image id=\"track\" source=\"resource/examples/slider/track.png\"  scale\u0039Grid=\"1,1,4,4\" width=\"100%\" height=\"6\" verticalCenter=\"0\"/>\n                <s:Image id=\"trackHighlight\" source=\"resource/examples/slider/tracklight.png\" scale\u0039Grid=\"1,1,4,4\" width=\"100%\" height=\"6\" verticalCenter=\"0\"/>\n                <s:Image id=\"thumb\" source=\"resource/examples/slider/thumb.png\" verticalCenter=\"0\"/>\n            </s:Skin>";
        var hslider = new swan.HSlider();
        hslider.skinName = exml;
        hslider.width = 300;
        hslider.x = 100;
        hslider.y = 50;
        this.addChild(hslider);
    }
    var __egretProto__ = HSliderExample.prototype;
    return HSliderExample;
})(egret.DisplayObjectContainer);
HSliderExample.prototype.__class__ = "HSliderExample";
egret.registerClass(HSliderExample,"HSliderExample");
