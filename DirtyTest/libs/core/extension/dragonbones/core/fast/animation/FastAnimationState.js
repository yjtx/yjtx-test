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
var dragonBones;
(function (dragonBones) {
    /**
     * @class dragonBones.FastAnimationState
     * @classdesc
     * FastAnimationState 实例代表播放的动画， 可以对单个动画的播放进行最细致的调节。
     * @see dragonBones.Animation
     * @see dragonBones.AnimationData
     * @example
       <pre>
        //获取动画数据
        var skeletonData = RES.getRes("skeleton");
        //获取纹理集数据
        var textureData = RES.getRes("textureConfig");
        //获取纹理集图片
        var texture = RES.getRes("texture");
      
        //创建一个工厂，用来创建Armature
        var factory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
        //把动画数据添加到工厂里
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        //把纹理集数据和图片添加到工厂里
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
      
        //获取Armature的名字，dragonBones4.0的数据可以包含多个骨架，这里取第一个Armature
        var armatureName:string = skeletonData.armature[0].name;
        //从工厂里创建出Armature
        var armature:dragonBones.FastArmature = factory.buildFastArmature(armatureName);
        //获取装载Armature的容器
        var armatureDisplay = armature.display;
        //把它添加到舞台上
        this.addChild(armatureDisplay);
        
        //以60fps的帧率开启动画缓存，缓存所有的动画数据
        var animationCachManager:dragonBones.AnimationCacheManager = armature.enableAnimationCache(60);
      
       //取得这个Armature动画列表中的第一个动画的名字
        var curAnimationName = armature.animation.animationList[0];
        //播放这个动画，gotoAndPlay各个参数说明
        //第一个参数 animationName {string} 指定播放动画的名称.
        //第二个参数 fadeInTime {number} 动画淡入时间 (>= 0), 默认值：-1 意味着使用动画数据中的淡入时间.
        //第三个参数 duration {number} 动画播放时间。默认值：-1 意味着使用动画数据中的播放时间.
        //第四个参数 layTimes {number} 动画播放次数(0:循环播放, >=1:播放次数, NaN:使用动画数据中的播放时间), 默认值：NaN
        armature.animation.gotoAndPlay(curAnimationName,0.3,-1,0);
      
        //把Armature添加到心跳时钟里
        dragonBones.WorldClock.clock.add(armature);
        //心跳时钟开启
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
       </pre>
     */
    var FastAnimationState = (function () {
        function FastAnimationState() {
            this._boneTimelineStateList = [];
            this._slotTimelineStateList = [];
            this._currentFrameIndex = 0;
            this._currentFramePosition = 0;
            this._currentFrameDuration = 0;
            this._currentPlayTimes = 0;
            this._totalTime = 0; //毫秒
            this._currentTime = 0;
            this._lastTime = 0;
            this._playTimes = 0;
            this._fading = false;
        }
        var __egretProto__ = FastAnimationState.prototype;
        __egretProto__.dispose = function () {
            this._resetTimelineStateList();
            this._armature = null;
        };
        /**
         * 播放当前动画。如果动画已经播放完毕, 将不会继续播放.
         * @returns {FastAnimationState} 动画播放状态实例
         */
        __egretProto__.play = function () {
            this._isPlaying = true;
            return this;
        };
        /**
         * 暂停当前动画的播放。
         * @returns {AnimationState} 动画播放状态实例
         */
        __egretProto__.stop = function () {
            this._isPlaying = false;
            return this;
        };
        __egretProto__.setCurrentTime = function (value) {
            if (value < 0 || isNaN(value)) {
                value = 0;
            }
            this._time = value;
            this._currentTime = this._time * 1000;
            return this;
        };
        __egretProto__._resetTimelineStateList = function () {
            var i = this._boneTimelineStateList.length;
            while (i--) {
                dragonBones.FastBoneTimelineState.returnObject(this._boneTimelineStateList[i]);
            }
            this._boneTimelineStateList.length = 0;
            i = this._slotTimelineStateList.length;
            while (i--) {
                dragonBones.FastSlotTimelineState.returnObject(this._slotTimelineStateList[i]);
            }
            this._slotTimelineStateList.length = 0;
            this.name = null;
        };
        /** @private */
        __egretProto__._fadeIn = function (aniData, playTimes, timeScale, fadeTotalTime) {
            this.animationData = aniData;
            this.name = this.animationData.name;
            this._totalTime = this.animationData.duration;
            this.autoTween = aniData.autoTween;
            this.setTimeScale(timeScale);
            this.setPlayTimes(playTimes);
            //reset
            this._isComplete = false;
            this._currentFrameIndex = -1;
            this._currentPlayTimes = -1;
            if (Math.round(this._totalTime * this.animationData.frameRate * 0.001) < 2) {
                this._currentTime = this._totalTime;
            }
            else {
                this._currentTime = -1;
            }
            this._fadeTotalTime = fadeTotalTime * this._timeScale;
            this._fading = this._fadeTotalTime > 0;
            //default
            this._isPlaying = true;
            if (this._armature.enableCache && this.animationCache && this._fading && this._boneTimelineStateList) {
                this.updateTransformTimeline(this.progress);
            }
            this._time = 0;
            this._progress = 0;
            this._updateTimelineStateList();
            this.hideBones();
            return;
        };
        /**
         * @private
         * Update timeline state based on mixing transforms and clip.
         */
        __egretProto__._updateTimelineStateList = function () {
            this._resetTimelineStateList();
            var timelineName;
            var length = this.animationData.timelineList.length;
            for (var i = 0; i < length; i++) {
                var boneTimeline = this.animationData.timelineList[i];
                timelineName = boneTimeline.name;
                var bone = this._armature.getBone(timelineName);
                if (bone) {
                    var boneTimelineState = dragonBones.FastBoneTimelineState.borrowObject();
                    boneTimelineState.fadeIn(bone, this, boneTimeline);
                    this._boneTimelineStateList.push(boneTimelineState);
                }
            }
            var length1 = this.animationData.slotTimelineList.length;
            for (var i1 = 0; i1 < length1; i1++) {
                var slotTimeline = this.animationData.slotTimelineList[i1];
                timelineName = slotTimeline.name;
                var slot = this._armature.getSlot(timelineName);
                if (slot && slot.displayList.length > 0) {
                    var slotTimelineState = dragonBones.FastSlotTimelineState.borrowObject();
                    slotTimelineState.fadeIn(slot, this, slotTimeline);
                    this._slotTimelineStateList.push(slotTimelineState);
                }
            }
        };
        /** @private */
        __egretProto__._advanceTime = function (passedTime) {
            passedTime *= this._timeScale;
            if (this._fading) {
                //计算progress
                this._time += passedTime;
                this._progress = this._time / this._fadeTotalTime;
                if (this._progress >= 1) {
                    this._progress = 0;
                    this._time = 0;
                    this._fading = false;
                }
            }
            if (this._fading) {
                //update boneTimelie
                var length = this._boneTimelineStateList.length;
                for (var i = 0; i < length; i++) {
                    var timeline = this._boneTimelineStateList[i];
                    timeline.updateFade(this.progress);
                }
                //update slotTimelie
                var length1 = this._slotTimelineStateList.length;
                for (var i1 = 0; i1 < length1; i1++) {
                    var slotTimeline = this._slotTimelineStateList[i1];
                    slotTimeline.updateFade(this.progress);
                }
            }
            else {
                this.advanceTimelinesTime(passedTime);
            }
        };
        __egretProto__.advanceTimelinesTime = function (passedTime) {
            this._time += passedTime;
            //计算是否已经播放完成isThisComplete
            var loopCompleteFlg = false;
            var completeFlg = false;
            var isThisComplete = false;
            var currentPlayTimes = 0;
            var currentTime = this._time * 1000;
            if (this._playTimes == 0 || currentTime < this._playTimes * this._totalTime) {
                isThisComplete = false;
                this._progress = currentTime / this._totalTime;
                currentPlayTimes = Math.ceil(this.progress) || 1;
                this._progress -= Math.floor(this.progress);
                currentTime %= this._totalTime;
            }
            else {
                currentPlayTimes = this._playTimes;
                currentTime = this._totalTime;
                isThisComplete = true;
                this._progress = 1;
            }
            this._isComplete = isThisComplete;
            if (this.isUseCache()) {
                this.animationCache.update(this.progress);
            }
            else {
                this.updateTransformTimeline(this.progress);
            }
            //update main timeline
            if (this._currentTime != currentTime) {
                if (this._currentPlayTimes != currentPlayTimes) {
                    if (this._currentPlayTimes > 0 && currentPlayTimes > 1) {
                        loopCompleteFlg = true;
                    }
                    this._currentPlayTimes = currentPlayTimes;
                }
                if (this._isComplete) {
                    completeFlg = true;
                }
                this._lastTime = this._currentTime;
                this._currentTime = currentTime;
                this.updateMainTimeline(isThisComplete);
            }
            //抛事件
            var event;
            if (completeFlg) {
                if (this._armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)) {
                    event = new dragonBones.AnimationEvent(dragonBones.AnimationEvent.COMPLETE);
                    event.animationState = this;
                    this._armature._addEvent(event);
                }
            }
            else if (loopCompleteFlg) {
                if (this._armature.hasEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE)) {
                    event = new dragonBones.AnimationEvent(dragonBones.AnimationEvent.LOOP_COMPLETE);
                    event.animationState = this;
                    this._armature._addEvent(event);
                }
            }
        };
        __egretProto__.updateTransformTimeline = function (progress) {
            var i = this._boneTimelineStateList.length;
            var boneTimeline;
            var slotTimeline;
            if (this._isComplete) {
                while (i--) {
                    boneTimeline = this._boneTimelineStateList[i];
                    boneTimeline.update(progress);
                    this._isComplete = boneTimeline._isComplete && this._isComplete;
                }
                i = this._slotTimelineStateList.length;
                while (i--) {
                    slotTimeline = this._slotTimelineStateList[i];
                    slotTimeline.update(progress);
                    this._isComplete = slotTimeline._isComplete && this._isComplete;
                }
            }
            else {
                while (i--) {
                    boneTimeline = this._boneTimelineStateList[i];
                    boneTimeline.update(progress);
                }
                i = this._slotTimelineStateList.length;
                while (i--) {
                    slotTimeline = this._slotTimelineStateList[i];
                    slotTimeline.update(progress);
                }
            }
        };
        __egretProto__.updateMainTimeline = function (isThisComplete) {
            var frameList = this.animationData.frameList;
            if (frameList.length > 0) {
                var prevFrame;
                var currentFrame;
                for (var i = 0, l = this.animationData.frameList.length; i < l; ++i) {
                    if (this._currentFrameIndex < 0) {
                        this._currentFrameIndex = 0;
                    }
                    else if (this._currentTime < this._currentFramePosition || this._currentTime >= this._currentFramePosition + this._currentFrameDuration || this._currentTime < this._lastTime) {
                        this._lastTime = this._currentTime;
                        this._currentFrameIndex++;
                        if (this._currentFrameIndex >= frameList.length) {
                            if (isThisComplete) {
                                this._currentFrameIndex--;
                                break;
                            }
                            else {
                                this._currentFrameIndex = 0;
                            }
                        }
                    }
                    else {
                        break;
                    }
                    currentFrame = frameList[this._currentFrameIndex];
                    if (prevFrame) {
                        this._armature.arriveAtFrame(prevFrame, this);
                    }
                    this._currentFrameDuration = currentFrame.duration;
                    this._currentFramePosition = currentFrame.position;
                    prevFrame = currentFrame;
                }
                if (currentFrame) {
                    this._armature.arriveAtFrame(currentFrame, this);
                }
            }
        };
        __egretProto__.setTimeScale = function (value) {
            if (isNaN(value) || value == Infinity) {
                value = 1;
            }
            this._timeScale = value;
            return this;
        };
        __egretProto__.setPlayTimes = function (value) {
            if (value === void 0) { value = 0; }
            //如果动画只有一帧  播放一次就可以
            if (Math.round(this._totalTime * 0.001 * this.animationData.frameRate) < 2) {
                this._playTimes = 1;
            }
            else {
                this._playTimes = value;
            }
            return this;
        };
        Object.defineProperty(__egretProto__, "playTimes", {
            /**
             * 播放次数 (0:循环播放， >0:播放次数)
             * @member {number} dragonBones.FastAnimationState#playTimes
             */
            get: function () {
                return this._playTimes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "currentPlayTimes", {
            /**
             * 当前播放次数
             * @member {number} dragonBones.FastAnimationState#currentPlayTimes
             */
            get: function () {
                return this._currentPlayTimes < 0 ? 0 : this._currentPlayTimes;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "isComplete", {
            /**
             * 是否播放完成
             * @member {boolean} dragonBones.FastAnimationState#isComplete
             */
            get: function () {
                return this._isComplete;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "isPlaying", {
            /**
             * 是否正在播放
             * @member {boolean} dragonBones.FastAnimationState#isPlaying
             */
            get: function () {
                return (this._isPlaying && !this._isComplete);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "totalTime", {
            /**
             * 动画总时长（单位：秒）
             * @member {number} dragonBones.FastAnimationState#totalTime
             */
            get: function () {
                return this._totalTime * 0.001;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "currentTime", {
            /**
             * 动画当前播放时间（单位：秒）
             * @member {number} dragonBones.FastAnimationState#currentTime
             */
            get: function () {
                return this._currentTime < 0 ? 0 : this._currentTime * 0.001;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 是否使用缓存
         * @member {boolean} dragonBones.FastAnimationState#isUseCache
         */
        __egretProto__.isUseCache = function () {
            return this._armature.enableCache && this.animationCache && !this._fading;
        };
        __egretProto__.hideBones = function () {
            var length = this.animationData.hideTimelineNameMap.length;
            for (var i = 0; i < length; i++) {
                var timelineName = this.animationData.hideTimelineNameMap[i];
                var slot = this._armature.getSlot(timelineName);
                if (slot) {
                    slot.hideSlots();
                }
            }
        };
        Object.defineProperty(__egretProto__, "progress", {
            /**
             * 动画播放进度
             * @member {number} dragonBones.FastAnimationState#progress
             */
            get: function () {
                return this._progress;
            },
            enumerable: true,
            configurable: true
        });
        return FastAnimationState;
    })();
    dragonBones.FastAnimationState = FastAnimationState;
    FastAnimationState.prototype.__class__ = "dragonBones.FastAnimationState";
    egret.registerClass(FastAnimationState,"dragonBones.FastAnimationState",["dragonBones.IAnimationState"]);
})(dragonBones || (dragonBones = {}));
