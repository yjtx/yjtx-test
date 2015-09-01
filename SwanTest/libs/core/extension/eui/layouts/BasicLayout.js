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
var eui;
(function (eui) {
    /**
     * @language en_US
     * The BasicLayout class arranges the layout elements according to their individual settings,
     * independent of each-other. BasicLayout, also called absolute layout, requires that you
     * explicitly position each container child.
     * You can use the <code>x</code> and <code>y</code> properties of the child,
     * or constraints to position each child.
     *
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/layout/BasicLayoutExample.ts
     */
    /**
     * @language zh_CN
     * BasicLayout 类根据其各个设置彼此独立地排列布局元素。
     * BasicLayout（也称为绝对布局）要求显式定位每个容器子代。
     * 可以使用子代的 <code>x</code> 和 <code>y</code> 属性，或使用约束来定位每个子代。
     *
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/layout/BasicLayoutExample.ts
     */
    var BasicLayout = (function (_super) {
        __extends(BasicLayout, _super);
        /**
         * @language en_US
         * Constructor.
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        function BasicLayout() {
            _super.call(this);
        }
        var __egretProto__ = BasicLayout.prototype;
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.measure = function () {
            _super.prototype.measure.call(this);
            eui.sys.measure(this.$target);
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
            var target = this.$target;
            var pos = eui.sys.updateDisplayList(target, unscaledWidth, unscaledHeight);
            target.setContentSize(Math.ceil(pos.x), Math.ceil(pos.y));
        };
        return BasicLayout;
    })(eui.LayoutBase);
    eui.BasicLayout = BasicLayout;
    BasicLayout.prototype.__class__ = "eui.BasicLayout";
    egret.registerClass(BasicLayout,"eui.BasicLayout");
    if (DEBUG) {
        Object.defineProperty(BasicLayout.prototype, "useVirtualLayout", {
            /**
             * 此布局不支持虚拟布局，设置这个属性无效
             */
            get: function () {
                return this.$useVirtualLayout;
            },
            set: function (value) {
                egret.$error(2201);
            },
            enumerable: true,
            configurable: true
        });
    }
})(eui || (eui = {}));
var eui;
(function (eui) {
    var sys;
    (function (sys) {
        var UIComponentClass = "eui.UIComponent";
        /**
         * @private
         * 一个工具方法，使用BasicLayout规则测量目标对象。
         */
        function measure(target) {
            if (!target) {
                return;
            }
            var width = 0;
            var height = 0;
            var bounds = egret.$TempRectangle;
            var count = target.numChildren;
            for (var i = 0; i < count; i++) {
                var layoutElement = (target.getChildAt(i));
                if (!egret.is(layoutElement, UIComponentClass) || !layoutElement.$includeInLayout) {
                    continue;
                }
                var values = layoutElement.$UIComponent;
                var hCenter = values[4 /* horizontalCenter */];
                var vCenter = values[5 /* verticalCenter */];
                var left = values[0 /* left */];
                var right = values[1 /* right */];
                var top = values[2 /* top */];
                var bottom = values[3 /* bottom */];
                var extX;
                var extY;
                layoutElement.getPreferredBounds(bounds);
                if (!isNaN(left) && !isNaN(right)) {
                    extX = left + right;
                }
                else if (!isNaN(hCenter)) {
                    extX = Math.abs(hCenter) * 2;
                }
                else if (!isNaN(left) || !isNaN(right)) {
                    extX = isNaN(left) ? 0 : left;
                    extX += isNaN(right) ? 0 : right;
                }
                else {
                    extX = bounds.x;
                }
                if (!isNaN(top) && !isNaN(bottom)) {
                    extY = top + bottom;
                }
                else if (!isNaN(vCenter)) {
                    extY = Math.abs(vCenter) * 2;
                }
                else if (!isNaN(top) || !isNaN(bottom)) {
                    extY = isNaN(top) ? 0 : top;
                    extY += isNaN(bottom) ? 0 : bottom;
                }
                else {
                    extY = bounds.y;
                }
                var preferredWidth = bounds.width;
                var preferredHeight = bounds.height;
                width = Math.ceil(Math.max(width, extX + preferredWidth));
                height = Math.ceil(Math.max(height, extY + preferredHeight));
            }
            target.setMeasuredSize(width, height);
        }
        sys.measure = measure;
        /**
         * @private
         * 一个工具方法，使用BasicLayout规则布局目标对象。
         */
        function updateDisplayList(target, unscaledWidth, unscaledHeight) {
            if (!target)
                return;
            var count = target.numChildren;
            var maxX = 0;
            var maxY = 0;
            var bounds = egret.$TempRectangle;
            for (var i = 0; i < count; i++) {
                var layoutElement = (target.getChildAt(i));
                if (!egret.is(layoutElement, UIComponentClass) || !layoutElement.$includeInLayout) {
                    continue;
                }
                var values = layoutElement.$UIComponent;
                var hCenter = values[4 /* horizontalCenter */];
                var vCenter = values[5 /* verticalCenter */];
                var left = values[0 /* left */];
                var right = values[1 /* right */];
                var top = values[2 /* top */];
                var bottom = values[3 /* bottom */];
                var percentWidth = values[6 /* percentWidth */];
                var percentHeight = values[7 /* percentHeight */];
                var childWidth = NaN;
                var childHeight = NaN;
                if (!isNaN(left) && !isNaN(right)) {
                    childWidth = unscaledWidth - right - left;
                }
                else if (!isNaN(percentWidth)) {
                    childWidth = Math.round(unscaledWidth * Math.min(percentWidth * 0.01, 1));
                }
                if (!isNaN(top) && !isNaN(bottom)) {
                    childHeight = unscaledHeight - bottom - top;
                }
                else if (!isNaN(percentHeight)) {
                    childHeight = Math.round(unscaledHeight * Math.min(percentHeight * 0.01, 1));
                }
                layoutElement.setLayoutBoundsSize(childWidth, childHeight);
                layoutElement.getLayoutBounds(bounds);
                var elementWidth = bounds.width;
                var elementHeight = bounds.height;
                var childX = NaN;
                var childY = NaN;
                if (!isNaN(hCenter))
                    childX = Math.round((unscaledWidth - elementWidth) / 2 + hCenter);
                else if (!isNaN(left))
                    childX = left;
                else if (!isNaN(right))
                    childX = unscaledWidth - elementWidth - right;
                else
                    childX = bounds.x;
                if (!isNaN(vCenter))
                    childY = Math.round((unscaledHeight - elementHeight) / 2 + vCenter);
                else if (!isNaN(top))
                    childY = top;
                else if (!isNaN(bottom))
                    childY = unscaledHeight - elementHeight - bottom;
                else
                    childY = bounds.y;
                layoutElement.setLayoutBoundsPosition(childX, childY);
                maxX = Math.max(maxX, childX + elementWidth);
                maxY = Math.max(maxY, childY + elementHeight);
            }
            return egret.$TempPoint.setTo(maxX, maxY);
        }
        sys.updateDisplayList = updateDisplayList;
    })(sys = eui.sys || (eui.sys = {}));
})(eui || (eui = {}));
