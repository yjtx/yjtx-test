//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var egret;
(function (egret) {
    /**
     * @classdesc 影片剪辑，可以通过影片剪辑播放序列帧动画。MovieClip 类从以下类继承而来：DisplayObject 和 EventDispatcher。不同于 DisplayObject 对象，MovieClip 对象拥有一个时间轴。
     * @extends egret.DisplayObject
     * @event egret.Event.COMPLETE 动画播放完成。
     * @event egret.Event.LOOP_COMPLETE 动画循环播放完成。
     * @see http://edn.egret.com/cn/index.php/article/index/id/151 MovieClip序列帧动画
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/display/MovieClip.ts
     */
    var MovieClip = (function (_super) {
        __extends(MovieClip, _super);
        //Construct Function
        /**
         * 创建新的 MovieClip 实例。创建 MovieClip 之后，调用舞台上的显示对象容器的addElement方法。
         * @param movieClipData {movieClipData} 被引用的 movieClipData 对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        function MovieClip(movieClipData) {
            _super.call(this);
            //Render Property
            this.$bitmapData = null;
            //Data Property
            this.$movieClipData = null;
            /**
             * @private
             */
            this.frames = null;
            /**
             * @private
             */
            this.$totalFrames = 0;
            /**
             * @version Egret 2.0
             * @platform Web,Native
             */
            this.frameLabels = null;
            /**
             * @private
             */
            this.frameIntervalTime = 0;
            /**
             * @private
             */
            this.$eventPool = null;
            //Animation Property
            this.$isPlaying = false;
            /**
             * @private
             */
            this.isStopped = true;
            /**
             * @private
             */
            this.playTimes = 0;
            /**
             * @private
             */
            this.$currentFrameNum = 0;
            /**
             * @private
             */
            this.$nextFrameNum = 0;
            /**
             * @private
             */
            this.displayedKeyFrameNum = 0;
            /**
             * @private
             */
            this.passedTime = 0;
            /**
             * @private
             */
            this.lastTime = 0;
            this.$renderRegion = new egret.sys.Region();
            this.setMovieClipData(movieClipData);
        }
        var __egretProto__ = MovieClip.prototype;
        /**
         * @private
         *
         */
        __egretProto__.$init = function () {
            this.$reset();
            var movieClipData = this.$movieClipData;
            if (movieClipData && movieClipData.$isDataValid()) {
                this.frames = movieClipData.frames;
                this.$totalFrames = movieClipData.numFrames;
                this.frameLabels = movieClipData.labels;
                this.frameIntervalTime = 1000 / movieClipData.frameRate;
                this._initFrame();
            }
        };
        /**
         * @private
         *
         */
        __egretProto__.$reset = function () {
            this.frames = null;
            this.playTimes = 0;
            this.$isPlaying = false;
            this.setIsStopped(true);
            this.$currentFrameNum = 0;
            this.$nextFrameNum = 1;
            this.displayedKeyFrameNum = 0;
            this.passedTime = 0;
            this.$eventPool = [];
        };
        /**
         * @private
         *
         */
        __egretProto__._initFrame = function () {
            if (this.$movieClipData.$isTextureValid()) {
                this.advanceFrame();
                this.constructFrame();
            }
        };
        /**
         * @private
         */
        __egretProto__.$render = function (context) {
            var texture = this.$bitmapData;
            if (texture) {
                context.imageSmoothingEnabled = false;
                var offsetX = Math.round(texture._offsetX);
                var offsetY = Math.round(texture._offsetY);
                var bitmapWidth = texture._bitmapWidth;
                var bitmapHeight = texture._bitmapHeight;
                var destW = Math.round(texture.$getScaleBitmapWidth());
                var destH = Math.round(texture.$getScaleBitmapHeight());
                context.drawImage(texture._bitmapData, texture._bitmapX, texture._bitmapY, bitmapWidth, bitmapHeight, offsetX, offsetY, destW, destH);
            }
        };
        /**
         * @private
         */
        __egretProto__.$measureContentBounds = function (bounds) {
            var texture = this.$bitmapData;
            if (texture) {
                var x = texture._offsetX;
                var y = texture._offsetY;
                var w = texture.$getTextureWidth();
                var h = texture.$getTextureHeight();
                bounds.setTo(x, y, w, h);
            }
            else {
                bounds.setEmpty();
            }
        };
        /**
         * @private
         *
         * @param stage
         * @param nestLevel
         */
        __egretProto__.$onAddToStage = function (stage, nestLevel) {
            _super.prototype.$onAddToStage.call(this, stage, nestLevel);
            if (this.$isPlaying && this.$totalFrames > 1) {
                this.setIsStopped(false);
            }
        };
        /**
         * @private
         *
         */
        __egretProto__.$onRemoveFromStage = function () {
            _super.prototype.$onRemoveFromStage.call(this);
            this.setIsStopped(true);
        };
        //Data Function
        /**
         * @private
         * 返回帧标签为指定字符串的FrameLabel对象
         * @param labelName {string} 帧标签名
         * @param ignoreCase {boolean} 是否忽略大小写，可选参数，默认false
         * @returns {egret.FrameLabel} FrameLabel对象
         */
        __egretProto__.getFrameLabelByName = function (labelName, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = false; }
            if (ignoreCase) {
                labelName = labelName.toLowerCase();
            }
            var frameLabels = this.frameLabels;
            if (frameLabels) {
                var outputFramelabel = null;
                for (var i = 0; i < frameLabels.length; i++) {
                    outputFramelabel = frameLabels[i];
                    if (ignoreCase ? outputFramelabel.name.toLowerCase() == labelName : outputFramelabel.name == labelName) {
                        return outputFramelabel;
                    }
                }
            }
            return null;
        };
        /**
         * @private
         * 返回指定序号的帧的FrameLabel对象
         * @param frame {number} 帧序号
         * @returns {egret.FrameLabel} FrameLabel对象
         */
        __egretProto__.getFrameLabelByFrame = function (frame) {
            var frameLabels = this.frameLabels;
            if (frameLabels) {
                var outputFramelabel = null;
                for (var i = 0; i < frameLabels.length; i++) {
                    outputFramelabel = frameLabels[i];
                    if (outputFramelabel.frame == frame) {
                        return outputFramelabel;
                    }
                }
            }
            return null;
        };
        /**
         * @private
         * 返回指定序号的帧对应的FrameLabel对象，如果当前帧没有标签，则返回前面最近的有标签的帧的FrameLabel对象
         * @method egret.MovieClip#getFrameLabelForFrame
         * @param frame {number} 帧序号
         * @returns {egret.FrameLabel} FrameLabel对象
         */
        __egretProto__.getFrameLabelForFrame = function (frame) {
            var outputFrameLabel = null;
            var tempFrameLabel = null;
            var frameLabels = this.frameLabels;
            if (frameLabels) {
                for (var i = 0; i < frameLabels.length; i++) {
                    tempFrameLabel = frameLabels[i];
                    if (tempFrameLabel.frame > frame) {
                        return outputFrameLabel;
                    }
                    outputFrameLabel = tempFrameLabel;
                }
            }
            return outputFrameLabel;
        };
        //Animation Function
        /**
         * 继续播放当前动画
         * @param playTimes {number} 播放次数。 参数为整数，可选参数，>=1：设定播放次数，<0：循环播放，默认值 0：不改变播放次数(MovieClip初始播放次数设置为1)，
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.play = function (playTimes) {
            if (playTimes === void 0) { playTimes = 0; }
            this.$isPlaying = true;
            this.setPlayTimes(playTimes);
            if (this.$totalFrames > 1 && this.$stage) {
                this.setIsStopped(false);
            }
        };
        /**
         * 暂停播放动画
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.stop = function () {
            this.$isPlaying = false;
            this.setIsStopped(true);
        };
        /**
         * 将播放头移到前一帧并停止
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.prevFrame = function () {
            this.gotoAndStop(this.$currentFrameNum - 1);
        };
        /**
         * 跳到后一帧并停止
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.nextFrame = function () {
            this.gotoAndStop(this.$currentFrameNum + 1);
        };
        /**
         * 将播放头移到指定帧并播放
         * @param frame {any} 指定帧的帧号或帧标签
         * @param playTimes {number} 播放次数。 参数为整数，可选参数，>=1：设定播放次数，<0：循环播放，默认值 0：不改变播放次数，
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.gotoAndPlay = function (frame, playTimes) {
            if (playTimes === void 0) { playTimes = 0; }
            if (arguments.length == 0 || arguments.length > 2) {
                egret.$error(1022, "MovieClip.gotoAndPlay()");
            }
            this.play(playTimes);
            this.gotoFrame(frame);
        };
        /**
         * 将播放头移到指定帧并停止
         * @param frame {any} 指定帧的帧号或帧标签
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.gotoAndStop = function (frame) {
            if (arguments.length != 1) {
                egret.$error(1022, "MovieClip.gotoAndStop()");
            }
            this.stop();
            this.gotoFrame(frame);
        };
        /**
         * @private
         *
         * @param frame
         */
        __egretProto__.gotoFrame = function (frame) {
            var frameNum;
            if (typeof frame === "string") {
                frameNum = this.getFrameLabelByName(frame).frame;
            }
            else {
                frameNum = parseInt(frame + '', 10);
                if (frameNum != frame) {
                    egret.$error(1022, "Frame Label Not Found");
                }
            }
            if (frameNum < 1) {
                frameNum = 1;
            }
            else if (frameNum > this.$totalFrames) {
                frameNum = this.$totalFrames;
            }
            if (frameNum == this.$nextFrameNum) {
                return;
            }
            this.$nextFrameNum = frameNum;
            this.advanceFrame();
            this.constructFrame();
            this.handlePendingEvent();
        };
        /**
         * @private
         *
         * @param advancedTime
         * @returns
         */
        __egretProto__.advanceTime = function (timeStamp) {
            var self = this;
            var advancedTime = timeStamp - self.lastTime;
            self.lastTime = timeStamp;
            var frameIntervalTime = self.frameIntervalTime;
            var currentTime = self.passedTime + advancedTime;
            self.passedTime = currentTime % frameIntervalTime;
            var num = currentTime / frameIntervalTime;
            if (num < 1) {
                return true;
            }
            while (num >= 1) {
                num--;
                self.$nextFrameNum++;
                if (self.$nextFrameNum > self.$totalFrames) {
                    if (self.playTimes == -1) {
                        self.$eventPool.push(egret.Event.LOOP_COMPLETE);
                        self.$nextFrameNum = 1;
                    }
                    else {
                        self.playTimes--;
                        if (self.playTimes > 0) {
                            self.$eventPool.push(egret.Event.LOOP_COMPLETE);
                            self.$nextFrameNum = 1;
                        }
                        else {
                            self.$nextFrameNum = self.$totalFrames;
                            self.$eventPool.push(egret.Event.COMPLETE);
                            self.stop();
                            break;
                        }
                    }
                }
                self.advanceFrame();
            }
            self.constructFrame();
            self.handlePendingEvent();
            return false;
        };
        /**
         * @private
         *
         */
        __egretProto__.advanceFrame = function () {
            this.$currentFrameNum = this.$nextFrameNum;
        };
        /**
         * @private
         *
         */
        __egretProto__.constructFrame = function () {
            var currentFrameNum = this.$currentFrameNum;
            if (this.displayedKeyFrameNum == currentFrameNum) {
                return;
            }
            this.$bitmapData = this.$movieClipData.getTextureByFrame(currentFrameNum);
            this.$invalidateContentBounds();
            this.displayedKeyFrameNum = currentFrameNum;
        };
        /**
         * @private
         *
         */
        __egretProto__.handlePendingEvent = function () {
            if (this.$eventPool.length != 0) {
                this.$eventPool.reverse();
                var eventPool = this.$eventPool;
                var length = eventPool.length;
                var isComplete = false;
                var isLoopComplete = false;
                for (var i = 0; i < length; i++) {
                    var event = eventPool.pop();
                    if (event == egret.Event.LOOP_COMPLETE) {
                        isLoopComplete = true;
                    }
                    else if (event == egret.Event.COMPLETE) {
                        isComplete = true;
                    }
                    else {
                        this.dispatchEventWith(event);
                    }
                }
                if (isLoopComplete) {
                    this.dispatchEventWith(egret.Event.LOOP_COMPLETE);
                }
                if (isComplete) {
                    this.dispatchEventWith(egret.Event.COMPLETE);
                }
            }
        };
        Object.defineProperty(__egretProto__, "totalFrames", {
            //Properties
            /**
             * MovieClip 实例中帧的总数
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$totalFrames;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "currentFrame", {
            /**
             * MovieClip 实例当前播放的帧的序号
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$currentFrameNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "currentFrameLabel", {
            /**
             * MovieClip 实例当前播放的帧的标签。如果当前帧没有标签，则 currentFrameLabel返回null。
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                var label = this.getFrameLabelByFrame(this.$currentFrameNum);
                return label && label.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "currentLabel", {
            /**
             * 当前播放的帧对应的标签，如果当前帧没有标签，则currentLabel返回包含标签的先前帧的标签。如果当前帧和先前帧都不包含标签，currentLabel返回null。
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                var label = this.getFrameLabelForFrame(this.$currentFrameNum);
                return label ? label.name : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "frameRate", {
            /**
             * MovieClip 实例的帧频
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$movieClipData.frameRate;
            },
            set: function (value) {
                if (value == this.$movieClipData.frameRate) {
                    return;
                }
                this.$movieClipData.frameRate = value;
                this.frameIntervalTime = 1000 / this.$movieClipData.frameRate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "isPlaying", {
            /**
             * MovieClip 实例当前是否正在播放
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$isPlaying;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "movieClipData", {
            /**
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$movieClipData;
            },
            /**
             * MovieClip数据源
             */
            set: function (value) {
                this.setMovieClipData(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.setMovieClipData = function (value) {
            if (this.$movieClipData == value) {
                return;
            }
            this.$movieClipData = value;
            this.$init();
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.setPlayTimes = function (value) {
            if (value < 0 || value >= 1) {
                this.playTimes = value < 0 ? -1 : Math.floor(value);
            }
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.setIsStopped = function (value) {
            if (this.isStopped == value) {
                return;
            }
            this.isStopped = value;
            if (value) {
                this.playTimes = 0;
                egret.sys.$ticker.$stopTick(this.advanceTime, this);
            }
            else {
                this.playTimes = this.playTimes == 0 ? 1 : this.playTimes;
                this.lastTime = egret.getTimer();
                egret.sys.$ticker.$startTick(this.advanceTime, this);
            }
        };
        return MovieClip;
    })(egret.DisplayObject);
    egret.MovieClip = MovieClip;
    MovieClip.prototype.__class__ = "egret.MovieClip";
    egret.registerClass(MovieClip,"egret.MovieClip");
})(egret || (egret = {}));
