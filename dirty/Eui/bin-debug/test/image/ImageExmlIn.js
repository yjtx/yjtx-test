/**
 * Created by yjtx on 15-11-12.
 */
var ImageExmlIn = (function (_super) {
    __extends(ImageExmlIn, _super);
    function ImageExmlIn() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ImageExmlIn;p=c.prototype;
    p.initRoot = function () {
        var exml = "\n<e:Image class=\"MyImage\" xmlns:e=\"http://ns.egret.com/eui\" source=\"close_png\" width=\"160\" height=\"100\" scale9Grid=\"16,16,84,30\"/>\n    ";
        var clazz = EXML.parse(exml);
        var ui = new clazz();
        this.addChild(ui);
    };
    return ImageExmlIn;
})(EntryEuiDocument);
egret.registerClass(ImageExmlIn,"ImageExmlIn");
