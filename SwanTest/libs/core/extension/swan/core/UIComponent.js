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
var swan;
(function (swan) {
    var sys;
    (function (sys) {
        var UIComponentClass = "swan.UIComponent";
        function isDeltaIdentity(m) {
            return (m.a === 1 && m.b === 0 && m.c === 0 && m.d === 1);
        }
        var validator = new sys.Validator();
        /**
         * @private
         * Swan 显示对象基类模板。仅作为 UIComponent 的默认实现，为lark.sys.implemenetUIComponenet()方法提供代码模板。
         * 注意：在此类里不允许直接使用super关键字访问父类方法。一律使用this.$super属性访问。
         */
        var UIComponentImpl = (function (_super) {
            __extends(UIComponentImpl, _super);
            /**
             * @private
             * 构造函数
             */
            function UIComponentImpl() {
                _super.call(this);
                this.initializeUIValues();
            }
            var __egretProto__ = UIComponentImpl.prototype;
            /**
             * @private
             * UIComponentImpl 定义的所有变量请不要添加任何初始值，必须统一在此处初始化。
             */
            __egretProto__.initializeUIValues = function () {
                this.$UIComponent = {
                    0: NaN,
                    1: NaN,
                    2: NaN,
                    3: NaN,
                    4: NaN,
                    5: NaN,
                    6: NaN,
                    7: NaN,
                    8: NaN,
                    9: NaN,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 100000,
                    14: 0,
                    15: 100000,
                    16: 0,
                    17: 0,
                    18: NaN,
                    19: NaN,
                    20: 0,
                    21: 0,
                    22: 0,
                    23: 0,
                    24: true,
                    25: true,
                    26: true,
                    27: false,
                    28: false,
                    29: false,
                };
                this.$includeInLayout = true;
                this.$touchEnabled = true;
            };
            /**
             * @private
             * 子类覆盖此方法可以执行一些初始化子项操作。此方法仅在组件第一次添加到舞台时回调一次。
             * 请务必调用super.createChildren()以完成父类组件的初始化
             */
            __egretProto__.createChildren = function () {
            };
            /**
             * @private
             * 子项创建完成,此方法在createChildren()之后执行。
             */
            __egretProto__.childrenCreated = function () {
            };
            /**
             * @private
             * 提交属性，子类在调用完invalidateProperties()方法后，应覆盖此方法以应用属性
             */
            __egretProto__.commitProperties = function () {
                var values = this.$UIComponent;
                if (values[22 /* oldWidth */] != values[10 /* width */] || values[23 /* oldHeight */] != values[11 /* height */]) {
                    this.dispatchEventWith(egret.Event.RESIZE);
                }
                if (values[20 /* oldX */] != this.$getX() || values[21 /* oldY */] != this.$getY()) {
                    swan.UIEvent.emitUIEvent(this, swan.UIEvent.MOVE);
                }
            };
            /**
             * @private
             * 测量组件尺寸
             */
            __egretProto__.measure = function () {
            };
            /**
             * @private
             * 更新显示列表
             */
            __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            };
            Object.defineProperty(__egretProto__, "includeInLayout", {
                /**
                 * @private
                 * 指定此组件是否包含在父容器的布局中。若为false，则父级容器在测量和布局阶段都忽略此组件。默认值为true。
                 * 注意，visible属性与此属性不同，设置visible为false，父级容器仍会对其布局。
                 */
                get: function () {
                    return this.$includeInLayout;
                },
                set: function (value) {
                    value = !!value;
                    if (this.$includeInLayout === value)
                        return;
                    this.$includeInLayout = true;
                    this.invalidateParentLayout();
                    this.$includeInLayout = value;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @private
             *
             * @param stage
             * @param nestLevel
             */
            __egretProto__.$onAddToStage = function (stage, nestLevel) {
                this.$super.$onAddToStage.call(this, stage, nestLevel);
                this.checkInvalidateFlag();
                var values = this.$UIComponent;
                if (!values[29 /* initialized */]) {
                    values[29 /* initialized */] = true;
                    this.createChildren();
                    this.childrenCreated();
                    swan.UIEvent.emitUIEvent(this, swan.UIEvent.CREATION_COMPLETE);
                }
            };
            /**
             * @private
             * 检查属性失效标记并应用
             */
            __egretProto__.checkInvalidateFlag = function (event) {
                var values = this.$UIComponent;
                if (values[24 /* invalidatePropertiesFlag */]) {
                    validator.invalidateProperties(this);
                }
                if (values[25 /* invalidateSizeFlag */]) {
                    validator.invalidateSize(this);
                }
                if (values[26 /* invalidateDisplayListFlag */]) {
                    validator.invalidateDisplayList(this);
                }
            };
            Object.defineProperty(__egretProto__, "left", {
                /**
                 * @private
                 * 距父级容器离左边距离
                 */
                get: function () {
                    return this.$UIComponent[0 /* left */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[0 /* left */] === value)
                        return;
                    values[0 /* left */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "right", {
                /**
                 * @private
                 * 距父级容器右边距离
                 */
                get: function () {
                    return this.$UIComponent[1 /* right */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[1 /* right */] === value)
                        return;
                    values[1 /* right */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "top", {
                /**
                 * @private
                 * 距父级容器顶部距离
                 */
                get: function () {
                    return this.$UIComponent[2 /* top */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[2 /* top */] === value)
                        return;
                    values[2 /* top */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "bottom", {
                /**
                 * @private
                 * 距父级容器底部距离
                 */
                get: function () {
                    return this.$UIComponent[3 /* bottom */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[3 /* bottom */] == value)
                        return;
                    values[3 /* bottom */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "horizontalCenter", {
                /**
                 * @private
                 * 在父级容器中距水平中心位置的距离
                 */
                get: function () {
                    return this.$UIComponent[4 /* horizontalCenter */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[4 /* horizontalCenter */] === value)
                        return;
                    values[4 /* horizontalCenter */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "verticalCenter", {
                /**
                 * @private
                 * 在父级容器中距竖直中心位置的距离
                 */
                get: function () {
                    return this.$UIComponent[5 /* verticalCenter */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[5 /* verticalCenter */] === value)
                        return;
                    values[5 /* verticalCenter */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "percentWidth", {
                /**
                 * @private
                 * 相对父级容器宽度的百分比
                 */
                get: function () {
                    return this.$UIComponent[6 /* percentWidth */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[6 /* percentWidth */] === value)
                        return;
                    values[6 /* percentWidth */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "percentHeight", {
                /**
                 * @private
                 * 相对父级容器高度的百分比
                 */
                get: function () {
                    return this.$UIComponent[7 /* percentHeight */];
                },
                set: function (value) {
                    value = +value;
                    var values = this.$UIComponent;
                    if (values[7 /* percentHeight */] === value)
                        return;
                    values[7 /* percentHeight */] = value;
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "explicitWidth", {
                /**
                 * @private
                 * 外部显式指定的宽度
                 */
                get: function () {
                    return this.$UIComponent[8 /* explicitWidth */];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "explicitHeight", {
                /**
                 * @private
                 * 外部显式指定的高度
                 */
                get: function () {
                    return this.$UIComponent[9 /* explicitHeight */];
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @private
             * 组件宽度,默认值为lark.NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
             */
            __egretProto__.$getWidth = function () {
                this.validateSizeNow();
                return this.$UIComponent[10 /* width */];
            };
            /**
             * @private
             *
             * @param value
             */
            __egretProto__.$setWidth = function (value) {
                value = +value;
                var values = this.$UIComponent;
                if (value < 0 || values[10 /* width */] === value && values[8 /* explicitWidth */] === value)
                    return;
                values[10 /* width */] = value;
                values[8 /* explicitWidth */] = value;
                if (isNaN(value))
                    this.invalidateSize();
                this.invalidateProperties();
                this.invalidateDisplayList();
                this.invalidateParentLayout();
            };
            /**
             * @private
             * 立即验证自身的尺寸。
             */
            __egretProto__.validateSizeNow = function () {
                this.validateSize(true);
                this.updateFinalSize();
            };
            /**
             * @private
             * 组件高度,默认值为NaN,设置为NaN将使用组件的measure()方法自动计算尺寸
             */
            __egretProto__.$getHeight = function () {
                this.validateSizeNow();
                return this.$UIComponent[11 /* height */];
            };
            /**
             * @private
             *
             * @param value
             */
            __egretProto__.$setHeight = function (value) {
                value = +value;
                var values = this.$UIComponent;
                if (value < 0 || values[11 /* height */] === value && values[9 /* explicitHeight */] === value)
                    return;
                values[11 /* height */] = value;
                values[9 /* explicitHeight */] = value;
                if (isNaN(value))
                    this.invalidateSize();
                this.invalidateProperties();
                this.invalidateDisplayList();
                this.invalidateParentLayout();
            };
            /**
             * @private
             *
             * @param value
             * @returns
             */
            __egretProto__.$setScaleX = function (value) {
                var change = this.$super.$setScaleX.call(this, value);
                if (change) {
                    this.invalidateParentLayout();
                }
                return change;
            };
            /**
             * @private
             *
             * @param value
             * @returns
             */
            __egretProto__.$setScaleY = function (value) {
                var change = this.$super.$setScaleY.call(this, value);
                if (change) {
                    this.invalidateParentLayout();
                }
                return change;
            };
            Object.defineProperty(__egretProto__, "minWidth", {
                /**
                 * @private
                 * 组件的最小宽度,此属性设置为大于maxWidth的值时无效。同时影响测量和自动布局的尺寸。
                 */
                get: function () {
                    return this.$UIComponent[12 /* minWidth */];
                },
                set: function (value) {
                    value = +value || 0;
                    var values = this.$UIComponent;
                    if (value < 0 || values[12 /* minWidth */] === value) {
                        return;
                    }
                    values[12 /* minWidth */] = value;
                    this.invalidateSize();
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "maxWidth", {
                /**
                 * @private
                 * 组件的最大高度。同时影响测量和自动布局的尺寸。
                 */
                get: function () {
                    return this.$UIComponent[13 /* maxWidth */];
                },
                set: function (value) {
                    value = +value || 0;
                    var values = this.$UIComponent;
                    if (value < 0 || values[13 /* maxWidth */] === value) {
                        return;
                    }
                    values[13 /* maxWidth */] = value;
                    this.invalidateSize();
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "minHeight", {
                /**
                 * @private
                 * 组件的最小高度,此属性设置为大于maxHeight的值时无效。同时影响测量和自动布局的尺寸。
                 */
                get: function () {
                    return this.$UIComponent[14 /* minHeight */];
                },
                set: function (value) {
                    value = +value || 0;
                    var values = this.$UIComponent;
                    if (value < 0 || values[14 /* minHeight */] === value) {
                        return;
                    }
                    values[14 /* minHeight */] = value;
                    this.invalidateSize();
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(__egretProto__, "maxHeight", {
                /**
                 * @private
                 * 组件的最大高度,同时影响测量和自动布局的尺寸。
                 */
                get: function () {
                    return this.$UIComponent[15 /* maxHeight */];
                },
                set: function (value) {
                    value = +value || 0;
                    var values = this.$UIComponent;
                    if (value < 0 || values[15 /* maxHeight */] === value) {
                        return;
                    }
                    values[15 /* maxHeight */] = value;
                    this.invalidateSize();
                    this.invalidateParentLayout();
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @private
             * 设置测量结果。
             * @param width 测量宽度
             * @param height 测量高度
             */
            __egretProto__.setMeasuredSize = function (width, height) {
                var values = this.$UIComponent;
                values[16 /* measuredWidth */] = Math.ceil(+width || 0);
                values[17 /* measuredHeight */] = Math.ceil(+height || 0);
            };
            /**
             * @private
             * 设置组件的宽高。此方法不同于直接设置width,height属性，
             * 不会影响显式标记尺寸属性
             */
            __egretProto__.setActualSize = function (w, h) {
                var change = false;
                var values = this.$UIComponent;
                if (values[10 /* width */] !== w) {
                    values[10 /* width */] = w;
                    change = true;
                }
                if (values[11 /* height */] !== h) {
                    values[11 /* height */] = h;
                    change = true;
                }
                if (change) {
                    this.invalidateDisplayList();
                    this.dispatchEventWith(egret.Event.RESIZE);
                }
            };
            /**
             * @private
             *
             * @param value
             * @returns
             */
            __egretProto__.$setX = function (value) {
                var change = this.$super.$setX.call(this, value);
                if (change) {
                    this.invalidateParentLayout();
                    this.invalidateProperties();
                }
                return change;
            };
            /**
             * @private
             *
             * @param value
             * @returns
             */
            __egretProto__.$setY = function (value) {
                var change = this.$super.$setY.call(this, value);
                if (change) {
                    this.invalidateParentLayout();
                    this.invalidateProperties();
                }
                return change;
            };
            /**
             * @private
             * 标记属性失效
             */
            __egretProto__.invalidateProperties = function () {
                var values = this.$UIComponent;
                if (!values[24 /* invalidatePropertiesFlag */]) {
                    values[24 /* invalidatePropertiesFlag */] = true;
                    if (this.$stage)
                        validator.invalidateProperties(this);
                }
            };
            /**
             * @private
             * 验证组件的属性
             */
            __egretProto__.validateProperties = function () {
                var values = this.$UIComponent;
                if (values[24 /* invalidatePropertiesFlag */]) {
                    this.commitProperties();
                    values[24 /* invalidatePropertiesFlag */] = false;
                }
            };
            /**
             * @private
             * 标记提交过需要验证组件尺寸
             */
            __egretProto__.invalidateSize = function () {
                var values = this.$UIComponent;
                if (!values[25 /* invalidateSizeFlag */]) {
                    values[25 /* invalidateSizeFlag */] = true;
                    if (this.$stage)
                        validator.invalidateSize(this);
                }
            };
            /**
             * @private
             * 验证组件的尺寸
             */
            __egretProto__.validateSize = function (recursive) {
                if (recursive) {
                    var children = this.$children;
                    if (children) {
                        var length = children.length;
                        for (var i = 0; i < length; i++) {
                            var child = children[i];
                            if (egret.is(child, UIComponentClass)) {
                                child.validateSize(true);
                            }
                        }
                    }
                }
                var values = this.$UIComponent;
                if (values[25 /* invalidateSizeFlag */]) {
                    var changed = this.measureSizes();
                    if (changed) {
                        this.invalidateDisplayList();
                        this.invalidateParentLayout();
                    }
                    values[25 /* invalidateSizeFlag */] = false;
                }
            };
            /**
             * @private
             * 测量组件尺寸，返回尺寸是否发生变化
             */
            __egretProto__.measureSizes = function () {
                var changed = false;
                var values = this.$UIComponent;
                if (!values[25 /* invalidateSizeFlag */])
                    return changed;
                if (isNaN(values[8 /* explicitWidth */]) || isNaN(values[9 /* explicitHeight */])) {
                    this.measure();
                    if (values[16 /* measuredWidth */] < values[12 /* minWidth */]) {
                        values[16 /* measuredWidth */] = values[12 /* minWidth */];
                    }
                    if (values[16 /* measuredWidth */] > values[13 /* maxWidth */]) {
                        values[16 /* measuredWidth */] = values[13 /* maxWidth */];
                    }
                    if (values[17 /* measuredHeight */] < values[14 /* minHeight */]) {
                        values[17 /* measuredHeight */] = values[14 /* minHeight */];
                    }
                    if (values[17 /* measuredHeight */] > values[15 /* maxHeight */]) {
                        values[17 /* measuredHeight */] = values[15 /* maxHeight */];
                    }
                }
                var preferredW = this.getPreferredUWidth();
                var preferredH = this.getPreferredUHeight();
                if (preferredW !== values[18 /* oldPreferWidth */] || preferredH !== values[19 /* oldPreferHeight */]) {
                    values[18 /* oldPreferWidth */] = preferredW;
                    values[19 /* oldPreferHeight */] = preferredH;
                    changed = true;
                }
                return changed;
            };
            /**
             * @private
             * 标记需要验证显示列表
             */
            __egretProto__.invalidateDisplayList = function () {
                var values = this.$UIComponent;
                if (!values[26 /* invalidateDisplayListFlag */]) {
                    values[26 /* invalidateDisplayListFlag */] = true;
                    if (this.$stage)
                        validator.invalidateDisplayList(this);
                }
            };
            /**
             * @private
             * 验证子项的位置和大小，并绘制其他可视内容
             */
            __egretProto__.validateDisplayList = function () {
                var values = this.$UIComponent;
                if (values[26 /* invalidateDisplayListFlag */]) {
                    this.updateFinalSize();
                    this.updateDisplayList(values[10 /* width */], values[11 /* height */]);
                    values[26 /* invalidateDisplayListFlag */] = false;
                }
            };
            /**
             * @private
             * 更新最终的组件宽高
             */
            __egretProto__.updateFinalSize = function () {
                var unscaledWidth = 0;
                var unscaledHeight = 0;
                var values = this.$UIComponent;
                if (values[27 /* layoutWidthExplicitlySet */]) {
                    unscaledWidth = values[10 /* width */];
                }
                else if (!isNaN(values[8 /* explicitWidth */])) {
                    unscaledWidth = values[8 /* explicitWidth */];
                }
                else {
                    unscaledWidth = values[16 /* measuredWidth */];
                }
                if (values[28 /* layoutHeightExplicitlySet */]) {
                    unscaledHeight = values[11 /* height */];
                }
                else if (!isNaN(values[9 /* explicitHeight */])) {
                    unscaledHeight = values[9 /* explicitHeight */];
                }
                else {
                    unscaledHeight = values[17 /* measuredHeight */];
                }
                this.setActualSize(unscaledWidth, unscaledHeight);
            };
            /**
             * @private
             * 立即应用组件及其子项的所有属性
             */
            __egretProto__.validateNow = function () {
                if (this.$stage)
                    validator.validateClient(this);
            };
            /**
             * @private
             * 标记父级容器的尺寸和显示列表为失效
             */
            __egretProto__.invalidateParentLayout = function () {
                var parent = this.$parent;
                if (!parent || !this.$includeInLayout || !egret.is(parent, UIComponentClass))
                    return;
                parent.invalidateSize();
                parent.invalidateDisplayList();
            };
            /**
             * @private
             * 设置组件的布局宽高
             */
            __egretProto__.setLayoutBoundsSize = function (layoutWidth, layoutHeight) {
                layoutHeight = +layoutHeight;
                layoutWidth = +layoutWidth;
                if (layoutHeight < 0 || layoutWidth < 0) {
                    return;
                }
                var values = this.$UIComponent;
                var maxWidth = values[13 /* maxWidth */];
                var maxHeight = values[15 /* maxHeight */];
                var minWidth = Math.min(values[12 /* minWidth */], maxWidth);
                var minHeight = Math.min(values[14 /* minHeight */], maxHeight);
                var width;
                var height;
                if (isNaN(layoutWidth)) {
                    values[27 /* layoutWidthExplicitlySet */] = false;
                    width = this.getPreferredUWidth();
                }
                else {
                    values[27 /* layoutWidthExplicitlySet */] = true;
                    width = Math.max(minWidth, Math.min(maxWidth, layoutWidth));
                }
                if (isNaN(layoutHeight)) {
                    values[28 /* layoutHeightExplicitlySet */] = false;
                    height = this.getPreferredUHeight();
                }
                else {
                    values[28 /* layoutHeightExplicitlySet */] = true;
                    height = Math.max(minHeight, Math.min(maxHeight, layoutHeight));
                }
                var matrix = this.$getMatrix();
                if (isDeltaIdentity(matrix)) {
                    this.setActualSize(width, height);
                    return;
                }
                var fitSize = sys.MatrixUtil.fitBounds(layoutWidth, layoutHeight, matrix, values[8 /* explicitWidth */], values[9 /* explicitHeight */], this.getPreferredUWidth(), this.getPreferredUHeight(), minWidth, minHeight, maxWidth, maxHeight);
                if (!fitSize) {
                    fitSize = egret.Point.create(minWidth, minHeight);
                }
                this.setActualSize(fitSize.x, fitSize.y);
                egret.Point.release(fitSize);
            };
            /**
             * @private
             * 设置组件的布局位置
             */
            __egretProto__.setLayoutBoundsPosition = function (x, y) {
                var matrix = this.$getMatrix();
                if (!isDeltaIdentity(matrix)) {
                    var bounds = egret.$TempRectangle;
                    this.getLayoutBounds(bounds);
                    x += this.$getX() - bounds.x;
                    y += this.$getY() - bounds.y;
                }
                var changed = this.$super.$setX.call(this, x);
                if (this.$super.$setY.call(this, y) || changed) {
                    swan.UIEvent.emitUIEvent(this, swan.UIEvent.MOVE);
                }
            };
            /**
             * @private
             * 组件的布局尺寸,常用于父级的updateDisplayList()方法中
             * 按照：布局尺寸>外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸,
             * 注意此方法返回值已经包含scale和rotation。
             */
            __egretProto__.getLayoutBounds = function (bounds) {
                var values = this.$UIComponent;
                var w;
                if (values[27 /* layoutWidthExplicitlySet */]) {
                    w = values[10 /* width */];
                }
                else if (!isNaN(values[8 /* explicitWidth */])) {
                    w = values[8 /* explicitWidth */];
                }
                else {
                    w = values[16 /* measuredWidth */];
                }
                var h;
                if (values[28 /* layoutHeightExplicitlySet */]) {
                    h = values[11 /* height */];
                }
                else if (!isNaN(values[9 /* explicitHeight */])) {
                    h = values[9 /* explicitHeight */];
                }
                else {
                    h = values[17 /* measuredHeight */];
                }
                this.applyMatrix(bounds, w, h);
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.getPreferredUWidth = function () {
                var values = this.$UIComponent;
                return isNaN(values[8 /* explicitWidth */]) ? values[16 /* measuredWidth */] : values[8 /* explicitWidth */];
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.getPreferredUHeight = function () {
                var values = this.$UIComponent;
                return isNaN(values[9 /* explicitHeight */]) ? values[17 /* measuredHeight */] : values[9 /* explicitHeight */];
            };
            /**
             * @private
             * 获取组件的首选尺寸,常用于父级的measure()方法中
             * 按照：外部显式设置尺寸>测量尺寸 的优先级顺序返回尺寸，
             * 注意此方法返回值已经包含scale和rotation。
             */
            __egretProto__.getPreferredBounds = function (bounds) {
                var w = this.getPreferredUWidth();
                var h = this.getPreferredUHeight();
                this.applyMatrix(bounds, w, h);
            };
            /**
             * @private
             *
             * @param bounds
             * @param w
             * @param h
             */
            __egretProto__.applyMatrix = function (bounds, w, h) {
                var bounds = bounds.setTo(0, 0, w, h);
                var matrix = this.$getMatrix();
                if (isDeltaIdentity(matrix)) {
                    bounds.x += matrix.tx;
                    bounds.y += matrix.ty;
                }
                else {
                    matrix.$transformBounds(bounds);
                }
            };
            return UIComponentImpl;
        })(egret.DisplayObject);
        sys.UIComponentImpl = UIComponentImpl;
        UIComponentImpl.prototype.__class__ = "swan.sys.UIComponentImpl";
        egret.registerClass(UIComponentImpl,"swan.sys.UIComponentImpl",["swan.UIComponent"]);
        /**
         * 检查一个函数的方法体是否为空。
         */
        function isEmptyFunction(prototype, key) {
            if (typeof prototype[key] != "function") {
                return false;
            }
            var body = prototype[key].toString();
            var index = body.indexOf("{");
            var lastIndex = body.lastIndexOf("}");
            body = body.substring(index + 1, lastIndex);
            return body.trim() == "";
        }
        /**
         * @private
         * 拷贝模板类的方法体和属性到目标类上。
         * @param target 目标类
         * @param template 模板类
         */
        function mixin(target, template) {
            for (var property in template) {
                if (property != "prototype" && template.hasOwnProperty(property)) {
                    target[property] = template[property];
                }
            }
            var prototype = target.prototype;
            var protoBase = template.prototype;
            var keys = Object.keys(protoBase);
            var length = keys.length;
            for (var i = 0; i < length; i++) {
                var key = keys[i];
                if (key == "__meta__") {
                    continue;
                }
                if (!prototype.hasOwnProperty(key) || isEmptyFunction(prototype, key)) {
                    var value = Object.getOwnPropertyDescriptor(protoBase, key);
                    Object.defineProperty(prototype, key, value);
                }
            }
        }
        sys.mixin = mixin;
        /**
         * @private
         * 自定义类实现UIComponent的步骤：
         * 1.在自定义类的构造函数里调用：this.initializeUIValues();
         * 2.拷贝UIComponent接口定义的所有内容(包括注释掉的protected函数)到自定义类，将所有子类需要覆盖的方法都声明为空方法体。
         * 3.在定义类结尾的外部调用sys.implementUIComponent()，并传入自定义类。
         * 4.若覆盖了某个UIComponent的方法，需要手动调用UIComponentImpl.prototype["方法名"].call(this);
         * @param descendant 自定义的UIComponent子类
         * @param base 自定义子类继承的父类
         */
        function implementUIComponent(descendant, base, isContainer) {
            mixin(descendant, UIComponentImpl);
            var prototype = descendant.prototype;
            prototype.$super = base.prototype;
            if (isContainer) {
                prototype.$childAdded = function (child, index) {
                    this.invalidateSize();
                    this.invalidateDisplayList();
                };
                prototype.$childRemoved = function (child, index) {
                    this.invalidateSize();
                    this.invalidateDisplayList();
                };
            }
            if (DEBUG) {
                egret.$markReadOnly(descendant, "explicitWidth");
                egret.$markReadOnly(descendant, "explicitHeight");
                Object.defineProperty(prototype, "preferredWidth", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getPreferredBounds(bounds);
                        return bounds.width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "preferredHeight", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getPreferredBounds(bounds);
                        return bounds.height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "preferredX", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getPreferredBounds(bounds);
                        return bounds.x;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "preferredY", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getPreferredBounds(bounds);
                        return bounds.y;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "layoutBoundsX", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getLayoutBounds(bounds);
                        return bounds.x;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "layoutBoundsY", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getLayoutBounds(bounds);
                        return bounds.y;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "layoutBoundsWidth", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getLayoutBounds(bounds);
                        return bounds.width;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "layoutBoundsHeight", {
                    get: function () {
                        var bounds = egret.$TempRectangle;
                        this.getLayoutBounds(bounds);
                        return bounds.height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "measuredWidth", {
                    get: function () {
                        return this.$UIComponent[16 /* measuredWidth */];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "measuredHeight", {
                    get: function () {
                        return this.$UIComponent[17 /* measuredHeight */];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "layoutWidthExplicitlySet", {
                    get: function () {
                        return this.$UIComponent[27 /* layoutWidthExplicitlySet */];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "layoutHeightExplicitlySet", {
                    get: function () {
                        return this.$UIComponent[28 /* layoutHeightExplicitlySet */];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "invalidatePropertiesFlag", {
                    get: function () {
                        return this.$UIComponent[24 /* invalidatePropertiesFlag */];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "invalidateSizeFlag", {
                    get: function () {
                        return this.$UIComponent[25 /* invalidateSizeFlag */];
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(prototype, "invalidateDisplayListFlag", {
                    get: function () {
                        return this.$UIComponent[26 /* invalidateDisplayListFlag */];
                    },
                    enumerable: true,
                    configurable: true
                });
            }
        }
        sys.implementUIComponent = implementUIComponent;
    })(sys = swan.sys || (swan.sys = {}));
})(swan || (swan = {}));
