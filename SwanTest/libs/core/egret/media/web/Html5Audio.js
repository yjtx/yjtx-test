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
    var web;
    (function (web) {
        /**
         * @private
         */
        var Html5Audio = (function () {
            /**
             * @private
             * audio音频对象
             * @member {any} egret.Sound#audio
             */
            function Html5Audio() {
                /**
                 * @private
                 */
                this._loop = false;
                /**
                 * @private
                 */
                this.paused = true;
                /**
                 * @private
                 */
                this._listeners = [];
                /**
                 * @private
                 */
                this._onEndedCall = null;
                /**
                 * @private
                 */
                this._volume = 1;
                /**
                 * @private
                 */
                this._startTime = 0;
            }
            var __egretProto__ = Html5Audio.prototype;
            /**
             * @private
             * 播放声音
             * @method egret.Sound#play
             * @param loop {boolean} 是否循环播放，默认为false
             */
            __egretProto__.$play = function (type) {
                this.removeListeners();
                if (web.Html5Capatibility._audioMustLoad) {
                    this._audio.load();
                }
                this.paused = false;
                this._audio.autoplay = true;
                this._audio.volume = this._volume;
                var self = this;
                var func = function (e) {
                    self._audio.removeEventListener("ended", func);
                    if (self._onEndedCall) {
                        self._onEndedCall.call(null, e);
                    }
                    self.clear();
                };
                this._audio.addEventListener("ended", func);
                this.initStart();
                try {
                    this._audio.currentTime = this._startTime;
                }
                catch (e) {
                }
                finally {
                    this._audio.play();
                }
            };
            /**
             * @private
             *
             */
            __egretProto__.clear = function () {
                try {
                    this._audio.pause();
                }
                catch (e) {
                }
                finally {
                    this.removeListeners();
                    if (this._loop && !this.paused)
                        this.$play();
                }
            };
            /**
             * @private
             * 暂停声音
             * @method egret.Sound#pause
             */
            __egretProto__.$pause = function () {
                this.paused = true;
                this._audio.pause();
            };
            /**
             * @private
             * 重新加载声音
             * @method egret.Sound#load
             */
            __egretProto__.$load = function () {
                this._audio.load();
            };
            /**
             * @private
             *
             * @param audio
             */
            __egretProto__.$setAudio = function (audio) {
                this._audio = audio;
            };
            /**
             * @private
             *
             */
            __egretProto__.initStart = function () {
                var self = this;
                for (var i = 0; i < self._listeners.length; i++) {
                    var bin = self._listeners[i];
                    this._audio.addEventListener(bin.type, bin.listener, bin.useCapture);
                }
            };
            /**
             * @private
             * 添加事件监听
             * @param type 事件类型
             * @param listener 监听函数
             */
            __egretProto__.$addEventListener = function (type, listener, useCapture) {
                if (useCapture === void 0) { useCapture = false; }
                if (type == "ended") {
                    this._onEndedCall = listener;
                    return;
                }
                this._listeners.push({ type: type, listener: listener, useCapture: useCapture });
                if (this._audio) {
                    this._audio.addEventListener(type, listener, useCapture);
                }
            };
            /**
             * @private
             *
             */
            __egretProto__.removeListeners = function () {
                var self = this;
                for (var i = 0; i < self._listeners.length; i++) {
                    var bin = self._listeners[i];
                    if (this._audio) {
                        this._audio.removeEventListener(bin.type, bin.listener, bin.useCapture);
                    }
                }
            };
            /**
             * @private
             * 移除事件监听
             * @param type 事件类型
             * @param listener 监听函数
             */
            __egretProto__.$removeEventListener = function (type, listener, useCapture) {
                if (useCapture === void 0) { useCapture = false; }
                if (type == "ended") {
                    this._onEndedCall = null;
                    return;
                }
                var self = this;
                for (var i = 0; i < self._listeners.length; i++) {
                    var bin = self._listeners[i];
                    if (bin.listener == listener && bin.useCapture == useCapture && bin.type == type) {
                        self._listeners.splice(i, 1);
                        if (this._audio) {
                            this._audio.removeEventListener(type, listener, useCapture);
                        }
                        break;
                    }
                }
            };
            /**
             * @private
             *
             * @param type
             * @param callback
             * @param thisObj
             */
            __egretProto__.$preload = function (type, callback, thisObj) {
                if (callback === void 0) { callback = null; }
                if (thisObj === void 0) { thisObj = null; }
                egret.callLater(callback, thisObj);
            };
            /**
             * @private
             *
             */
            __egretProto__.$destroy = function () {
            };
            /**
             * @private
             * 获取当前音量值
             * @returns number
             */
            __egretProto__.$getVolume = function () {
                return this._volume;
            };
            /**
             * @private
             *
             * @param value
             */
            __egretProto__.$setVolume = function (value) {
                this._volume = Math.max(0, Math.min(value, 1));
                this._audio.volume = this._volume;
            };
            /**
             * @private
             *
             * @param value
             */
            __egretProto__.$setLoop = function (value) {
                this._loop = value;
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.$getCurrentTime = function () {
                return this._audio.currentTime;
            };
            /**
             * @private
             *
             * @param value
             */
            __egretProto__.$setCurrentTime = function (value) {
                this._startTime = value;
            };
            /**
             * @private
             *
             * @param virtualUrl
             * @param callback
             */
            __egretProto__.$loadByUrl = function (virtualUrl, callback) {
                var audio = new window["Audio"](virtualUrl);
                audio["$timeoutId"] = egret.setTimeout(soundPreloadCanplayHandler, this, 100);
                audio.addEventListener('canplaythrough', soundPreloadCanplayHandler, false);
                audio.addEventListener("error", soundPreloadErrorHandler, false);
                audio.load();
                var self = this;
                function soundPreloadCanplayHandler(e) {
                    egret.clearTimeout(audio["$timeoutId"]);
                    audio.removeEventListener('canplaythrough', soundPreloadCanplayHandler, false);
                    audio.removeEventListener("error", soundPreloadErrorHandler, false);
                    self.$setAudio(audio);
                    callback(0);
                }
                function soundPreloadErrorHandler(event) {
                    egret.clearTimeout(audio["$timeoutId"]);
                    audio.removeEventListener('canplaythrough', soundPreloadCanplayHandler, false);
                    audio.removeEventListener("error", soundPreloadErrorHandler, false);
                    callback(1);
                }
            };
            return Html5Audio;
        })();
        web.Html5Audio = Html5Audio;
        Html5Audio.prototype.__class__ = "egret.web.Html5Audio";
        egret.registerClass(Html5Audio,"egret.web.Html5Audio",["egret.Audio"]);
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
