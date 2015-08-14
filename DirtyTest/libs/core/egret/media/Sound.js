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
     * @language en_US
     * The Sound class lets you work with sound in an application.
     * The Sound class lets you create a Sound object, load and play an external audio file into that object.
     * More detailed control of the sound is performed through the SoundChannel
     *
     * @event egret.Event.COMPLETE Emit when the audio resource is loaded and ready to play
     * @event egret.SoundEvent.SOUND_COMPLETE 在声音完成播放后调度。
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/media/Sound.ts
     */
    /**
     * @language zh_CN
     * Sound 允许您在应用程序中使用声音。使用 Sound 类可以创建 Sound 对象、将外部音频文件加载到该对象并播放该文件。
     * 可通过 SoundChannel 对声音执行更精细的控制，如控制音量和监控播放进度。
     *
     * @event egret.Event.COMPLETE 音频加载完成时抛出
     * @event egret.SoundEvent.SOUND_COMPLETE 在声音完成播放后调度。
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/media/Sound.ts
     */
    var Sound = (function (_super) {
        __extends(Sound, _super);
        /**
         * @language en_US
         * Create egret.Sound objects
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建 egret.Sound 对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        function Sound() {
            _super.call(this);
            /**
             * @private
             * audio音频对象
             * @member {any} egret.Sound#audio
             */
            this.audio = null;
            /**
             * @language en_US
             * Type, default is egret.Sound.EFFECT.
             * In the native and runtime environment, while only play a background music, sound length so as not to be too long.
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 类型，默认为 egret.Sound.EFFECT。
             * 在 native 和 runtime 环境下，背景音乐同时只能播放一个，音效长度尽量不要太长。
             * @version Egret 2.0
             * @platform Web,Native
             */
            this.type = Sound.EFFECT;
            /**
             * @private
             */
            this.pauseTime = 0;
            /**
             * @private
             */
            this.listeners = [];
        }
        var __egretProto__ = Sound.prototype;
        Object.defineProperty(__egretProto__, "position", {
            /**
             * @language en_US
             * When playing sound, position property indicates the location of the sound file that is currently playing (in milliseconds).
             * @returns {number}
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 当播放声音时，position 属性表示声音文件中当前播放的位置（以毫秒为单位）。
             * @returns {number}
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.audio ? Math.floor(this.audio.$getCurrentTime() * 1000) : 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * Generates a new SoundChannel object to play back the sound.
         * @param loop Defines should play the audio again when the audio is ended. (default = false)
         * @param position The initial position in Millisecond at which playback should start, (default = 0)
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 生成一个新的 SoundChannel 对象来播放该声音。此方法返回 SoundChannel 对象，访问该对象可停止声音调整音量。
         * @param loop 是否需要循环播放，默认值是 false
         * @param position 应开始播放的初始位置（以毫秒为单位），默认值是 0
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.play = function (loop, position) {
            if (loop === void 0) { loop = false; }
            if (position === void 0) { position = 0; }
            var sound = this.audio;
            if (!sound) {
                return;
            }
            sound.$setCurrentTime(position / 1000);
            sound.$setLoop(loop);
            sound.$play(this.type);
        };
        /**
         * @language en_US
         * Sound stops playing
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 声音停止播放
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.stop = function () {
            var sound = this.audio;
            if (!sound) {
                return;
            }
            this.pauseTime = 0;
            sound.$setCurrentTime(0);
            sound.$pause();
        };
        /**
         * @language en_US
         * Pause sound
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 暂停声音
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.pause = function () {
            var sound = this.audio;
            if (!sound) {
                return;
            }
            this.pauseTime = sound.$getCurrentTime();
            sound.$pause();
        };
        /**
         * @language en_US
         * Continue playback from the last pause position
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 继续从上次暂停的位置播放
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.resume = function () {
            var sound = this.audio;
            if (!sound) {
                return;
            }
            sound.$setCurrentTime(this.pauseTime);
            this.pauseTime = 0;
            sound.$play(this.type);
        };
        /**
         * @language en_US
         * Reload sound
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 重新加载声音
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.load = function () {
            var sound = this.audio;
            if (!sound) {
                return;
            }
            sound.$load();
        };
        /**
         * @language en_US
         * Adding event listeners
         * @param type The type of event.
         * @param listener The listener function that processes the event. This function must accept an event object as
         * its only parameter and must return nothing, as this example shows: function(evt:Event):void  The function can
         * have any name.
         * @param thisObject the listener function's "this"
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 添加事件监听
         * @param type 事件的类型。
         * @param listener 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
         * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
         * @param thisObject 侦听函数绑定的this对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.addEventListener = function (type, listener, thisObject) {
            _super.prototype.addEventListener.call(this, type, listener, thisObject);
            var self = this;
            var sound = this.audio;
            if (!sound) {
                return;
            }
            var eventMap = this.$getEventMap();
            if (eventMap[type].length == 1) {
                var func;
                if (type == egret.SoundEvent.SOUND_COMPLETE) {
                    func = function (e) {
                        egret.SoundEvent.dispatchSoundEvent(self, egret.SoundEvent.SOUND_COMPLETE);
                    };
                }
                else {
                    func = function (e) {
                        egret.Event.dispatchEvent(self, e.type);
                    };
                }
                this.listeners.push({ type: type, func: func });
                var virtualType = self.getVirtualType(type);
                this.audio.$addEventListener(virtualType, func, false);
            }
        };
        /**
         * @language en_US
         * Remove Event Listeners
         * @param type The type of event.
         * @param listener The listener function that processes the event. This function must accept an event object as
         * its only parameter and must return nothing, as this example shows: function(evt:Event):void  The function can
         * have any name.
         * @param thisObject the listener function's "this"
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 移除事件监听
         * @param type 事件的类型。
         * @param listener 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
         * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
         * @param thisObject 侦听函数绑定的this对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.removeEventListener = function (type, listener, thisObject) {
            _super.prototype.removeEventListener.call(this, type, listener, thisObject);
            var self = this;
            var sound = this.audio;
            if (!sound) {
                return;
            }
            var eventMap = this.$getEventMap();
            if (!eventMap || !eventMap[type] || eventMap[type].length == 0) {
                for (var i = 0; i < self.listeners.length; i++) {
                    var bin = self.listeners[i];
                    if (bin.type == type) {
                        self.listeners.splice(i, 1);
                        var virtualType = self.getVirtualType(type);
                        self.audio.$removeEventListener(virtualType, bin.func, false);
                        break;
                    }
                }
            }
        };
        /**
         * @private
         *
         * @param type
         * @returns
         */
        __egretProto__.getVirtualType = function (type) {
            switch (type) {
                case egret.SoundEvent.SOUND_COMPLETE:
                    return "ended";
                default:
                    return type;
            }
        };
        Object.defineProperty(__egretProto__, "volume", {
            /**
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.audio ? this.audio.$getVolume() : 0;
            },
            /**
             * @language en_US
             * The volume, ranging from 0 (silent) to 1 (full volume).
             */
            /**
             * @language zh_CN
             * 音量范围从 0（静音）至 1（最大音量）。
             */
            set: function (value) {
                var sound = this.audio;
                if (!sound) {
                    return;
                }
                sound.$setVolume(Math.max(0, Math.min(value, 1)));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * The sound file is loaded into memory，
         * the use of native, html5 in empty achieve
         * @param type Sound Type
         * @param callback callback
         * @param thisObj Listener function to bind this object
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 将声音文件加载到内存，
         * native中使用，html5里为空实现
         * @param type 声音类型
         * @param callback 回调函数
         * @param thisObj 侦听函数绑定的this对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.preload = function (type, callback, thisObj) {
            if (callback === void 0) { callback = null; }
            if (thisObj === void 0) { thisObj = null; }
            this.type = type;
            this.audio.$preload(type, callback, thisObj);
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setAudio = function (value) {
            this.audio = value;
        };
        /**
         * @language en_US
         * The current audio release
         * the use of native, html5 in empty achieve
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 释放当前音频
         * native中使用，html5里为空实现
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.destroy = function () {
            this.audio.$destroy();
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
        Sound.MUSIC = "music";
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
        Sound.EFFECT = "effect";
        return Sound;
    })(egret.EventDispatcher);
    egret.Sound = Sound;
    Sound.prototype.__class__ = "egret.Sound";
    egret.registerClass(Sound,"egret.Sound");
})(egret || (egret = {}));
