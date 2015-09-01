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
     * The List control displays a vertical or horizontal list of items.
     * The user can select one or more items from the list, depending
     * on the value of the <code>allowMultipleSelection</code> property.
     *
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/components/ListExample.ts
     */
    /**
     * @language zh_CN
     * List 控件可显示垂直或水平的项目列表。用户可以根据 <code>allowMultipleSelection</code> 属性的值从列表中选择一个或多个项目。
     *
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/components/ListExample.ts
     */
    var List = (function (_super) {
        __extends(List, _super);
        function List() {
            var _this = this;
            _super.apply(this, arguments);
            /**
             * @language en_US
             * whether are allowed to multiple selection.
             * If <code>true</code> tap an unselected item will be selected,
             * and tap the item again will cancel selection.
             *
             * @default false
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 是否允许同时选中多项,设置为 <code>true</code> 时，触摸按下未选中的项呈示器，将会设置该项选中，再次按下将会取消选中。
             * 可以设置多项为选中状态。
             *
             * @default false
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            this.allowMultipleSelection = false;
            /**
             * @private
             */
            this._selectedIndices = [];
            /**
             * @private
             * 是否是有效的索引
             */
            this.isValidIndex = function (item, index, v) {
                return _this.$dataProvider && (item >= 0) && (item < _this.$dataProvider.length) && item % 1 == 0;
            };
        }
        var __egretProto__ = List.prototype;
        Object.defineProperty(__egretProto__, "selectedIndices", {
            /**
             * @language en_US
             * An Array of numbers representing the indices of the currently selected
             * item or items.
             *
             * @default []
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 当前选中的一个或多个项目的索引列表。
             *
             * @default []
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                if (this._proposedSelectedIndices)
                    return this._proposedSelectedIndices;
                return this._selectedIndices;
            },
            set: function (value) {
                this.setSelectedIndices(value, false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "selectedIndex", {
            /**
             * @inheritDoc
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                if (this._proposedSelectedIndices) {
                    if (this._proposedSelectedIndices.length > 0)
                        return this._proposedSelectedIndices[0];
                    return -1;
                }
                return this.$getSelectedIndex();
            },
            set: function (value) {
                this.setSelectedIndex(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "selectedItems", {
            /**
             * @language en_US
             * An Array representing the currently selected data items.
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 表示当前选定数据项的列表
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                var result = [];
                var list = this.selectedIndices;
                if (list) {
                    var count = list.length;
                    for (var i = 0; i < count; i++) {
                        result[i] = this.$dataProvider.getItemAt(list[i]);
                    }
                }
                return result;
            },
            set: function (value) {
                var indices = [];
                if (value) {
                    var count = value.length;
                    for (var i = 0; i < count; i++) {
                        var index = this.$dataProvider.getItemIndex(value[i]);
                        if (index != -1) {
                            indices.splice(0, 0, index);
                        }
                        if (index == -1) {
                            indices = [];
                            break;
                        }
                    }
                }
                this.setSelectedIndices(indices, false);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @language en_US
         * Specify whether the selectedIndices changed programmatically or due to
         * user interaction.
         *
         * @param value An array of numbers representing the indices of the selected
         * @param emitChangeEvent whether emitted a change event.
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 设置多个选中项。
         *
         * @param value 选中项索引的数组
         * @param emitChangeEvent 是否派发changed事件
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.setSelectedIndices = function (value, emitChangeEvent) {
            var values = this.$ListBase;
            if (emitChangeEvent)
                values[4 /* emitChangeAfterSelection */] = (values[4 /* emitChangeAfterSelection */] || emitChangeEvent);
            if (value)
                this._proposedSelectedIndices = value;
            else
                this._proposedSelectedIndices = [];
            this.invalidateProperties();
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitProperties = function () {
            _super.prototype.commitProperties.call(this);
            if (this._proposedSelectedIndices) {
                this.commitSelection();
            }
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitSelection = function (emitChangedEvents) {
            if (emitChangedEvents === void 0) { emitChangedEvents = true; }
            var values = this.$ListBase;
            var oldSelectedIndex = values[3 /* selectedIndex */];
            if (this._proposedSelectedIndices) {
                this._proposedSelectedIndices = this._proposedSelectedIndices.filter(this.isValidIndex);
                if (!this.allowMultipleSelection && this._proposedSelectedIndices.length > 0) {
                    var temp = [];
                    temp.push(this._proposedSelectedIndices[0]);
                    this._proposedSelectedIndices = temp;
                }
                if (this._proposedSelectedIndices.length > 0) {
                    values[2 /* proposedSelectedIndex */] = this._proposedSelectedIndices[0];
                }
                else {
                    values[2 /* proposedSelectedIndex */] = -1;
                }
            }
            var retVal = _super.prototype.commitSelection.call(this, false);
            if (!retVal) {
                this._proposedSelectedIndices = null;
                return false;
            }
            var selectedIndex = this.$getSelectedIndex();
            if (selectedIndex > eui.ListBase.NO_SELECTION) {
                if (this._proposedSelectedIndices) {
                    if (this._proposedSelectedIndices.indexOf(selectedIndex) == -1)
                        this._proposedSelectedIndices.push(selectedIndex);
                }
                else {
                    this._proposedSelectedIndices = [selectedIndex];
                }
            }
            if (this._proposedSelectedIndices) {
                if (this._proposedSelectedIndices.indexOf(oldSelectedIndex) != -1)
                    this.itemSelected(oldSelectedIndex, true);
                this.commitMultipleSelection();
            }
            if (emitChangedEvents && retVal) {
                if (values[4 /* emitChangeAfterSelection */]) {
                    this.dispatchEventWith(egret.Event.CHANGE);
                    values[4 /* emitChangeAfterSelection */] = false;
                }
                eui.PropertyEvent.emitPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "selectedIndex");
                eui.PropertyEvent.emitPropertyEvent(this, eui.PropertyEvent.PROPERTY_CHANGE, "selectedItem");
            }
            return retVal;
        };
        /**
         * @language en_US
         * Given a new selection interval, figure out which
         * items are newly added/removed from the selection interval and update
         * selection properties and view accordingly.
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 从给定的选择区间中找出新增或者移除的项，并更新属性。
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitMultipleSelection = function () {
            var removedItems = [];
            var addedItems = [];
            var i;
            var count;
            var selectedIndices = this._selectedIndices;
            var proposedSelectedIndices = this._proposedSelectedIndices;
            if (selectedIndices.length > 0 && proposedSelectedIndices.length > 0) {
                count = proposedSelectedIndices.length;
                for (i = 0; i < count; i++) {
                    if (selectedIndices.indexOf(proposedSelectedIndices[i]) == -1)
                        addedItems.push(proposedSelectedIndices[i]);
                }
                count = selectedIndices.length;
                for (i = 0; i < count; i++) {
                    if (proposedSelectedIndices.indexOf(selectedIndices[i]) == -1)
                        removedItems.push(selectedIndices[i]);
                }
            }
            else if (selectedIndices.length > 0) {
                removedItems = selectedIndices;
            }
            else if (proposedSelectedIndices.length > 0) {
                addedItems = proposedSelectedIndices;
            }
            this._selectedIndices = proposedSelectedIndices;
            if (removedItems.length > 0) {
                count = removedItems.length;
                for (i = 0; i < count; i++) {
                    this.itemSelected(removedItems[i], false);
                }
            }
            if (addedItems.length > 0) {
                count = addedItems.length;
                for (i = 0; i < count; i++) {
                    this.itemSelected(addedItems[i], true);
                }
            }
            this._proposedSelectedIndices = null;
        };
        /**
         * @private
         *
         * @param index
         * @returns
         */
        __egretProto__.$isItemIndexSelected = function (index) {
            if (this.allowMultipleSelection)
                return this._selectedIndices.indexOf(index) != -1;
            return _super.prototype.$isItemIndexSelected.call(this, index);
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.dataProviderRefreshed = function () {
            if (this.allowMultipleSelection) {
                return;
            }
            _super.prototype.dataProviderRefreshed.call(this);
        };
        /**
         * @private
         * 计算当前的选中项列表
         */
        __egretProto__.calculateSelectedIndices = function (index) {
            var interval = [];
            var selectedIndices = this._selectedIndices;
            var length = selectedIndices.length;
            if (length > 0) {
                if (length == 1 && (selectedIndices[0] == index)) {
                    if (!this.$ListBase[0 /* requireSelection */]) {
                        return interval;
                    }
                    interval.splice(0, 0, selectedIndices[0]);
                    return interval;
                }
                else {
                    var found = false;
                    for (var i = 0; i < length; i++) {
                        if (selectedIndices[i] == index) {
                            found = true;
                        }
                        else if (selectedIndices[i] != index) {
                            interval.splice(0, 0, selectedIndices[i]);
                        }
                    }
                    if (!found) {
                        interval.splice(0, 0, index);
                    }
                    return interval;
                }
            }
            else {
                interval.splice(0, 0, index);
                return interval;
            }
        };
        /**
         * @inheritDoc
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.onRendererTouchEnd = function (event) {
            if (this.allowMultipleSelection) {
                var itemRenderer = (event.currentTarget);
                var touchDownItemRenderer = this.$ListBase[7 /* touchDownItemRenderer */];
                if (itemRenderer != touchDownItemRenderer)
                    return;
                this.setSelectedIndices(this.calculateSelectedIndices(itemRenderer.itemIndex), true);
                eui.ItemTapEvent.emitItemTapEvent(this, eui.ItemTapEvent.ITEM_TAP, itemRenderer);
            }
            else {
                _super.prototype.onRendererTouchEnd.call(this, event);
            }
        };
        return List;
    })(eui.ListBase);
    eui.List = List;
    List.prototype.__class__ = "eui.List";
    egret.registerClass(List,"eui.List");
})(eui || (eui = {}));
