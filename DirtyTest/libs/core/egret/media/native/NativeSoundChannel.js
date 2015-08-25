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
var egret_native_sound;
(function (egret_native_sound) {
    egret_native_sound.currentPath = "";
})(egret_native_sound || (egret_native_sound = {}));
var egret;
(function (egret) {
    var native;
    (function (native) {
        /**
         * @private
         * @inheritDoc
         */
        var NativeSoundChannel = (function (_super) {
            __extends(NativeSoundChannel, _super);
            /**
             * @private
             */
            function NativeSoundChannel() {
                var _this = this;
                _super.call(this);
                /**
                 * @private
                 */
                this.$startTime = 0;
                /**
                 * @private
                 */
                this.onPlayEnd = function () {
                    if (_this.$loops == 1) {
                        _this.stop();
                        _this.dispatchEventWith(egret.Event.SOUND_COMPLETE);
                        return;
                    }
                    if (_this.$loops > 0) {
                        _this.$loops--;
                    }
                    /////////////
                    _this.$play();
                };
                /**
                 * @private
                 */
                this._startTime = 0;
            }
            var __egretProto__ = NativeSoundChannel.prototype;
            __egretProto__.$play = function () {
                var self = this;
                this._startTime = Date.now();
                if (this.$type == egret.Sound.MUSIC) {
                    egret_native_sound.currentPath = this.$url;
                    egret_native.Audio.playBackgroundMusic(this.$url, this.$loops > 0);
                }
                else if (this.$type == egret.Sound.EFFECT) {
                    this._effectId = egret_native.Audio.playEffect(this.$url, this.$loops > 0);
                }
            };
            /**
             * @private
             * @inheritDoc
             */
            __egretProto__.stop = function () {
                if (this.$type == egret.Sound.MUSIC) {
                    if (this.$url == egret_native_sound.currentPath) {
                        egret_native.Audio.stopBackgroundMusic(false);
                    }
                }
                else if (this.$type == egret.Sound.EFFECT) {
                    if (this._effectId) {
                        egret_native.Audio.stopEffect(this._effectId);
                        this._effectId = null;
                    }
                }
                this.dispatchEventWith(egret.Event.SOUND_COMPLETE);
            };
            Object.defineProperty(__egretProto__, "volume", {
                /**
                 * @private
                 * @inheritDoc
                 */
                get: function () {
                    return 1;
                },
                /**
                 * @inheritDoc
                 */
                set: function (value) {
                    //this.audio.volume = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "position", {
                /**
                 * @private
                 * @inheritDoc
                 */
                get: function () {
                    return Math.floor((Date.now() - this._startTime));
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.$destroy = function () {
                if (this.$type == egret.Sound.EFFECT) {
                    egret_native.Audio.unloadEffect(this.$url);
                }
                else if (egret_native_sound.currentPath == this.$url) {
                    egret_native.Audio.stopBackgroundMusic(true);
                }
            };
            return NativeSoundChannel;
        })(egret.EventDispatcher);
        native.NativeSoundChannel = NativeSoundChannel;
        NativeSoundChannel.prototype.__class__ = "egret.native.NativeSoundChannel";
        egret.registerClass(NativeSoundChannel,"egret.native.NativeSoundChannel",["egret.SoundChannel","egret.IEventDispatcher"]);
    })(native = egret.native || (egret.native = {}));
})(egret || (egret = {}));
