var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var SimpleUIAssetSkin = (function (_super) {
            __extends(SimpleUIAssetSkin, _super);
            function SimpleUIAssetSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__1_i()];
            }
            var d = __define,c=SimpleUIAssetSkin,p=c.prototype;
            p.__1_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "resource/assets/bg.jpg";
                return t;
            };
            return SimpleUIAssetSkin;
        }(egret.gui.Skin));
        scene.SimpleUIAssetSkin = SimpleUIAssetSkin;
        egret.registerClass(SimpleUIAssetSkin,'skins.scene.SimpleUIAssetSkin');
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
