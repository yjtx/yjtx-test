/**
 * Created by yjtx on 15-11-12.
 */
var ImageExmlPosition = (function (_super) {
    __extends(ImageExmlPosition, _super);
    function ImageExmlPosition() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ImageExmlPosition,p=c.prototype;
    p.initRoot = function () {
        var exml = "\n<e:Image class=\"MyImage\" xmlns:e=\"http://ns.egret.com/eui\" source=\"checkbox_select_disabled_png\" width=\"160\" height=\"100\" x=\"200\" y=\"100\" anchorOffsetX=\"202\" left=\"100\"/>\n    ";
        var clazz = EXML.parse(exml);
        var ui = new clazz();
        this.addChild(ui);
    };
    return ImageExmlPosition;
}(EntryEuiDocument));
egret.registerClass(ImageExmlPosition,'ImageExmlPosition');
