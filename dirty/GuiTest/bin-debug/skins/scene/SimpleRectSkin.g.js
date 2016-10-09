var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var SimpleRectSkin = (function (_super) {
            __extends(SimpleRectSkin, _super);
            function SimpleRectSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [];
                this.__3_i();
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("up", [
                        new egret.gui.AddItems("__3", "", "last", ""),
                        new egret.gui.SetProperty("__3", "y", 1)
                    ])
                ];
            }
            var d = __define,c=SimpleRectSkin,p=c.prototype;
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__3 = t;
                this.__s(t, ["fillAlpha", "fillColor", "height", "strokeAlpha", "strokeColor", "strokeWeight", "width", "x", "y"], [0, 0x3870C3, 41, 1, 0x3870C3, 2, 140, 0, 1]);
                return t;
            };
            return SimpleRectSkin;
        }(egret.gui.Skin));
        scene.SimpleRectSkin = SimpleRectSkin;
        egret.registerClass(SimpleRectSkin,'skins.scene.SimpleRectSkin');
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
