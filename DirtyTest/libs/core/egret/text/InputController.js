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
    /**
     * @private
     * @version Egret 2.0
     * @platform Web,Native
     */
    var InputController = (function (_super) {
        __extends(InputController, _super);
        /**
         * @version Egret 2.0
         * @platform Web,Native
         */
        function InputController() {
            _super.call(this);
            /**
             * @private
             */
            this._text = null;
            /**
             * @private
             */
            this._isFocus = false;
        }
        var __egretProto__ = InputController.prototype;
        /**
         *
         * @param text
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.init = function (text) {
            this._text = text;
            this.stageText = new egret.StageText();
            this.stageText.$setTextField(this._text);
        };
        /**
         * @private
         *
         */
        __egretProto__._addStageText = function () {
            this.stageText.$addToStage();
            this.stageText.addEventListener("updateText", this.updateTextHandler, this);
            this._text.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            this._text.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
            this.stageText.addEventListener("blur", this.blurHandler, this);
            this.stageText.addEventListener("focus", this.focusHandler, this);
        };
        /**
         * @private
         *
         */
        __egretProto__._removeStageText = function () {
            this.stageText.$removeFromStage();
            this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
            this._text.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
            this._text.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
            this.stageText.removeEventListener("blur", this.blurHandler, this);
            this.stageText.removeEventListener("focus", this.focusHandler, this);
        };
        /**
         * @private
         *
         * @returns
         */
        __egretProto__._getText = function () {
            return this.stageText.$getText();
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__._setText = function (value) {
            this.stageText.$setText(value);
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.focusHandler = function (event) {
            //不再显示竖线，并且输入框显示最开始
            this._isFocus = true;
            this._text._isTyping = true;
            this._text.$invalidateContentBounds();
            this._text.dispatchEvent(new egret.FocusEvent(egret.FocusEvent.FOCUS_IN, true));
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.blurHandler = function (event) {
            //不再显示竖线，并且输入框显示最开始
            this._isFocus = false;
            this._text._isTyping = false;
            this._text.$invalidateContentBounds();
            this._text.dispatchEvent(new egret.FocusEvent(egret.FocusEvent.FOCUS_OUT, true));
        };
        //点中文本
        __egretProto__.onMouseDownHandler = function (event) {
            event.stopPropagation();
            var self = this;
            if (!this._text.visible) {
                return;
            }
            if (this._isFocus) {
                return;
            }
            this._isFocus = true;
            //强制更新输入框位置
            this.stageText.$show();
        };
        //未点中文本
        __egretProto__.onStageDownHandler = function (event) {
            this.stageText.$hide();
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.updateTextHandler = function (event) {
            console.log("111");
            var values = this._text.$TextField;
            var textValue = this.stageText.$getText();
            var isChanged = false;
            if (values[35 /* restrictAnd */] != null) {
                var reg = new RegExp("[" + values[35 /* restrictAnd */] + "]", "g");
                var result = textValue.match(reg);
                console.log(result);
                if (result) {
                    textValue = result.join("");
                }
                else {
                    textValue = "";
                }
                isChanged = true;
            }
            if (values[36 /* restrictNot */] != null) {
                reg = new RegExp("[^" + values[36 /* restrictNot */] + "]", "g");
                result = textValue.match(reg);
                console.log(result);
                if (result) {
                    textValue = result.join("");
                }
                else {
                    textValue = "";
                }
                isChanged = true;
            }
            if (isChanged) {
                this.stageText.$setText(textValue);
            }
            this.resetText();
            //抛出change事件
            this._text.dispatchEvent(new egret.Event(egret.Event.CHANGE, true));
        };
        /**
         * @private
         *
         */
        __egretProto__.resetText = function () {
            this._text._setBaseText(this.stageText.$getText());
        };
        /**
         * @private
         *
         */
        __egretProto__._hideInput = function () {
            this.stageText.$removeFromStage();
        };
        /**
         * @private
         *
         */
        __egretProto__._updateTransform = function () {
            if (!this._text.$visible && this.stageText) {
                this._hideInput();
            }
        };
        /**
         * @private
         *
         */
        __egretProto__._updateProperties = function () {
            if (this._isFocus) {
                //整体修改
                this.stageText.$resetStageText();
                this._updateTransform();
                return;
            }
            var stage = this._text.$stage;
            if (stage == null) {
            }
            else {
                var item = this._text;
                var visible = item.$visible;
                while (true) {
                    if (!visible) {
                        break;
                    }
                    item = item.parent;
                    if (item == stage) {
                        break;
                    }
                    visible = item.$visible;
                }
            }
            this.stageText.$setText(this._text.$TextField[13 /* text */]);
            //整体修改
            this.stageText.$resetStageText();
            this._updateTransform();
        };
        return InputController;
    })(egret.HashObject);
    egret.InputController = InputController;
    InputController.prototype.__class__ = "egret.InputController";
    egret.registerClass(InputController,"egret.InputController");
})(egret || (egret = {}));
