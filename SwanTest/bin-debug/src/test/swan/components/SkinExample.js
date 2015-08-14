/**
 * @language en_US
 * The following example shows how to assign a button to skin.
 */
/**
 * @language zh_CN
 * 下面的例子演示了如何给一个按钮赋值皮肤。
 */
var SkinExample = (function (_super) {
    __extends(SkinExample, _super);
    function SkinExample() {
        _super.call(this);
        var exml = "<s:Button xmlns:s=\"http://ns.egret.com/swan\">\n                <s:Skin states=\"up,down,disabled\">\n                    <s:Image width=\"50\" height=\"50\" source=\"resource/examples/close.png\" scaleX.up=\"1\" scaleX.down=\"0.\u00395\" scaleY.up=\"1\" scaleY.down=\"0.\u00395\"/>\n                </s:Skin>\n            </s:Button>";
        var clazz = EXML.parse(exml);
        var button = new clazz();
        this.addChild(button);
    }
    var __egretProto__ = SkinExample.prototype;
    return SkinExample;
})(egret.DisplayObjectContainer);
SkinExample.prototype.__class__ = "SkinExample";
egret.registerClass(SkinExample,"SkinExample");
