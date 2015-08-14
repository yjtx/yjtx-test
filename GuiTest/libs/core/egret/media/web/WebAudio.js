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
        var WebAudio = (function () {
            /**
             * @private
             */
            function WebAudio() {
                /**
                 * @private
                 */
                this.context = WebAudio.ctx;
                /**
                 * @private
                 */
                this.bufferSource = null;
                /**
                 * @private
                 */
                this.paused = true;
                /**
                 * @private
                 */
                this._loop = false;
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
                /**
                 * @private
                 */
                this._currentTime = 0;
                if (WebAudio.ctx["createGain"]) {
                    this.gain = WebAudio.ctx["createGain"]();
                }
                else {
                    this.gain = WebAudio.ctx["createGainNode"]();
                }
            }
            var __egretProto__ = WebAudio.prototype;
            /**
             * @private
             *
             */
            WebAudio.decodeAudios = function () {
                if (WebAudio.decodeArr.length <= 0) {
                    return;
                }
                if (WebAudio.isDecoding) {
                    return;
                }
                WebAudio.isDecoding = true;
                var decodeInfo = WebAudio.decodeArr.shift();
                WebAudio.ctx.decodeAudioData(decodeInfo["buffer"], function (audioBuffer) {
                    decodeInfo["self"].audioBuffer = audioBuffer;
                    if (decodeInfo["callback"]) {
                        decodeInfo["callback"]();
                    }
                    WebAudio.isDecoding = false;
                    WebAudio.decodeAudios();
                });
            };
            /**
             * @private
             * 播放声音
             * @method egret.Sound#play
             * @param loop {boolean} 是否循环播放，默认为false
             */
            __egretProto__.$play = function (type) {
                var _this = this;
                if (this.bufferSource) {
                    //this.clear();
                    this.bufferSource.onended = null;
                    this.removeListeners();
                    this.bufferSource = null;
                }
                var context = this.context;
                var gain = this.gain;
                var bufferSource = context.createBufferSource();
                this.bufferSource = bufferSource;
                this.addListeners();
                bufferSource.buffer = this.audioBuffer;
                bufferSource.connect(gain);
                gain.connect(context.destination);
                bufferSource.onended = function (e) {
                    _this.clear();
                    if (_this._onEndedCall) {
                        _this._onEndedCall.call(null, e);
                    }
                    if (_this._loop && !_this.paused)
                        _this.$play();
                };
                this.paused = false;
                this._startTime = Date.now();
                this.gain.gain.value = this._volume;
                bufferSource.start(0, this._currentTime);
                this._currentTime = 0;
            };
            /**
             * @private
             *
             */
            __egretProto__.clear = function () {
                if (this.bufferSource) {
                    this.removeListeners();
                    var sourceNode = this.bufferSource;
                    if (sourceNode.stop) {
                        sourceNode.stop(0);
                    }
                    else {
                        sourceNode.noteOff(0);
                    }
                    this.bufferSource.disconnect();
                    this.bufferSource = null;
                }
            };
            /**
             * @private
             *
             */
            __egretProto__.addListeners = function () {
                var self = this;
                for (var i = 0; i < self._listeners.length; i++) {
                    var bin = self._listeners[i];
                    this.bufferSource.addEventListener(bin.type, bin.listener, bin.useCapture);
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
                    this.bufferSource.removeEventListener(bin.type, bin.listener, bin.useCapture);
                }
            };
            /**
             * @private
             * 暂停声音
             * @method egret.Sound#pause
             */
            __egretProto__.$pause = function () {
                this.paused = true;
                this.clear();
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
                if (this.bufferSource) {
                    this.bufferSource.addEventListener(type, listener, useCapture);
                }
            };
            /**s
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
                        if (this.bufferSource) {
                            this.bufferSource.removeEventListener(type, listener, useCapture);
                        }
                        break;
                    }
                }
            };
            /**
             * @private
             * 重新加载声音
             * @method egret.Sound#load
             */
            __egretProto__.$load = function () {
                this._setArrayBuffer(this._arrayBuffer, null);
            };
            /**
             * @private
             *
             * @param buffer
             * @param callback
             */
            __egretProto__._setArrayBuffer = function (buffer, callback) {
                var self = this;
                this._arrayBuffer = buffer;
                WebAudio.decodeArr.push({ "buffer": buffer, "callback": callback, "self": self });
                WebAudio.decodeAudios();
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
                this._volume = value;
                this.gain.gain.value = value;
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
                if (this.bufferSource) {
                    return (Date.now() - this._startTime) / 1000;
                }
                return 0;
            };
            /**
             * @private
             *
             * @param value
             */
            __egretProto__.$setCurrentTime = function (value) {
                this._currentTime = value;
            };
            /**
             * @private
             *
             */
            __egretProto__.$destroy = function () {
            };
            /**
             * @private
             *
             * @param virtualUrl
             * @param callback
             */
            __egretProto__.$loadByUrl = function (virtualUrl, callback) {
                var request = new XMLHttpRequest();
                request.open("GET", virtualUrl, true);
                request.responseType = "arraybuffer";
                console.log("loadWebAudio");
                var self = this;
                request.onload = function () {
                    self._setArrayBuffer(request.response, function () {
                        callback(0);
                    });
                };
                request.send();
            };
            /**
             * @private
             */
            WebAudio.canUseWebAudio = window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"];
            /**
             * @private
             */
            WebAudio.ctx = WebAudio.canUseWebAudio ? new (window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"])() : undefined;
            /**
             * @private
             */
            WebAudio.decodeArr = [];
            /**
             * @private
             */
            WebAudio.isDecoding = false;
            return WebAudio;
        })();
        web.WebAudio = WebAudio;
        WebAudio.prototype.__class__ = "egret.web.WebAudio";
        egret.registerClass(WebAudio,"egret.web.WebAudio",["egret.Audio"]);
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
