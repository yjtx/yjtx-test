/**
 * Created by yjtx on 15-11-12.
 */
var ImageExmlOut = (function (_super) {
    __extends(ImageExmlOut, _super);
    function ImageExmlOut() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ImageExmlOut;p=c.prototype;
    p.initRoot = function () {
        var ui = new components.ImageNormal();
        this.addChild(ui);
    };
    return ImageExmlOut;
})(EntryEuiDocument);
egret.registerClass(ImageExmlOut,"ImageExmlOut");
