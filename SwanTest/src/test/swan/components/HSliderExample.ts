/**
 * @language en_US
 * The following example shows a HSlider.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个 HSlider。
 */
class HSliderExample extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var exml =
            `<s:Skin minWidth="20" minHeight="8"  xmlns:s="http://ns.egret.com/swan">
                <s:Image id="track" source="resource/examples/slider/track.png"  scale9Grid="1,1,4,4" width="100%" height="6" verticalCenter="0"/>
                <s:Image id="trackHighlight" source="resource/examples/slider/tracklight.png" scale9Grid="1,1,4,4" width="100%" height="6" verticalCenter="0"/>
                <s:Image id="thumb" source="resource/examples/slider/thumb.png" verticalCenter="0"/>
            </s:Skin>`;

        var hslider = new swan.HSlider();
        hslider.skinName = exml;
        hslider.width = 300;
        hslider.x = 100;
        hslider.y = 50;
        this.addChild(hslider);
    }
}