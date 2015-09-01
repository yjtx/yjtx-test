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
    var scrollerThrowEvent;
    /**
     * @language en_US
     * The Scroller component displays a single scrollable component,
     * called a viewport, and horizontal and vertical scroll bars.
     * The viewport must implement the IViewport interface.
     * <p>The Group components implement the IViewport interface
     * and can be used as the children of the Scroller control,
     * as the following example shows:</p>
     * <pre>
     *       <s:Scroller width="100" height="100">
     *           <s:Group>
     *               <s:Image width="300" height="400" source="assets/logo.jpg"/>
     *           </s:Group>
     *       </s:Scroller>
     * </pre>
     * <p>The size of the Image control is set larger than that of its parent Group container.
     * By default, the child extends past the boundaries of the parent container.
     * Rather than allow the child to extend past the boundaries of the parent container,
     * the Scroller specifies to clip the child to the boundaries and display scroll bars.</p>
     *
     * @event eui.UIEvent.CHANGE_START Emitted when the scroll position is going to change
     * @event eui.UIEvent.CHANGE_END Emitted when the scroll position changed complete
     *
     * @defaultProperty viewport
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/components/ScrollerExample.ts
     */
    /**
     * @language zh_CN
     * Scroller 组件显示一个称为视域的单个可滚动组件，以及水平滚动条和垂直滚动条。该视域必须实现 IViewport 接口。
     * <p>Group 组件实现 IViewport 接口，且可以用作 Scroller 控件的子代，如下例所示：</p>
     * <pre>
     *       <s:Scroller width="100" height="100">
     *           <s:Group>
     *               <s:Image width="300" height="400" source="assets/logo.jpg"/>
     *           </s:Group>
     *       </s:Scroller>
     * </pre>
     * Image 控件的大小比其父 Group 容器设置得大。默认情况下，子代超过父容器的边界。
     * Scroller 会指定将子代剪切到边界并显示滚动条，而不是让子代超过父容器的边界。
     *
     * @event eui.UIEvent.CHANGE_START 滚动位置改变开始
     * @event eui.UIEvent.CHANGE_END 滚动位置改变结束
     *
     * @defaultProperty viewport
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/components/ScrollerExample.ts
     */
    var Scroller = (function (_super) {
        __extends(Scroller, _super);
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
        function Scroller() {
            _super.call(this);
            /**
             * @language en_US
             * the horizontal scroll bar
             *
             * @skinPart
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 水平滚动条
             *
             * @skinPart
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            this.horizontalScrollBar = null;
            /**
             * @language en_US
             * the vertical scroll bar
             *
             * @skinPart
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 垂直滚动条
             *
             * @skinPart
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            this.verticalScrollBar = null;
            var touchScrollH = new eui.sys.TouchScroll(this.horizontalUpdateHandler, this.horizontalEndHandler, this);
            var touchScrollV = new eui.sys.TouchScroll(this.verticalUpdateHandler, this.verticalEndHanlder, this);
            this.$Scroller = {
                0: "auto",
                1: "auto",
                2: null,
                3: 0,
                4: 0,
                5: false,
                6: false,
                7: false,
                8: touchScrollH,
                9: touchScrollV,
                10: null,
                11: null,
                12: null,
                13: false,
            };
        }
        var __egretProto__ = Scroller.prototype;
        Object.defineProperty(__egretProto__, "throwSpeed", {
            get: function () {
                return this.$Scroller[8 /* touchScrollH */].$scrollFactor;
            },
            /**
             * @language en_US
             * Adjust the speed to get out of the slide end.
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 调节滑动结束时滚出的速度。
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            set: function (val) {
                val = +val;
                val = val < 0.01 ? 0.01 : val;
                this.$Scroller[8 /* touchScrollH */].$scrollFactor = val;
                this.$Scroller[9 /* touchScrollV */].$scrollFactor = val;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         */
        __egretProto__.$getThrowInfo = function (currentPos, toPos) {
            if (!scrollerThrowEvent) {
                scrollerThrowEvent = new eui.ScrollerThrowEvent(eui.ScrollerThrowEvent.THROW, false, false, currentPos, toPos);
            }
            else {
                scrollerThrowEvent.currentPos = currentPos;
                scrollerThrowEvent.toPos = toPos;
            }
            //this.dispatchEvent(scrollerThrowEvent);
            return scrollerThrowEvent;
        };
        Object.defineProperty(__egretProto__, "scrollPolicyV", {
            /**
             * @language en_US
             * Indicates under what conditions the vertical scroll bar is displayed.
             * <p><code>ScrollPolicy.ON</code> - the scroll bar is always displayed.</p>
             * <p><code>ScrollPolicy.OFF</code> - the scroll bar is never displayed.</p>
             * <p><code>ScrollPolicy.AUTO</code> - the scroll bar is displayed when
             *  the viewport's contentHeight is larger than its height.
             *
             * @default ScrollPolicy.AUTO
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 指示在哪些条件下会显示垂直滑动条。
             * <p><code>ScrollPolicy.ON</code> - 始终显示滚动条。</p>
             * <p><code>ScrollPolicy.OFF</code> - 从不显示滚动条。</p>
             * <p><code>ScrollPolicy.AUTO</code> - 当视域的 contentHeight 大于其自身的高度时显示滚动条。</p>
             *
             * @default ScrollPolicy.AUTO
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Scroller[0 /* scrollPolicyV */];
            },
            set: function (value) {
                var values = this.$Scroller;
                if (value[0 /* scrollPolicyV */] == value) {
                    return;
                }
                values[0 /* scrollPolicyV */] = value;
                this.checkScrollPolicy();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "scrollPolicyH", {
            /**
             * @language en_US
             * Indicates under what conditions the horizontal scroll bar is displayed.
             * <p><code>ScrollPolicy.ON</code> - the scroll bar is always displayed.</p>
             * <p><code>ScrollPolicy.OFF</code> - the scroll bar is never displayed.</p>
             * <p><code>ScrollPolicy.AUTO</code> - the scroll bar is displayed when
             *  the viewport's contentWidth is larger than its width.
             *
             * @default ScrollPolicy.AUTO
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 指示在哪些条件下会显示水平滑动条。
             * <p><code>ScrollPolicy.ON</code> - 始终显示滚动条。</p>
             * <p><code>ScrollPolicy.OFF</code> - 从不显示滚动条。</p>
             * <p><code>ScrollPolicy.AUTO</code> - 当视域的 contentWidth 大于其自身的宽度时显示滚动条。</p>
             *
             * @default ScrollPolicy.AUTO
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Scroller[1 /* scrollPolicyH */];
            },
            set: function (value) {
                var values = this.$Scroller;
                if (values[1 /* scrollPolicyH */] == value) {
                    return;
                }
                values[1 /* scrollPolicyH */] = value;
                this.checkScrollPolicy();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "viewport", {
            /**
             * @language en_US
             * The viewport component to be scrolled.
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 要滚动的视域组件。
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Scroller[12 /* viewport */];
            },
            set: function (value) {
                var values = this.$Scroller;
                if (value == values[12 /* viewport */])
                    return;
                this.uninstallViewport();
                values[12 /* viewport */] = value;
                values[13 /* viewprotRemovedEvent */] = false;
                this.installViewport();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * 安装并初始化视域组件
         */
        __egretProto__.installViewport = function () {
            var viewport = this.viewport;
            if (viewport) {
                this.addChildAt(viewport, 0);
                viewport.scrollEnabled = true;
                viewport.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginCapture, this, true);
                viewport.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndCapture, this, true);
                viewport.addEventListener(egret.Event.REMOVED, this.onViewPortRemove, this);
            }
            if (this.horizontalScrollBar) {
                this.horizontalScrollBar.viewport = viewport;
            }
            if (this.verticalScrollBar) {
                this.verticalScrollBar.viewport = viewport;
            }
        };
        /**
         * @private
         * 卸载视域组件
         */
        __egretProto__.uninstallViewport = function () {
            if (this.horizontalScrollBar) {
                this.horizontalScrollBar.viewport = null;
            }
            if (this.verticalScrollBar) {
                this.verticalScrollBar.viewport = null;
            }
            var viewport = this.viewport;
            if (viewport) {
                viewport.scrollEnabled = false;
                viewport.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginCapture, this, true);
                viewport.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEndCapture, this, true);
                viewport.removeEventListener(egret.Event.REMOVED, this.onViewPortRemove, this);
                if (this.$Scroller[13 /* viewprotRemovedEvent */] == false) {
                    this.removeChild(viewport);
                }
            }
        };
        __egretProto__.onViewPortRemove = function (event) {
            if (event.target == this.viewport) {
                this.$Scroller[13 /* viewprotRemovedEvent */] = true;
                this.viewport = null;
            }
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setSkin = function (skin) {
            _super.prototype.setSkin.call(this, skin);
            var viewport = this.viewport;
            if (viewport) {
                this.addChildAt(viewport, 0);
            }
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onTouchEndCapture = function (event) {
            if (this.$Scroller[11 /* delayTouchEvent */]) {
                this.delayEmitEvent(event);
            }
        };
        /**
         * @private
         * 若这个Scroller可以滚动，阻止当前事件，延迟100ms再抛出。
         */
        __egretProto__.onTouchBeginCapture = function (event) {
            var canScroll = this.checkScrollPolicy();
            if (!canScroll) {
                return;
            }
            var target = event.target;
            while (target && target != this) {
                if (target instanceof Scroller) {
                    canScroll = target.checkScrollPolicy();
                    if (canScroll) {
                        return;
                    }
                }
                target = target.$parent;
            }
            this.delayEmitEvent(event);
            this.onTouchBegin(event);
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.delayEmitEvent = function (event) {
            var values = this.$Scroller;
            if (values[11 /* delayTouchEvent */]) {
                this.onDelayTouchEventTimer();
            }
            event.stopPropagation();
            var touchEvent = egret.Event.create(egret.TouchEvent, event.$type, event.$bubbles, event.$cancelable);
            touchEvent.$setTo(event.$stageX, event.$stageY, event.touchPointID);
            touchEvent.$target = event.$target;
            values[11 /* delayTouchEvent */] = touchEvent;
            if (!values[10 /* delayTouchTimer */]) {
                values[10 /* delayTouchTimer */] = new egret.Timer(100, 1);
                values[10 /* delayTouchTimer */].addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onDelayTouchEventTimer, this);
            }
            values[10 /* delayTouchTimer */].start();
        };
        /**
         * @private
         *
         * @param e
         */
        __egretProto__.onDelayTouchEventTimer = function (e) {
            var values = this.$Scroller;
            values[10 /* delayTouchTimer */].stop();
            var event = values[11 /* delayTouchEvent */];
            values[11 /* delayTouchEvent */] = null;
            var viewport = values[12 /* viewport */];
            if (!viewport) {
                return;
            }
            var target = event.$target;
            var list = this.$getPropagationList(target);
            var length = list.length;
            var targetIndex = list.length * 0.5;
            var startIndex = -1;
            for (var i = 0; i < length; i++) {
                if (list[i] === viewport) {
                    startIndex = i;
                    break;
                }
            }
            list.splice(0, startIndex + 1);
            targetIndex -= startIndex + 1;
            this.$emitPropagationEvent(event, list, targetIndex);
            egret.Event.release(event);
        };
        /**
         * @private
         * 检查当前滚动策略，若有一个方向可以滚动，返回true。
         */
        __egretProto__.checkScrollPolicy = function () {
            var values = this.$Scroller;
            var viewport = values[12 /* viewport */];
            if (!viewport) {
                return false;
            }
            var hCanScroll;
            var uiValues = viewport.$UIComponent;
            switch (values[1 /* scrollPolicyH */]) {
                case "auto":
                    if (viewport.contentWidth > uiValues[10 /* width */]) {
                        hCanScroll = true;
                    }
                    else {
                        hCanScroll = false;
                    }
                    break;
                case "on":
                    hCanScroll = true;
                    break;
                case "off":
                    hCanScroll = false;
                    break;
            }
            values[6 /* horizontalCanScroll */] = hCanScroll;
            var vCanScroll;
            switch (values[0 /* scrollPolicyV */]) {
                case "auto":
                    if (viewport.contentHeight > uiValues[11 /* height */]) {
                        vCanScroll = true;
                    }
                    else {
                        vCanScroll = false;
                    }
                    break;
                case "on":
                    vCanScroll = true;
                    break;
                case "off":
                    vCanScroll = false;
                    break;
            }
            values[7 /* verticalCanScroll */] = vCanScroll;
            return hCanScroll || vCanScroll;
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onTouchBegin = function (event) {
            if (event.isDefaultPrevented()) {
                return;
            }
            if (!this.checkScrollPolicy()) {
                return;
            }
            var values = this.$Scroller;
            values[9 /* touchScrollV */].stop();
            values[8 /* touchScrollH */].stop();
            var viewport = values[12 /* viewport */];
            values[3 /* touchStartX */] = event.$stageX;
            values[4 /* touchStartY */] = event.$stageY;
            var uiValues = viewport.$UIComponent;
            if (values[6 /* horizontalCanScroll */]) {
                values[8 /* touchScrollH */].start(event.$stageX, viewport.scrollH, viewport.contentWidth - uiValues[10 /* width */]);
            }
            if (values[7 /* verticalCanScroll */]) {
                values[9 /* touchScrollV */].start(event.$stageY, viewport.scrollV, viewport.contentHeight - uiValues[11 /* height */]);
            }
            var stage = this.$stage;
            stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            event.preventDefault();
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onTouchMove = function (event) {
            var values = this.$Scroller;
            if (!values[5 /* touchMoved */]) {
                if (Math.abs(values[3 /* touchStartX */] - event.$stageX) < Scroller.scrollThreshold && Math.abs(values[4 /* touchStartY */] - event.$stageY) < Scroller.scrollThreshold) {
                    return;
                }
                values[5 /* touchMoved */] = true;
                var horizontalBar = this.horizontalScrollBar;
                var verticalBar = this.verticalScrollBar;
                if (horizontalBar && values[6 /* horizontalCanScroll */]) {
                    horizontalBar.visible = true;
                }
                if (verticalBar && values[7 /* verticalCanScroll */]) {
                    verticalBar.visible = true;
                }
                if (values[2 /* autoHideTimer */]) {
                    values[2 /* autoHideTimer */].reset();
                }
            }
            eui.UIEvent.emitUIEvent(this, eui.UIEvent.CHANGE_START);
            if (values[11 /* delayTouchEvent */]) {
                values[11 /* delayTouchEvent */] = null;
                values[10 /* delayTouchTimer */].stop();
            }
            var viewport = values[12 /* viewport */];
            var uiValues = viewport.$UIComponent;
            if (values[6 /* horizontalCanScroll */]) {
                values[8 /* touchScrollH */].update(event.$stageX, viewport.contentWidth - uiValues[10 /* width */]);
            }
            if (values[7 /* verticalCanScroll */]) {
                values[9 /* touchScrollV */].update(event.$stageY, viewport.contentHeight - uiValues[11 /* height */]);
            }
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onTouchEnd = function (event) {
            var values = this.$Scroller;
            values[5 /* touchMoved */] = false;
            var stage = event.$currentTarget;
            stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            var viewport = values[12 /* viewport */];
            var uiValues = viewport.$UIComponent;
            if (values[8 /* touchScrollH */].isStarted()) {
                values[8 /* touchScrollH */].finish(viewport.scrollH, viewport.contentWidth - uiValues[10 /* width */]);
            }
            if (values[9 /* touchScrollV */].isStarted()) {
                values[9 /* touchScrollV */].finish(viewport.scrollV, viewport.contentHeight - uiValues[11 /* height */]);
            }
        };
        /**
         * @private
         *
         * @param scrollPos
         */
        __egretProto__.horizontalUpdateHandler = function (scrollPos) {
            this.$Scroller[12 /* viewport */].scrollH = scrollPos;
        };
        /**
         * @private
         *
         * @param scrollPos
         */
        __egretProto__.verticalUpdateHandler = function (scrollPos) {
            this.$Scroller[12 /* viewport */].scrollV = scrollPos;
        };
        /**
         * @private
         *
         */
        __egretProto__.horizontalEndHandler = function () {
            if (!this.$Scroller[9 /* touchScrollV */].isPlaying()) {
                this.onChangeEnd();
            }
        };
        /**
         * @private
         *
         */
        __egretProto__.verticalEndHanlder = function () {
            if (!this.$Scroller[8 /* touchScrollH */].isPlaying()) {
                this.onChangeEnd();
            }
        };
        /**
         * @private
         *
         */
        __egretProto__.onChangeEnd = function () {
            var values = this.$Scroller;
            var horizontalBar = this.horizontalScrollBar;
            var verticalBar = this.verticalScrollBar;
            if (horizontalBar && horizontalBar.visible || verticalBar && verticalBar.visible) {
                if (!values[2 /* autoHideTimer */]) {
                    values[2 /* autoHideTimer */] = new egret.Timer(200, 1);
                    values[2 /* autoHideTimer */].addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onAutoHideTimer, this);
                }
                values[2 /* autoHideTimer */].reset();
                values[2 /* autoHideTimer */].start();
            }
            eui.UIEvent.emitUIEvent(this, eui.UIEvent.CHANGE_END);
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onAutoHideTimer = function (event) {
            var horizontalBar = this.horizontalScrollBar;
            var verticalBar = this.verticalScrollBar;
            if (horizontalBar) {
                horizontalBar.visible = false;
            }
            if (verticalBar) {
                verticalBar.visible = false;
            }
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
            var viewport = this.viewport;
            if (viewport) {
                //必须先调用setLayoutBoundsSize()，因为尺寸改变会影响布局位置。
                viewport.setLayoutBoundsSize(unscaledWidth, unscaledHeight);
                viewport.setLayoutBoundsPosition(0, 0);
            }
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            if (instance == this.horizontalScrollBar) {
                this.horizontalScrollBar.touchChildren = false;
                this.horizontalScrollBar.touchEnabled = false;
                this.horizontalScrollBar.viewport = this.viewport;
                this.horizontalScrollBar.visible = false;
            }
            else if (instance == this.verticalScrollBar) {
                this.verticalScrollBar.touchChildren = false;
                this.verticalScrollBar.touchEnabled = false;
                this.verticalScrollBar.viewport = this.viewport;
                this.verticalScrollBar.visible = false;
            }
        };
        /**
         * @language en_US
         * The threshold value(in pixels) trigger the rolling.
         * when the touch points deviate from the initial touch point than this value will trigger the rolling.
         *
         * @default 5
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 开始触发滚动的阈值（以像素为单位），当触摸点偏离初始触摸点的距离超过这个值时才会触发滚动。
         *
         * @default 5
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        Scroller.scrollThreshold = 5;
        return Scroller;
    })(eui.Component);
    eui.Scroller = Scroller;
    Scroller.prototype.__class__ = "eui.Scroller";
    egret.registerClass(Scroller,"eui.Scroller");
    eui.registerProperty(Scroller, "viewport", "eui.IViewport", true);
})(eui || (eui = {}));
