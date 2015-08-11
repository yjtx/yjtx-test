/**
 * @language en_US
 * The following example shows a VSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 VSlider。
 */
class VSliderExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var exml =
            `<s:VSlider x="50" y="50" height="300" xmlns:s="http://ns.egret.com/swan">
                <s:Skin minWidth="20" minHeight="8">
                    <s:Image id="track" source="resource/examples/slider/track.png"  scale9Grid="1,1,4,4" width="6" height="100%" verticalCenter="0"/>
                    <s:Image id="trackHighlight" source="resource/examples/slider/tracklight.png" scale9Grid="1,1,4,4" width="6" height="100%" verticalCenter="0"/>
                    <s:Image id="thumb" source="resource/examples/slider/thumb.png" rotation="90" x="15"/>
                </s:Skin>
            </s:VSlider>`;

        var clazz = EXML.parse(exml);
        var vslider = new clazz();
        this.addChild(vslider);
    }
}