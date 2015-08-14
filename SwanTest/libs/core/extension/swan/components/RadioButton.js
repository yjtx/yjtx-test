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
    /**
     * @private
     * 存储根据groupName自动创建的RadioButtonGroup列表
     */
    var automaticRadioButtonGroups = {};
    /**
     * @language en_US
     * The RadioButton component allows the user make a single choice
     * within a set of mutually exclusive choices.
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/RadioButtonExample.ts
     */
    /**
     * @language zh_CN
     * RadioButton 组件使用户可在一组互相排斥的选择中做出一种选择
     *
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/RadioButtonExample.ts
     */
    var RadioButton = (function (_super) {
        __extends(RadioButton, _super);
        /**
         * @language en_US
         * Constructor.
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        function RadioButton() {
            _super.call(this);
            /**
             * @private
             * 在RadioButtonGroup中的索引
             */
            this.$indexNumber = 0;
            /**
             * @private
             * 所属的RadioButtonGroup
             */
            this.$radioButtonGroup = null;
            /**
             * @private
             */
            this._group = null;
            /**
             * @private
             */
            this.groupChanged = false;
            /**
             * @private
             */
            this._groupName = "radioGroup";
            /**
             * @private
             */
            this._value = null;
            this.groupName = "radioGroup";
        }
        var __egretProto__ = RadioButton.prototype;
        Object.defineProperty(__egretProto__, "enabled", {
            /**
             * @language en_US
             * The RadioButton component is enabled if the
             * RadioButtonGroup is enabled and the RadioButton itself is enabled.
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 如果 RadioButtonGroup 启用且 RadioButton 本身也启用，则 RadioButton 组件启用。
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                if (!this.$Component[3 /* enabled */]) {
                    return false;
                }
                return !this.$radioButtonGroup || this.$radioButtonGroup.$enabled;
            },
            set: function (value) {
                this.$setEnabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "group", {
            /**
             * @language en_US
             * The RadioButtonGroup component to which this RadioButton belongs.
             * If this property is not set,
             * a unique RadioButtonGroup is created automatically based on the groupName property.
             *
             * @see swan.RadioButton#groupName
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 此 RadioButton 所属的 RadioButtonGroup 组件。
             * 若不设置此属性，则根据groupName属性自动创建一个唯一的RadioButtonGroup。
             *
             * @see swan.RadioButton#groupName
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                if (!this._group && this._groupName) {
                    var g = automaticRadioButtonGroups[this._groupName];
                    if (!g) {
                        g = new swan.RadioButtonGroup();
                        g.$name = this._groupName;
                        automaticRadioButtonGroups[this._groupName] = g;
                    }
                    this._group = g;
                }
                return this._group;
            },
            set: function (value) {
                if (this._group == value)
                    return;
                if (this.$radioButtonGroup)
                    this.$radioButtonGroup.$removeInstance(this, false);
                this._group = value;
                this._groupName = value ? this.group.$name : "radioGroup";
                this.groupChanged = true;
                this.invalidateProperties();
                this.invalidateDisplayList();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "groupName", {
            /**
             * @language en_US
             * Specifies the name of the group to which this RadioButton component belongs
             *
             * @default “radioGroup”
             *
             * @see swan.RadioButton#group
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * RadioButton 组件所属的组的名称
             *
             * @default “radioGroup”
             *
             * @see swan.RadioButton#group
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this._groupName;
            },
            set: function (value) {
                if (!value || value == "")
                    return;
                this._groupName = value;
                if (this.$radioButtonGroup)
                    this.$radioButtonGroup.$removeInstance(this, false);
                this._group = null;
                this.groupChanged = true;
                this.invalidateProperties();
                this.invalidateDisplayList();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setSelected = function (value) {
            _super.prototype.$setSelected.call(this, value);
            this.invalidateDisplayList();
        };
        Object.defineProperty(__egretProto__, "value", {
            /**
             * @language en_US
             * Optional user-defined value
             * that is associated with a RadioButton component.
             *
             * @default null
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 与 RadioButton 组件关联的可选用户定义值。
             *
             * @default null
             *
             * @version Lark 1.0
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (this._value == value)
                    return;
                this._value = value;
                if (this.$selected && this.group) {
                    swan.PropertyEvent.emitPropertyEvent(this.group, swan.PropertyEvent.PROPERTY_CHANGE, "selectedValue");
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitProperties = function () {
            if (this.groupChanged) {
                this.addToGroup();
                this.groupChanged = false;
            }
            _super.prototype.commitProperties.call(this);
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            _super.prototype.updateDisplayList.call(this, unscaledWidth, unscaledHeight);
            if (this.group) {
                if (this.$selected)
                    this._group.$setSelection(this, false);
                else if (this.group.selection == this)
                    this._group.$setSelection(null, false);
            }
        };
        /**
         * @inheritDoc
         *
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.buttonReleased = function () {
            if (!this.enabled || this.selected)
                return;
            if (!this.$radioButtonGroup)
                this.addToGroup();
            _super.prototype.buttonReleased.call(this);
            this.group.$setSelection(this, true);
        };
        /**
         * @private
         * 添此单选按钮加到组
         */
        __egretProto__.addToGroup = function () {
            var g = this.group;
            if (g)
                g.$addInstance(this);
            return g;
        };
        return RadioButton;
    })(swan.ToggleButton);
    swan.RadioButton = RadioButton;
    RadioButton.prototype.__class__ = "swan.RadioButton";
    egret.registerClass(RadioButton,"swan.RadioButton");
})(swan || (swan = {}));
