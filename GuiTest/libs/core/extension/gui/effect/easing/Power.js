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
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.Power
         * @classdesc
         * Power 类通过使用多项式表达式定义缓动功能。
         * @extends egret.gui.EaseInOutBase
         */
        var Power = (function (_super) {
            __extends(Power, _super);
            /**
             * @param easeInFraction 在加速阶段中整个持续时间的部分，在 0.0 和 1.0 之间。
             * @param exponent 在缓动计算中使用的指数。exponent 属性的值越大，加速和减速的速率越快。
             * @method egret.gui.Power#constructor
             */
            function Power(easeInFraction, exponent) {
                if (easeInFraction === void 0) { easeInFraction = 0.5; }
                if (exponent === void 0) { exponent = 2; }
                _super.call(this, easeInFraction);
                this.exponent = exponent;
            }
            var __egretProto__ = Power.prototype;
            Object.defineProperty(__egretProto__, "exponent", {
                /**
                 * 在缓动计算中使用的指数。exponent 属性的值越大，加速和减速的速率越快。
                 */
                get: function () {
                    return this._exponent;
                },
                set: function (value) {
                    this._exponent = value;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @inheritDoc
             */
            __egretProto__._easeIn = function (fraction) {
                return Math.pow(fraction, this._exponent);
            };
            /**
             * @inheritDoc
             */
            __egretProto__._easeOut = function (fraction) {
                return 1 - Math.pow((1 - fraction), this._exponent);
            };
            return Power;
        })(gui.EaseInOutBase);
        gui.Power = Power;
        Power.prototype.__class__ = "egret.gui.Power";
        egret.registerClass(Power,"egret.gui.Power");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
