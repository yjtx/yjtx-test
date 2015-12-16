/**
 * @language en_US
 * The following example shows the general use of a Image.
 */
/**
 * @language zh_CN
 * 下面的例子显示了一个图片的常规用法。
 */
var ImageExample = (function (_super) {
    __extends(ImageExample, _super);
    function ImageExample() {
        _super.call(this);
        var image = new eui.Image();
        image.source = "resource/examples/egret.png";
        this.addChild(image);
        image.x = 100;
        image.y = 100;
    }
    var d = __define,c=ImageExample;p=c.prototype;
    return ImageExample;
})(egret.DisplayObjectContainer);
egret.registerClass(ImageExample,"ImageExample");
