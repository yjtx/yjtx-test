/**
 * Created by yjtx on 15-11-12.
 */
var ImageNormal = (function (_super) {
    __extends(ImageNormal, _super);
    function ImageNormal() {
        _super.call(this, ["preload"]);
        this.addEventListener(eui.UIEvent.COMPLETE, this.onCompleteHandler, this);
    }
    var d = __define,c=ImageNormal,p=c.prototype;
    p.onCompleteHandler = function (e) {
        console.log(e.type);
    };
    p.initRoot = function () {
        // this.skinName = "ImageNormalSkin";
        var loadingBg = new eui.Image();
        loadingBg.source = "checkbox_select_disabled_png";
        this.addChild(loadingBg);
        console.log(loadingBg.width);
        console.log(loadingBg.width);
    };
    return ImageNormal;
}(EntryEuiDocument));
egret.registerClass(ImageNormal,'ImageNormal');
