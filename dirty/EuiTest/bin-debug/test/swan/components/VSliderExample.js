/**
 * @language en_US
 * The following example shows a VSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 VSlider。
 */
var VSliderExample = (function (_super) {
    __extends(VSliderExample, _super);
    function VSliderExample() {
        _super.call(this);
        var exml = "<s:VSlider x=\"50\" y=\"50\" height=\"300\" xmlns:s=\"http://ns.egret.com/eui\">\n                <s:Skin minWidth=\"20\" minHeight=\"8\">\n                    <s:Image id=\"track\" source=\"resource/examples/slider/track.png\"  scale9Grid=\"1,1,4,4\" width=\"6\" height=\"100%\" verticalCenter=\"0\"/>\n                    <s:Image id=\"trackHighlight\" source=\"resource/examples/slider/tracklight.png\" scale9Grid=\"1,1,4,4\" width=\"6\" height=\"100%\" verticalCenter=\"0\"/>\n                    <s:Image id=\"thumb\" source=\"resource/examples/slider/thumb.png\" rotation=\"90\" x=\"15\"/>\n                </s:Skin>\n            </s:VSlider>";
        var clazz = EXML.parse(exml);
        var vslider = new clazz();
        this.addChild(vslider);
    }
    var d = __define,c=VSliderExample;p=c.prototype;
    return VSliderExample;
})(egret.DisplayObjectContainer);
egret.registerClass(VSliderExample,"VSliderExample");
