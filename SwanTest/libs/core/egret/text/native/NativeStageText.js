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
     * @classdesc
     * @implements egret.StageText
     * @private
     * @version Egret 2.0
     * @platform Web,Native
     */
    var NativeStageText = (function (_super) {
        __extends(NativeStageText, _super);
        /**
         * @version Egret 2.0
         * @platform Web,Native
         */
        function NativeStageText() {
            _super.call(this);
            /**
             * @private
             */
            this.textValue = "";
            /**
             * @private
             */
            this.textType = null;
            /**
             * @private
             */
            this.isFinishDown = false;
            this.$textfield = new egret.TextField();
            var tf = this.$textfield;
            tf.textColor = 0;
            tf.text = "";
            tf.textAlign = egret.HorizontalAlign.LEFT;
            this.container = new egret.DisplayObjectContainer();
            this.textValue = "";
        }
        var __egretProto__ = NativeStageText.prototype;
        /**
         * @private
         *
         */
        __egretProto__.createText = function () {
            var container = this.container;
            var stage = egret.MainContext.instance.stage;
            var stageWidth = stage.stageWidth;
            var stageHeight = stage.stageHeight;
            if (container.numChildren <= 0) {
                var shape = new egret.Shape();
                shape.graphics.beginFill(0x000000, .7);
                shape.graphics.drawRect(0, 0, stageWidth, stageHeight);
                shape.graphics.endFill();
                shape.width = stageWidth;
                shape.height = stageHeight;
                shape.touchEnabled = true;
                container.addChild(shape);
                var textInputBackground = new egret.Shape();
                this.textBg = textInputBackground;
                container.addChild(textInputBackground);
                textInputBackground.touchEnabled = true;
                var tf = this.$textfield;
                tf.x = 15;
                tf.touchEnabled = true;
                container.addChild(tf);
                tf.width = stageWidth;
                tf.size = 30;
                var border = new egret.Shape();
                this.textBorder = border;
                container.addChild(border);
                border.touchEnabled = true;
                this.textBg.width = stageWidth - 30;
                this.textBorder.width = stageWidth - 30;
            }
            this.textBg.graphics.clear();
            this.textBorder.graphics.clear();
            this.textBorder.graphics.lineStyle(8, 0xff0000, 1);
            this.textBg.graphics.beginFill(0xffffff, 1);
            var h = 30;
            if (this.$textfield.multiline) {
                h = 90;
            }
            this.textBg.graphics.drawRect(4, 4, stageWidth - 8, h + 22);
            this.textBorder.graphics.drawRect(4, 4, stageWidth - 8, h + 22);
            var maxH = Math.max(this.$textfield.height, h);
            this.$textfield.y = h - maxH + 15;
            this.textBg.height = h + 22;
            this.textBorder.height = h + 22;
            this.textBg.graphics.endFill();
            this.textBorder.graphics.endFill();
        };
        /**
         * @private
         *
         * @returns
         */
        __egretProto__.$getText = function () {
            if (!this.textValue) {
                this.textValue = "";
            }
            return this.textValue;
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setText = function (value) {
            this.textValue = value;
            this.resetText();
        };
        /**
         * @private
         *
         * @param type
         */
        __egretProto__.$setTextType = function (type) {
            this.textType = type;
            this.resetText();
        };
        /**
         * @private
         *
         * @returns
         */
        __egretProto__.$getTextType = function () {
            return this.textType;
        };
        /**
         * @private
         *
         */
        __egretProto__.resetText = function () {
            if (this.textType == "password") {
                var passwordStr = "";
                for (var i = 0; i < this.textValue.length; i++) {
                    switch (this.textValue.charAt(i)) {
                        case '\n':
                            passwordStr += "\n";
                            break;
                        case '\r':
                            break;
                        default:
                            passwordStr += '*';
                    }
                }
                this.$textfield.text = passwordStr;
            }
            else {
                this.$textfield.text = this.textValue;
            }
            var h = 30;
            if (this.$textfield.multiline) {
                h = 90;
            }
            var maxH = Math.max(this.$textfield.height, h);
            this.$textfield.y = h - maxH + 15;
        };
        //全屏键盘
        __egretProto__.showScreenKeyboard = function () {
            var self = this;
            self.dispatchEvent(new egret.Event("blur"));
            egret_native.EGT_TextInput = function (appendText) {
                if (self.$textfield.multiline) {
                    if (self.isFinishDown) {
                        self.isFinishDown = false;
                        self.textValue = appendText;
                        self.resetText();
                        self.dispatchEvent(new egret.Event("updateText"));
                    }
                }
                else {
                    self.textValue = appendText.replace(/[\n|\r]/, "");
                    self.resetText();
                    //关闭软键盘
                    egret_native.TextInputOp.setKeybordOpen(false);
                    self.dispatchEvent(new egret.Event("updateText"));
                }
            };
            //点击完成
            egret_native.EGT_keyboardFinish = function () {
                if (self.$textfield.multiline) {
                    self.isFinishDown = true;
                }
            };
        };
        /**
         * @private
         *
         */
        __egretProto__.showPartKeyboard = function () {
            var container = this.container;
            var stage = egret.MainContext.instance.stage;
            stage.addChild(container);
            this.createText();
            var self = this;
            egret_native.EGT_TextInput = function (appendText) {
                if (self.$textfield.multiline) {
                }
                else {
                    if (appendText == "\n") {
                        if (container && container.parent) {
                            self.dispatchEvent(new egret.Event("blur"));
                            container.parent.removeChild(container);
                        }
                        egret_native.TextInputOp.setKeybordOpen(false);
                        return;
                    }
                }
                self.textValue += appendText;
                self.resetText();
                self.dispatchEvent(new egret.Event("updateText"));
            };
            egret_native.EGT_deleteBackward = function () {
                var text = self.$getText();
                text = text.substr(0, text.length - 1);
                self.textValue = text;
                self.resetText();
                self.dispatchEvent(new egret.Event("updateText"));
            };
            //系统关闭键盘
            egret_native.EGT_keyboardDidHide = function () {
                if (container && container.parent) {
                    self.dispatchEvent(new egret.Event("blur"));
                    container.parent.removeChild(container);
                }
            };
        };
        /**
         * @private
         *
         */
        __egretProto__.$show = function () {
            var self = this;
            egret_native.EGT_getTextEditerContentText = function () {
                return self.$getText();
            };
            egret_native.EGT_keyboardDidShow = function () {
                if (egret_native.TextInputOp.isFullScreenKeyBoard()) {
                    self.showScreenKeyboard();
                }
                else {
                    self.showPartKeyboard();
                }
                egret_native.EGT_keyboardDidShow = function () {
                };
            };
            egret_native.TextInputOp.setInputTextMaxLenght(self.$textfield.maxChars > 0 ? self.$textfield.maxChars : -1);
            egret_native.TextInputOp.setKeybordOpen(true);
        };
        /**
         * @private
         *
         */
        __egretProto__.$remove = function () {
            var container = this.container;
            if (container && container.parent) {
                container.parent.removeChild(container);
            }
        };
        /**
         * @private
         *
         */
        __egretProto__.$hide = function () {
            this.$remove();
            this.dispatchEvent(new egret.Event("blur"));
            egret_native.TextInputOp.setKeybordOpen(false);
        };
        __egretProto__.$resetStageText = function () {
        };
        __egretProto__.$addToStage = function () {
        };
        __egretProto__.$removeFromStage = function () {
        };
        __egretProto__.$setTextField = function (value) {
        };
        return NativeStageText;
    })(egret.EventDispatcher);
    egret.NativeStageText = NativeStageText;
    NativeStageText.prototype.__class__ = "egret.NativeStageText";
    egret.registerClass(NativeStageText,"egret.NativeStageText",["egret.StageText"]);
    egret.StageText = NativeStageText;
})(egret || (egret = {}));
