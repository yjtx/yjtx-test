var egret;
(function (egret) {
    var native;
    (function (native) {
        var NativeHideHandler = (function (_super) {
            __extends(NativeHideHandler, _super);
            function NativeHideHandler(stage) {
                _super.call(this);
                egret_native.pauseApp = function () {
                    //console.log("pauseApp");
                    stage.dispatchEvent(new egret.Event(egret.Event.DEACTIVATE));
                    egret_native.Audio.pauseBackgroundMusic();
                    egret_native.Audio.pauseAllEffects();
                };
                egret_native.resumeApp = function () {
                    //console.log("resumeApp");
                    stage.dispatchEvent(new egret.Event(egret.Event.ACTIVATE));
                    egret_native.Audio.resumeBackgroundMusic();
                    egret_native.Audio.resumeAllEffects();
                };
            }
            var __egretProto__ = NativeHideHandler.prototype;
            return NativeHideHandler;
        })(egret.HashObject);
        native.NativeHideHandler = NativeHideHandler;
        NativeHideHandler.prototype.__class__ = "egret.native.NativeHideHandler";
        egret.registerClass(NativeHideHandler,"egret.native.NativeHideHandler");
    })(native = egret.native || (egret.native = {}));
})(egret || (egret = {}));
