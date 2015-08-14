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
    var UIImpl = swan.sys.UIComponentImpl;
    /**
     * @language en_US
     * Label is an UIComponent that can render one or more lines of text.
     * The text to be displayed is determined by the <code>text</code> property.
     * The formatting of the text is specified by the styles，
     * such as <code>fontFamily</code> and <code>fontSize</code>.
     *
     * <p>Because Label is fast and lightweight, it is especially suitable
     * for use cases that involve rendering many small pieces of non-interactive
     * text, such as item renderers and labels in Button skins.</p>
     *
     * <p>In Label, three character sequences are recognized
     * as explicit line breaks: CR (<code>"\r"</code>), LF (<code>"\n"</code>),
     * and CR+LF (<code>"\r\n"</code>).</p>
     *
     * <p>If you don't specify any kind of width for a Label,
     * then the longest line, as determined by these explicit line breaks,
     * determines the width of the Label.</p>
     *
     * <p>If you do specify some kind of width, then the specified text is
     * word-wrapped at the right edge of the component's bounds.
     * If the text extends below the bottom of the component,
     * it is clipped.</p>
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/LabelExample.ts
     */
    /**
     * @language zh_CN
     * Label 是可以呈示一行或多行统一格式文本的UI组件。要显示的文本由 text 属性确定。文本格式由样式属性指定，例如 fontFamily 和 fontSize。
     * 因为 Label 运行速度快且占用内存少，所以它特别适合用于显示多个小型非交互式文本的情况，例如，项呈示器和 Button 外观中的标签。
     * 在 Label 中，将以下三个字符序列识别为显式换行符：CR（“\r”）、LF（“\n”）和 CR+LF（“\r\n”）。
     * 如果没有为 Label 指定宽度，则由这些显式换行符确定的最长行确定 Label 的宽度。
     * 如果指定了宽度，则指定文本将在组件边界的右边缘换行，如果文本扩展到低于组件底部，则将被剪切。
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/LabelExample.ts
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        /**
         * @language en_US
         * Constructor.
         *
         * @param text The text displayed by this text component.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @param text 此文本组件所显示的文本。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        function Label(text) {
            _super.call(this);
            /**
             * @private
             */
            this._widthConstraint = NaN;
            this.initializeUIValues();
            this.text = text;
        }
        var __egretProto__ = Label.prototype;
        /**
         * @private
         *
         */
        __egretProto__.$invalidateContentBounds = function () {
            _super.prototype.$invalidateContentBounds.call(this);
            this.invalidateSize();
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setWidth = function (value) {
            _super.prototype.$setWidth.call(this, value);
            UIImpl.prototype.$setWidth.call(this, value);
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setHeight = function (value) {
            _super.prototype.$setHeight.call(this, value);
            UIImpl.prototype.$setHeight.call(this, value);
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setText = function (value) {
            _super.prototype.$setText.call(this, value);
            swan.PropertyEvent.emitPropertyEvent(this, swan.PropertyEvent.PROPERTY_CHANGE, "text");
        };
        /**
         * @copy swan.UIComponent#createChildren
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.createChildren = function () {
        };
        /**
         * @copy swan.UIComponent#childrenCreated
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.childrenCreated = function () {
        };
        /**
         * @copy swan.UIComponent#commitProperties
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitProperties = function () {
        };
        /**
         * @copy swan.UIComponent#measure
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.measure = function () {
            var values = this.$UIComponent;
            var textValues = this.$TextField;
            var oldWidth = textValues[3 /* textFieldWidth */];
            var availableWidth = NaN;
            if (!isNaN(this._widthConstraint)) {
                availableWidth = this._widthConstraint;
                this._widthConstraint = NaN;
            }
            else if (!isNaN(values[8 /* explicitWidth */])) {
                availableWidth = values[8 /* explicitWidth */];
            }
            else if (values[13 /* maxWidth */] != 100000) {
                availableWidth = values[13 /* maxWidth */];
            }
            _super.prototype.$setWidth.call(this, availableWidth);
            this.setMeasuredSize(this.textWidth, this.textHeight);
            _super.prototype.$setWidth.call(this, oldWidth);
        };
        /**
         * @copy swan.UIComponent#updateDisplayList
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            _super.prototype.$setWidth.call(this, unscaledWidth);
            _super.prototype.$setHeight.call(this, unscaledHeight);
        };
        /**
         * @copy swan.UIComponent#invalidateParentLayout
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateParentLayout = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setMeasuredSize = function (width, height) {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateProperties = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateProperties = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateSize = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateSize = function (recursive) {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.invalidateDisplayList = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateDisplayList = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.validateNow = function () {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setLayoutBoundsSize = function (layoutWidth, layoutHeight) {
            UIImpl.prototype.setLayoutBoundsSize.call(this, layoutWidth, layoutHeight);
            if (isNaN(layoutWidth) || layoutWidth === this._widthConstraint || layoutWidth == 0) {
                return;
            }
            var values = this.$UIComponent;
            if (!isNaN(values[9 /* explicitHeight */])) {
                return;
            }
            if (layoutWidth == values[16 /* measuredWidth */]) {
                return;
            }
            this._widthConstraint = layoutWidth;
            this.invalidateSize();
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setLayoutBoundsPosition = function (x, y) {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getLayoutBounds = function (bounds) {
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getPreferredBounds = function (bounds) {
        };
        return Label;
    })(egret.TextField);
    swan.Label = Label;
    Label.prototype.__class__ = "swan.Label";
    egret.registerClass(Label,"swan.Label",["swan.UIComponent","swan.IDisplayText"]);
    swan.sys.implementUIComponent(Label, egret.TextField);
    swan.registerBindable(Label.prototype, "text");
})(swan || (swan = {}));
