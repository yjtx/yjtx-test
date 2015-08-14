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
     * Editable text for displaying,
     * scrolling, selecting, and editing text.
     * @includeExample examples/Samples/src/extension/swan/components/EditablTextExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    /**
     * @language zh_CN
     * 可编辑文本，用于显示、滚动、选择和编辑文本。
     * @includeExample examples/Samples/src/extension/swan/components/EditablTextExample.ts
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     */
    var EditableText = (function (_super) {
        __extends(EditableText, _super);
        /**
         * @language en_US
         * Constructor.
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        function EditableText() {
            _super.call(this);
            /**
             * @private
             */
            this._widthConstraint = NaN;
            this.initializeUIValues();
            this.type = egret.TextFieldType.INPUT;
        }
        var __egretProto__ = EditableText.prototype;
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
         * @copy swan.Component#createChildren()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.createChildren = function () {
        };
        /**
         * @copy swan.Component#childrenCreated()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.childrenCreated = function () {
        };
        /**
         * @copy swan.Component#commitProperties()
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitProperties = function () {
        };
        /**
         * @copy swan.Component#measure()
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
         * @copy swan.Component#updateDisplayList()
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
         * @copy swan.Component#invalidateParentLayout()
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
        return EditableText;
    })(egret.TextField);
    swan.EditableText = EditableText;
    EditableText.prototype.__class__ = "swan.EditableText";
    egret.registerClass(EditableText,"swan.EditableText",["swan.UIComponent","swan.IDisplayText"]);
    swan.sys.implementUIComponent(EditableText, egret.TextField);
    swan.registerBindable(EditableText.prototype, "text");
})(swan || (swan = {}));
