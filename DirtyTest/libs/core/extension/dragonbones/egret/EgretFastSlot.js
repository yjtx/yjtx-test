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
var dragonBones;
(function (dragonBones) {
    /**
     * @class dragonBones.EgretSlot
     * @extends dragonBones.Slot
     * @classdesc
     * egret引擎使用的插槽
     */
    var EgretFastSlot = (function (_super) {
        __extends(EgretFastSlot, _super);
        /**
         * 创建一个新的 EgretSlot 实例
         */
        function EgretFastSlot() {
            _super.call(this, this);
            this._egretDisplay = null;
        }
        var __egretProto__ = EgretFastSlot.prototype;
        /**
         * 释放资源
         */
        __egretProto__.dispose = function () {
            if (this._displayList) {
                var length = this._displayList.length;
                for (var i = 0; i < length; i++) {
                    var content = this._displayList[i];
                    if (content instanceof dragonBones.FastArmature) {
                        content.dispose();
                    }
                }
            }
            _super.prototype.dispose.call(this);
            this._egretDisplay = null;
        };
        /** @private */
        __egretProto__._updateDisplay = function (value) {
            this._egretDisplay = value;
        };
        //Abstract method
        /** @private */
        __egretProto__._getDisplayIndex = function () {
            if (this._egretDisplay && this._egretDisplay.parent) {
                return this._egretDisplay.parent.getChildIndex(this._egretDisplay);
            }
            return -1;
        };
        /** @private */
        __egretProto__._addDisplayToContainer = function (container, index) {
            if (index === void 0) { index = -1; }
            var egretContainer = container;
            if (this._egretDisplay && egretContainer) {
                if (index < 0) {
                    egretContainer.addChild(this._egretDisplay);
                }
                else {
                    egretContainer.addChildAt(this._egretDisplay, Math.min(index, egretContainer.numChildren));
                }
            }
        };
        /** @private */
        __egretProto__._removeDisplayFromContainer = function () {
            if (this._egretDisplay && this._egretDisplay.parent) {
                this._egretDisplay.parent.removeChild(this._egretDisplay);
            }
        };
        /** @private */
        __egretProto__._updateTransform = function () {
            if (this._egretDisplay) {
                this._egretDisplay.$setMatrix(egret.$TempMatrix.copyFrom(this._globalTransformMatrix), false);
            }
        };
        /** @private */
        __egretProto__._updateDisplayVisible = function (value) {
            //if(this._egretDisplay && this._parent){
            //    this._egretDisplay.visible = this._parent._visible && this._visible && value;
            //}
        };
        /** @private */
        __egretProto__._updateDisplayColor = function (aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier, colorChanged) {
            if (colorChanged === void 0) { colorChanged = false; }
            _super.prototype._updateDisplayColor.call(this, aOffset, rOffset, gOffset, bOffset, aMultiplier, rMultiplier, gMultiplier, bMultiplier, colorChanged);
            if (this._egretDisplay) {
                this._egretDisplay.alpha = aMultiplier;
            }
        };
        /** @private */
        __egretProto__._updateDisplayBlendMode = function (value) {
            if (this._egretDisplay && value) {
                this._egretDisplay.blendMode = value;
            }
        };
        return EgretFastSlot;
    })(dragonBones.FastSlot);
    dragonBones.EgretFastSlot = EgretFastSlot;
    EgretFastSlot.prototype.__class__ = "dragonBones.EgretFastSlot";
    egret.registerClass(EgretFastSlot,"dragonBones.EgretFastSlot");
})(dragonBones || (dragonBones = {}));
