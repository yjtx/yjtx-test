var ss;
(function (ss) {
    var SSMovieClip = (function (_super) {
        __extends(SSMovieClip, _super);
        function SSMovieClip(movieClipData) {
            _super.call(this, movieClipData);
            this.mLayerValue = 0;
            this.mPlayTimes = 0; //MovieClip中_playTimes为私有的，这里自己保存一份，便于动画的暂停恢复处理
            this.mFrameWhenPause = 0; //记录暂停时的帧,回来继续播
            this.mIsPlayingBeforePause = false; //暂停时，是否正在播动画
            this.mSpecFrame = -1; //指定特定帧
        }
        var d = __define,c=SSMovieClip,p=c.prototype;
        /**
         * 根据前缀名称创建
         */
        SSMovieClip.createWithPrefix = function (resPrefix) {
            var data = RES.getRes(resPrefix + "_json");
            var txtr = RES.getRes(resPrefix + "_png");
            var mcFactory = new egret.MovieClipDataFactory(data, txtr);
            var mcData = mcFactory.generateMovieClipData(resPrefix);
            var mc = new ss.SSMovieClip(mcData);
            data = null;
            txtr = null;
            mcFactory = null;
            mcData = null;
            return mc;
        };
        p.setAnchor = function (anchorOffsetX, anchorOffsetY) {
            if (anchorOffsetX === void 0) { anchorOffsetX = 0; }
            if (anchorOffsetY === void 0) { anchorOffsetY = 0; }
            this.anchorOffsetX = anchorOffsetX;
            this.anchorOffsetY = anchorOffsetY;
        };
        p.setPosition = function (x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        };
        p.setAnchorAndPosition = function (anchorOffsetX, anchorOffsetY, x, y) {
            if (anchorOffsetX === void 0) { anchorOffsetX = 0; }
            if (anchorOffsetY === void 0) { anchorOffsetY = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.setAnchor(anchorOffsetX, anchorOffsetY);
            this.setPosition(x, y);
        };
        /**
         * 继续播放当前动画
         * @method egret.MovieClip#play
         * @param playTimes {number} 播放次数。 参数为整数，可选参数，>=1：设定播放次数，<0：循环播放，默认值 0：不改变播放次数(MovieClip初始播放次数设置为1)，
         */
        p.play = function (playTimes) {
            if (playTimes === void 0) { playTimes = 0; }
            _super.prototype.play.call(this, playTimes);
            this.mPlayTimes = playTimes;
        };
        /**
         * 如果从舞台移除时是播动画的，重新添加时继续播放
         */
        p.$onAddToStage = function (stage, nestLevel) {
            _super.prototype.$onAddToStage.call(this, stage, nestLevel);
            this.resume();
        };
        /**
         * 从舞台移除时，保存是否正在播动画
         * @private
         */
        p.$onRemoveFromStage = function () {
            this.pause();
            _super.prototype.$onRemoveFromStage.call(this);
        };
        /**
         * 暂停动画
         */
        p.pause = function () {
            this.mIsPlayingBeforePause = this.isPlaying;
            if (this.mIsPlayingBeforePause) {
                this.stop();
                this.mFrameWhenPause = this.currentFrame;
            }
        };
        /**
         * 继续动画
         */
        p.resume = function () {
            if (this.mIsPlayingBeforePause) {
                this.gotoAndPlay(this.mFrameWhenPause, this.mPlayTimes);
            }
        };
        /**
         * 添加监听特定帧
         * @param specFrame 指定帧
         * @param listener
         * @param thisObject
         */
        p.addSpecFrameEvent = function (specFrame, listener, thisObject) {
            this.mSpecFrame = specFrame;
            this.mListener = listener;
            this.mThisObject = thisObject;
            //this.addEventListener(ss.MCFrameEvent.SPEC_FRAME, this.checkSpecFrame, this);
        };
        /**
         * 判断是否在特定帧
         */
        p.checkSpecFrame = function () {
            //if (this.isPlaying) {
            //    if (this.currentFrame == this.mSpecFrame) {
            //        this.removeEventListener(ss.MCFrameEvent.SPEC_FRAME, this.checkSpecFrame, this);
            //        this.mListener.call(this.mThisObject, this.mSpecFrame);
            //    }
            //}
        };
        return SSMovieClip;
    })(egret.MovieClip);
    ss.SSMovieClip = SSMovieClip;
    egret.registerClass(SSMovieClip,'ss.SSMovieClip');
})(ss || (ss = {}));
