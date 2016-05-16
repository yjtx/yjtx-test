/**
 * Created by yjtx on 15-11-12.
 */
var SkinButton = (function (_super) {
    __extends(SkinButton, _super);
    function SkinButton() {
        _super.call(this, ["preload"]);
        this.skinName = "resource/test_skins/SkinButtonSkin.exml";
    }
    var d = __define,c=SkinButton,p=c.prototype;
    p.initRoot = function () {
    };
    return SkinButton;
}(EntryEuiDocument));
egret.registerClass(SkinButton,'SkinButton');
