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
     * The Group class is defines the base class for layout component.
     * If the contents of the sub items are too large to scroll to show, you can wrap a Scroller component outside the
     * group (Give the instance of Group to <code>viewport</code> property of Scroller component).
     * The scroller component can adds a scrolling touch operation for the Group.
     *
     * @defaultProperty elementsContent
     * @includeExample examples/Samples/src/extension/eui/components/GroupExample.ts
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * Group 是自动布局的容器基类。如果包含的子项内容太大需要滚动显示，可以在在 Group 外部包裹一层 Scroller 组件
     * (将 Group 实例赋值给 Scroller 组件的 viewport 属性)。Scroller 会为 Group 添加滚动的触摸操作功能，并显示垂直或水平的滚动条。
     *
     * @defaultProperty elementsContent
     * @includeExample examples/Samples/src/extension/eui/components/GroupExample.ts
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     */
    var Group = (function (_super) {
        __extends(Group, _super);
        /**
         * @language en_US
         * Constructor.
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        function Group() {
            _super.call(this);
            /**
             * @private
             */
            this.$layout = null;
            /**
             * @private
             */
            this.$stateValues = new eui.sys.StateValues();
            this.initializeUIValues();
            this.$Group = {
                0: 0,
                1: 0,
                2: 0,
                3: 0,
                4: false,
                5: false,
            };
            this.$stateValues.parent = this;
        }
        var __egretProto__ = Group.prototype;
        Object.defineProperty(__egretProto__, "elementsContent", {
            /**
             * @language en_US
             * This property is Usually invoked in resolving an EXML for adding multiple children quickly.
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 此属性通常在 EXML 的解析器中调用，便于快速添加多个子项。
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            set: function (value) {
                if (value) {
                    var length = value.length;
                    for (var i = 0; i < length; i++) {
                        this.addChild(value[i]);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "layout", {
            /**
             * @language en_US
             * The layout object for this container.
             * This object is responsible for the measurement and layout of
             * the UIcomponent in the container.
             *
             * @default eui.BasicLayout
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 此容器的布局对象。
             *
             * s@default eui.BasicLayout
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$layout;
            },
            set: function (value) {
                this.$setLayout(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setLayout = function (value) {
            if (this.$layout == value)
                return;
            if (this.$layout) {
                this.$layout.target = null;
            }
            this.$layout = value;
            if (value) {
                value.target = this;
            }
            this.invalidateSize();
            this.invalidateDisplayList();
        };
        Object.defineProperty(__egretProto__, "contentWidth", {
            /**
             * @copy eui.IViewport#contentWidth
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Group[0 /* contentWidth */];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "contentHeight", {
            /**
             * @copy eui.IViewport#contentHeight
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Group[1 /* contentHeight */];
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         *
         * Sets the <code>contentWidth</code> and <code>contentHeight</code>
         * properties.
         *
         * This method is intended for layout class developers who should
         * call it from <code>updateDisplayList()</code> methods.
         *
         * @param width The new value of <code>contentWidth</code>.
         * @param height The new value of <code>contentHeight</code>.
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         *
         * 设置 <code>contentWidth</code> 和 <code>contentHeight</code> 属性。
         * 此方法由布局来调用，开发者应该在布局类的 <code>updateDisplayList()</code> 方法中对其进行调用。
         *
         * @param width <code>contentWidth</code> 的新值。
         * @param height <code>contentHeight</code> 的新值。
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setContentSize = function (width, height) {
            width = Math.ceil(+width || 0);
            height = Math.ceil(+height || 0);
            var values = this.$Group;
            var wChange = (values[0 /* contentWidth */] !== width);
            var hChange = (values[1 /* contentHeight */] !== height);
            if (!wChange && !hChange) {
                return;
            }
            values[0 /* contentWidth */] = width;
            values[1 /* contentHeight */] = height;
            if (wChange) {
                eui.PropertyEvent.emitPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "contentWidth");
            }
            if (hChange) {
                eui.PropertyEvent.emitPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "contentHeight");
            }
        };
        Object.defineProperty(__egretProto__, "scrollEnabled", {
            /**
             * @copy eui.IViewport#scrollEnabled
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Group[4 /* scrollEnabled */];
            },
            set: function (value) {
                value = !!value;
                var values = this.$Group;
                if (value === values[4 /* scrollEnabled */])
                    return;
                values[4 /* scrollEnabled */] = value;
                this.updateScrollRect();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "scrollH", {
            /**
             * @copy eui.IViewport#scrollH
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Group[2 /* scrollH */];
            },
            set: function (value) {
                value = +value || 0;
                var values = this.$Group;
                if (value === values[2 /* scrollH */])
                    return;
                values[2 /* scrollH */] = value;
                if (this.updateScrollRect() && this.$layout) {
                    this.$layout.scrollPositionChanged();
                }
                eui.PropertyEvent.emitPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "scrollH");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "scrollV", {
            /**
             * @copy eui.IViewport#scrollV
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Group[3 /* scrollV */];
            },
            set: function (value) {
                value = +value || 0;
                var values = this.$Group;
                if (value == values[3 /* scrollV */])
                    return;
                values[3 /* scrollV */] = value;
                if (this.updateScrollRect() && this.$layout) {
                    this.$layout.scrollPositionChanged();
                }
                eui.PropertyEvent.emitPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "scrollV");
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         *
         * @returns
         */
        __egretProto__.updateScrollRect = function () {
            var values = this.$Group;
            var hasClip = values[4 /* scrollEnabled */];
            if (hasClip) {
                var uiValues = this.$UIComponent;
                this.scrollRect = egret.$TempRectangle.setTo(values[2 /* scrollH */], values[3 /* scrollV */], uiValues[10 /* width */], uiValues[11 /* height */]);
            }
            else if (this.$scrollRect) {
                this.scrollRect = null;
            }
            return hasClip;
        };
        Object.defineProperty(__egretProto__, "numElements", {
            /**
             * @language en_US
             * The number of layout element in this container.
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 布局元素子项的数量。
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$children.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * Returns the layout element at the specified index.
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取一个布局元素子项。
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getElementAt = function (index) {
            return this.$children[index];
        };
        /**
         * @language en_US
         * Set the index range of the sub Visual element in container which support virtual layout.
         * This method is invalid in container which do not support virtual layout.
         * This method is usually invoked before layout. Override this method to release the invisible elements.
         *
         * @param startIndex the start index of sub visual elements（include）
         * @param endIndex the end index of sub visual elements（include）
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 在支持虚拟布局的容器中，设置容器内可见的子元素索引范围。此方法在不支持虚拟布局的容器中无效。
         * 通常在即将重新布局子项之前会被调用一次，容器覆盖此方法提前释放已经不可见的子元素。
         *
         * @param startIndex 可视元素起始索引（包括）
         * @param endIndex 可视元素结束索引（包括）
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setVirtualElementIndicesInView = function (startIndex, endIndex) {
        };
        Object.defineProperty(__egretProto__, "touchThrough", {
            /**
             * @language en_US
             * When <code>true</code>, this property
             * ensures that the entire bounds of the Group respond to
             * touch events such as begin.
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 触摸组件的背景透明区域是否可以穿透。设置为true表示可以穿透，反之透明区域也会响应触摸事件。默认 false。
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Group[5 /* touchThrough */];
            },
            set: function (value) {
                this.$Group[5 /* touchThrough */] = !!value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         */
        __egretProto__.$hitTest = function (stageX, stageY) {
            var target = _super.prototype.$hitTest.call(this, stageX, stageY);
            if (target || this.$Group[5 /* touchThrough */]) {
                return target;
            }
            if (!this.$visible || !this.touchEnabled) {
                return null;
            }
            var point = this.globalToLocal(stageX, stageY, egret.$TempPoint);
            var values = this.$UIComponent;
            var bounds = egret.$TempRectangle.setTo(0, 0, values[10 /* width */], values[11 /* height */]);
            var scrollRect = this.$scrollRect;
            if (scrollRect) {
                bounds.x = scrollRect.x;
                bounds.y = scrollRect.y;
            }
            if (bounds.contains(point.x, point.y)) {
                return this;
            }
            return null;
        };
        /**
         * @copy eui.Component#invalidateState()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateState = function () {
            var values = this.$stateValues;
            if (values.stateIsDirty) {
                return;
            }
            values.stateIsDirty = true;
            this.invalidateProperties();
        };
        /**
         * @copy eui.Component#getCurrentState()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getCurrentState = function () {
            return "";
        };
        /**
         * @copy eui.Component#createChildren()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.createChildren = function () {
            if (!this.$layout) {
                this.$setLayout(new eui.BasicLayout());
            }
            this.initializeStates(this.$stage);
        };
        /**
         * @copy eui.Component#childrenCreated()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.childrenCreated = function () {
        };
        /**
         * @copy eui.Component#commitProperties()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitProperties = function () {
            eui.sys.UIComponentImpl.prototype["commitProperties"].call(this);
            var values = this.$stateValues;
            if (values.stateIsDirty) {
                values.stateIsDirty = false;
                if (!values.explicitState) {
                    values.currentState = this.getCurrentState();
                    this.commitCurrentState();
                }
            }
        };
        /**
         * @copy eui.Component#measure()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.measure = function () {
            if (!this.$layout) {
                this.setMeasuredSize(0, 0);
                return;
            }
            this.$layout.measure();
        };
        /**
         * @copy eui.Component#updateDisplayList()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            if (this.$layout) {
                this.$layout.updateDisplayList(unscaledWidth, unscaledHeight);
            }
            this.updateScrollRect();
        };
        /**
         * @copy eui.Component#invalidateParentLayout()
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateParentLayout = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setMeasuredSize = function (width, height) {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateProperties = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateProperties = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateSize = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateSize = function (recursive) {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateDisplayList = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateDisplayList = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateNow = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setLayoutBoundsSize = function (layoutWidth, layoutHeight) {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setLayoutBoundsPosition = function (x, y) {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getLayoutBounds = function (bounds) {
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getPreferredBounds = function (bounds) {
        };
        return Group;
    })(egret.DisplayObjectContainer);
    eui.Group = Group;
    Group.prototype.__class__ = "eui.Group";
    egret.registerClass(Group,"eui.Group",["eui.IViewport","eui.UIComponent"]);
    eui.sys.implementUIComponent(Group, egret.DisplayObjectContainer, true);
    eui.sys.mixin(Group, eui.sys.StateClient);
    eui.registerProperty(Group, "elementsContent", "Array", true);
    eui.registerProperty(Group, "states", "State[]");
    if (DEBUG) {
        egret.$markReadOnly(Group, "contentWidth");
        egret.$markReadOnly(Group, "contentHeight");
        egret.$markReadOnly(Group, "numElements");
    }
})(eui || (eui = {}));
