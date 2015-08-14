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
     * @version Egret 2.0
     * @platform Web,Native
     */
    var Ticker = (function (_super) {
        __extends(Ticker, _super);
        /**
         * @version Egret 2.0
         * @platform Web,Native
         */
        function Ticker() {
            _super.call(this);
            if (Ticker.instance != null) {
                if (DEBUG) {
                    egret.$error(1033);
                }
            }
        }
        var __egretProto__ = Ticker.prototype;
        /**
         * 注册帧回调事件，同一函数的重复监听会被忽略。
         * @method egret.Ticker#register
         * @param listener {Function} 帧回调函数,参数返回上一帧和这帧的间隔时间。示例：onEnterFrame(frameTime:number):void
         * @param thisObject {any} 帧回调函数的this对象
         * @param priority {number} 事件优先级，开发者请勿传递 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.register = function (callBack, thisObject, priority) {
            if (priority === void 0) { priority = 0; }
            egret.sys.$ticker.$startTick(callBack, thisObject);
        };
        /**
         * 取消侦听enterFrame事件
         * @method egret.Ticker#unregister
         * @param listener {Function} 事件侦听函数
         * @param thisObject {any} 侦听函数的this对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.unregister = function (callBack, thisObject) {
            egret.sys.$ticker.$stopTick(callBack, thisObject);
        };
        /**
         * @method egret.Ticker.getInstance
         * @returns {Ticker}
         * @version Egret 2.0
         * @platform Web,Native
         */
        Ticker.getInstance = function () {
            if (Ticker.instance == null) {
                Ticker.instance = new Ticker();
            }
            return Ticker.instance;
        };
        return Ticker;
    })(egret.EventDispatcher);
    egret.Ticker = Ticker;
    Ticker.prototype.__class__ = "egret.Ticker";
    egret.registerClass(Ticker,"egret.Ticker");
})(egret || (egret = {}));
var egret;
(function (egret) {
    var sys;
    (function (sys) {
        /**
         * @private
         * 心跳计时器单例
         */
        sys.$ticker;
        /**
         * @private
         * 是否要广播Event.RENDER事件的标志。
         */
        sys.$invalidateRenderFlag = false;
        /**
         * @private
         * 需要立即刷新屏幕的标志
         */
        sys.$requestRenderingFlag = false;
        /**
         * @private
         * Egret心跳计时器
         */
        var SystemTicker = (function () {
            /**
             * @private
             */
            function SystemTicker() {
                /**
                 * @private
                 */
                this.lastTime = 0;
                /**
                 * @private
                 */
                this.playerList = [];
                /**
                 * @private
                 */
                this.callBackList = [];
                /**
                 * @private
                 */
                this.thisObjectList = [];
                /**
                 * @private
                 * 全局帧率
                 */
                this.$frameRate = 30;
                /**
                 * @private
                 */
                this.frameInterval = 2000;
                /**
                 * @private
                 */
                this.lastCount = 2000;
                if (DEBUG && sys.$ticker) {
                    egret.$error(1008, "egret.sys.SystemTicker");
                }
                egret.$START_TIME = Date.now();
                this.lastTime = 0;
            }
            var __egretProto__ = SystemTicker.prototype;
            /**
             * @private
             * 注册一个播放器实例并运行
             */
            __egretProto__.$addPlayer = function (player) {
                if (this.playerList.indexOf(player) != -1) {
                    return;
                }
                if (DEBUG) {
                    egret_stages.push(player.stage);
                }
                this.playerList = this.playerList.concat();
                this.playerList.push(player);
            };
            /**
             * @private
             * 停止一个播放器实例的运行。
             */
            __egretProto__.$removePlayer = function (player) {
                var index = this.playerList.indexOf(player);
                if (index !== -1) {
                    if (DEBUG) {
                        var i = egret_stages.indexOf(player.stage);
                        egret_stages.splice(i, 1);
                    }
                    this.playerList = this.playerList.concat();
                    this.playerList.splice(index, 1);
                }
            };
            /**
             * @private
             */
            __egretProto__.$startTick = function (callBack, thisObject) {
                var index = this.getTickIndex(callBack, thisObject);
                if (index != -1) {
                    return;
                }
                this.concatTick();
                this.callBackList.push(callBack);
                this.thisObjectList.push(thisObject);
            };
            /**
             * @private
             */
            __egretProto__.$stopTick = function (callBack, thisObject) {
                var index = this.getTickIndex(callBack, thisObject);
                if (index == -1) {
                    return;
                }
                this.concatTick();
                this.callBackList.splice(index, 1);
                this.thisObjectList.splice(index, 1);
            };
            /**
             * @private
             */
            __egretProto__.getTickIndex = function (callBack, thisObject) {
                var callBackList = this.callBackList;
                var thisObjectList = this.thisObjectList;
                for (var i = callBackList.length - 1; i >= 0; i--) {
                    if (callBackList[i] == callBack && thisObjectList[i] == thisObject) {
                        return i;
                    }
                }
                return -1;
            };
            /**
             * @private
             *
             */
            __egretProto__.concatTick = function () {
                this.callBackList = this.callBackList.concat();
                this.thisObjectList = this.thisObjectList.concat();
            };
            /**
             * @private
             * 设置全局帧率
             */
            __egretProto__.$setFrameRate = function (value) {
                //value = +value || 0;
                if (value <= 0) {
                    return;
                }
                if (this.$frameRate == value) {
                    return;
                }
                this.$frameRate = value;
                if (value > 60) {
                    value = 60;
                }
                //这里用60*1000来避免浮点数计算不准确的问题。
                this.lastCount = this.frameInterval = Math.round(60000 / value);
            };
            /**
             * @private
             * 执行一次刷新
             */
            __egretProto__.update = function () {
                var callBackList = this.callBackList;
                var thisObjectList = this.thisObjectList;
                var length = callBackList.length;
                var requestRenderingFlag = sys.$requestRenderingFlag;
                var timeStamp = egret.getTimer();
                var advancedTime = timeStamp - this.lastTime;
                this.lastTime = timeStamp;
                for (var i = 0; i < length; i++) {
                    if (!callBackList[i].call(thisObjectList[i], advancedTime)) {
                        requestRenderingFlag = true;
                    }
                }
                this.lastCount -= 1000;
                if (this.lastCount > 0) {
                    if (requestRenderingFlag) {
                        this.render(false);
                    }
                    return;
                }
                this.lastCount += this.frameInterval;
                this.render(true);
                this.broadcastEnterFrame();
            };
            /**
             * @private
             * 执行一次屏幕渲染
             */
            __egretProto__.render = function (triggerByFrame) {
                var playerList = this.playerList;
                var length = playerList.length;
                if (length == 0) {
                    return;
                }
                if (sys.$invalidateRenderFlag) {
                    this.broadcastRender();
                    sys.$invalidateRenderFlag = false;
                }
                for (var i = 0; i < length; i++) {
                    playerList[i].$render(triggerByFrame);
                }
                sys.$requestRenderingFlag = false;
            };
            /**
             * @private
             * 广播EnterFrame事件。
             */
            __egretProto__.broadcastEnterFrame = function () {
                var list = egret.DisplayObject.$enterFrameCallBackList;
                var length = list.length;
                if (length == 0) {
                    return;
                }
                list = list.concat();
                for (var i = 0; i < length; i++) {
                    list[i].dispatchEventWith(egret.Event.ENTER_FRAME);
                }
                list = egret.Recycler._callBackList;
                for (i = list.length - 1; i >= 0; i--) {
                    list[i].$checkFrame();
                }
            };
            /**
             * @private
             * 广播Render事件。
             */
            __egretProto__.broadcastRender = function () {
                var list = egret.DisplayObject.$renderCallBackList;
                var length = list.length;
                if (length == 0) {
                    return;
                }
                list = list.concat();
                for (var i = 0; i < length; i++) {
                    list[i].dispatchEventWith(egret.Event.RENDER);
                }
            };
            return SystemTicker;
        })();
        sys.SystemTicker = SystemTicker;
        SystemTicker.prototype.__class__ = "egret.sys.SystemTicker";
        egret.registerClass(SystemTicker,"egret.sys.SystemTicker");
    })(sys = egret.sys || (egret.sys = {}));
})(egret || (egret = {}));
if (DEBUG) {
    var egret_stages = [];
}
