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
    var native;
    (function (native) {
        /**
         * @private
         * @inheritDoc
         */
        var NativeSound = (function (_super) {
            __extends(NativeSound, _super);
            /**
             * @private
             * @inheritDoc
             */
            function NativeSound() {
                _super.call(this);
                /**
                 * @private
                 */
                this.loaded = false;
            }
            var __egretProto__ = NativeSound.prototype;
            /**
             * @inheritDoc
             */
            __egretProto__.load = function (url) {
                var self = this;
                if (DEBUG && !url) {
                    egret.$error(3002);
                }
                var promise = egret.PromiseObject.create();
                promise.onSuccessFunc = onAudioLoaded;
                promise.onErrorFunc = onAudioError;
                egret_native.download(url, url, promise);
                function onAudioLoaded() {
                    self.loaded = true;
                    self.dispatchEventWith(egret.Event.COMPLETE);
                }
                function onAudioError() {
                    self.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
                }
            };
            __egretProto__.preload = function (type, callback, thisObj) {
                if (callback === void 0) { callback = null; }
                if (thisObj === void 0) { thisObj = null; }
                this.type = type;
                if (this.type == egret.Sound.MUSIC) {
                    egret_native.Audio.preloadBackgroundMusic(this.url);
                    if (callback) {
                        egret.callLater(callback, thisObj);
                    }
                }
                else if (this.type == egret.Sound.EFFECT) {
                    var promise = new egret.PromiseObject();
                    promise.onSuccessFunc = function (soundId) {
                        if (callback) {
                            callback.call(thisObj);
                        }
                    };
                    egret_native.Audio.preloadEffectAsync(this.url, promise);
                }
            };
            /**
             * @inheritDoc
             */
            __egretProto__.play = function (startTime, loops) {
                startTime = +startTime || 0;
                loops = +loops || 0;
                if (DEBUG && this.loaded == false) {
                    egret.$error(3001);
                }
                var channel = new native.NativeSoundChannel();
                channel.$url = this.url;
                channel.$loops = loops;
                channel.$startTime = startTime;
                channel.$type = this.type;
                channel.$play();
                return channel;
            };
            /**
             * @inheritDoc
             */
            __egretProto__.close = function () {
            };
            __egretProto__.destroy = function () {
                this.loaded = false;
                if (this.type == egret.Sound.EFFECT) {
                    egret_native.Audio.unloadEffect(this.url);
                }
                else if (egret_native_sound.currentPath == this.url) {
                    egret_native.Audio.stopBackgroundMusic(true);
                }
            };
            /**
             * @language en_US
             * Background music
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 背景音乐
             * @version Egret 2.0
             * @platform Web,Native
             */
            NativeSound.MUSIC = "music";
            /**
             * @language en_US
             * EFFECT
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 音效
             * @version Egret 2.0
             * @platform Web,Native
             */
            NativeSound.EFFECT = "effect";
            return NativeSound;
        })(egret.EventDispatcher);
        native.NativeSound = NativeSound;
        NativeSound.prototype.__class__ = "egret.native.NativeSound";
        egret.registerClass(NativeSound,"egret.native.NativeSound",["egret.Sound"]);
        egret.Sound = NativeSound;
    })(native = egret.native || (egret.native = {}));
})(egret || (egret = {}));
