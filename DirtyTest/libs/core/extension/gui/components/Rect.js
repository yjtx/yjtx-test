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
         * @class egret.gui.Rect
         * @classdesc
         * 矩形绘图元素。此组件可响应鼠标事件。
         * @extends egret.gui.UIComponent
         */
        var Rect = (function (_super) {
            __extends(Rect, _super);
            /**
             * 构造函数
             * @method egret.gui.Rect#constructor
             */
            function Rect() {
                _super.call(this);
                this._fillColor = 0xFFFFFF;
                this._fillAlpha = 1;
                this._strokeColor = 0x444444;
                this._strokeAlpha = 0;
                this._strokeWeight = 1;
                this.touchChildren = false;
                this.$renderRegion = new egret.sys.Region();
            }
            var __egretProto__ = Rect.prototype;
            Object.defineProperty(__egretProto__, "graphics", {
                get: function () {
                    if (!this.$graphics) {
                        this.$graphics = new egret.Graphics();
                        this.$graphics.$renderContext.$targetDisplay = this;
                    }
                    return this.$graphics;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.$render = function (context) {
                if (this.$graphics)
                    this.$graphics.$render(context);
                _super.prototype.$render.call(this, context);
            };
            __egretProto__.$hitTest = function (stageX, stageY) {
                var target = _super.prototype.$hitTest.call(this, stageX, stageY);
                if (target == this) {
                    target = this.$graphics.$hitTest(stageX, stageY);
                }
                return target;
            };
            /**
             * @private
             */
            __egretProto__.$measureContentBounds = function (bounds) {
                if (this.$graphics) {
                    this.$graphics.$measureContentBounds(bounds);
                }
            };
            Object.defineProperty(__egretProto__, "fillColor", {
                /**
                 * 填充颜色
                 * @member egret.gui.Rect#fillColor
                 */
                get: function () {
                    return this._fillColor;
                },
                set: function (value) {
                    if (this._fillColor == value)
                        return;
                    this._fillColor = value;
                    this.invalidateDisplayList();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "fillAlpha", {
                /**
                 * 填充透明度,默认值为0。
                 * @member egret.gui.Rect#fillAlpha
                 */
                get: function () {
                    return this._fillAlpha;
                },
                set: function (value) {
                    if (this._fillAlpha == value)
                        return;
                    this._fillAlpha = value;
                    this.invalidateDisplayList();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "strokeColor", {
                /**
                 * 边框颜色,注意：当strokeAlpha为0时，不显示边框。
                 * @member egret.gui.Rect#strokeColor
                 */
                get: function () {
                    return this._strokeColor;
                },
                set: function (value) {
                    if (this._strokeColor == value)
                        return;
                    this._strokeColor = value;
                    this.invalidateDisplayList();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "strokeAlpha", {
                /**
                 * 边框透明度，默认值为0。
                 * @member egret.gui.Rect#strokeAlpha
                 */
                get: function () {
                    return this._strokeAlpha;
                },
                set: function (value) {
                    if (this._strokeAlpha == value)
                        return;
                    this._strokeAlpha = value;
                    this.invalidateDisplayList();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "strokeWeight", {
                /**
                 * 边框粗细(像素),注意：当strokeAlpha为0时，不显示边框。
                 * @member egret.gui.Rect#strokeWeight
                 */
                get: function () {
                    return this._strokeWeight;
                },
                set: function (value) {
                    if (this._strokeWeight == value)
                        return;
                    this._strokeWeight = value;
                    this.invalidateDisplayList();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @see egret.DisplayObject.measureBounds
             * @returns {Rectangle}
             * @private
             */
            //public _measureBounds():egret.Rectangle {
            //    var bounds:Rectangle = super._measureBounds();
            //    var w:number = this.width;
            //    var h:number = this.height;
            //    var x:number = 0;
            //    var y:number = 0;
            //    if (x < bounds.x) {
            //        bounds.x = x;
            //    }
            //    if (y < bounds.y) {
            //        bounds.y = y;
            //    }
            //    if (x + w > bounds.right) {
            //        bounds.right = x + w;
            //    }
            //    if (y + h > bounds.bottom) {
            //        bounds.bottom = y + h;
            //    }
            //    return bounds;
            //}
            /**
             * 绘制对象和/或设置其子项的大小和位置
             * @method egret.gui.Rect#updateDisplayList
             * @param unscaledWidth {number}
             * @param unscaledHeight {number}
             */
            __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
                _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledWidth);
                var g = this.graphics;
                g.clear();
                g.beginFill(this._fillColor, this._fillAlpha);
                if (this._strokeAlpha > 0) {
                    g.lineStyle(this._strokeWeight, this._strokeColor, this._strokeAlpha, true, "normal", "square", "miter");
                }
                g.drawRect(0, 0, unscaledWidth, unscaledHeight);
                g.endFill();
            };
            return Rect;
        })(gui.UIComponent);
        gui.Rect = Rect;
        Rect.prototype.__class__ = "egret.gui.Rect";
        egret.registerClass(Rect,"egret.gui.Rect");
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
