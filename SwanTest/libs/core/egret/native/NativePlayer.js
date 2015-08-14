var egret;
(function (egret) {
    var native;
    (function (native) {
        /**
         * @private
         */
        var NativePlayer = (function (_super) {
            __extends(NativePlayer, _super);
            function NativePlayer() {
                _super.call(this);
                this.init(NativePlayer.option);
            }
            var __egretProto__ = NativePlayer.prototype;
            __egretProto__.init = function (option) {
                //暂时无法显示重绘区域
                option.showPaintRect = false;
                var stage = new egret.Stage();
                stage.$screen = this;
                stage.$scaleMode = option.scaleMode;
                stage.$maxTouches = option.maxTouches;
                stage.frameRate = option.frameRate;
                stage.textureScaleFactor = option.textureScaleFactor;
                var surface = egret.sys.surfaceFactory.create();
                surface.$isRoot = true;
                var touch = new native.NativeTouchHandler(stage);
                var player = new egret.sys.Player(surface.renderContext, stage, option.entryClassName);
                new native.NativeHideHandler(stage);
                //var nativeInput = new NativeInput();
                if (DEBUG) {
                    player.showPaintRect(option.showPaintRect);
                    if (option.showFPS || option.showLog) {
                        var styleStr = option.fpsStyles || "";
                        var stylesArr = styleStr.split(",");
                        var styles = {};
                        for (var i = 0; i < stylesArr.length; i++) {
                            var tempStyleArr = stylesArr[i].split(":");
                            styles[tempStyleArr[0]] = tempStyleArr[1];
                        }
                        option.fpsStyles = styles;
                        player.displayFPS(option.showFPS, option.showLog, option.logFilter, option.fpsStyles);
                    }
                }
                this.playerOption = option;
                this.stage = stage;
                this.player = player;
                this.nativeTouch = touch;
                //this.nativeInput = nativeInput;
                this.updateScreenSize();
                this.updateMaxTouches();
                player.start();
                egret.MainContext.instance.stage = stage;
            };
            __egretProto__.updateScreenSize = function () {
                var option = this.playerOption;
                var screenWidth = egret_native.EGTView.getFrameWidth();
                var screenHeight = egret_native.EGTView.getFrameHeight();
                var stageSize = egret.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, screenWidth, screenHeight, option.contentWidth, option.contentHeight);
                var stageWidth = stageSize.stageWidth;
                var stageHeight = stageSize.stageHeight;
                var displayWidth = stageSize.displayWidth;
                var displayHeight = stageSize.displayHeight;
                var top = (screenHeight - displayHeight) / 2;
                var left = (screenWidth - displayWidth) / 2;
                egret_native.EGTView.setVisibleRect(left, top, displayWidth, displayHeight);
                egret_native.EGTView.setDesignSize(stageWidth, stageHeight);
                this.player.updateStageSize(stageWidth, stageHeight);
                //var scalex = displayWidth / stageWidth,
                //    scaley = displayHeight / stageHeight;
                //this.webTouchHandler.updateScaleMode(scalex, scaley, rotation);
                //this.webInput.$updateSize();
            };
            /**
             * @private
             * 更新触摸数量
             */
            __egretProto__.updateMaxTouches = function () {
                this.nativeTouch.$updateMaxTouches();
            };
            return NativePlayer;
        })(egret.HashObject);
        native.NativePlayer = NativePlayer;
        NativePlayer.prototype.__class__ = "egret.native.NativePlayer";
        egret.registerClass(NativePlayer,"egret.native.NativePlayer",["egret.sys.Screen"]);
    })(native = egret.native || (egret.native = {}));
})(egret || (egret = {}));
