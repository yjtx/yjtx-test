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
     * @private
     * 默认的皮肤适配器
     */
    var assetAdapter = new eui.DefaultAssetAdapter();
    /**
     * @language en_US
     * The Image control lets you show JPEG, PNG, and GIF files
     * at runtime. Image inherit Bitmap，so you can set the <code>bitmapData</code> property
     * to show the data. you can also set the <code>source</code> property, Image will auto load
     * and show the url image or the bitmapData.
     *
     * @event egret.Event.COMPLETE Emitted when the image loaded complete.
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/components/ImageExample.ts
     */
    /**
     * @language zh_CN
     * Image 控件允许您在运行时显示 JPEG、PNG 等图片文件文件。Image 继承至 Bitmap，因此您可以直接对其 bitmapData 属性，
     * 赋值从外部加载得到的位图数据以显示对应图片。同时，Image 还提供了更加方便的 source 属性，source 属性可以接受一个网络图片url作为值，
     * 赋值为url后，它内部会自动去加载并显示图片。并且您同样也可以直接把 BitmapData 对象赋值给 source 属性以显示图片。
     *
     * @event egret.Event.COMPLETE 当图片加载完成后调度
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/components/ImageExample.ts
     */
    var Image = (function (_super) {
        __extends(Image, _super);
        /**
         * @language en_US
         * Constructor.
         *
         * @param source The source used for the bitmap fill. the value can be
         * a string or an instance of <code>egret.Texture</code>
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 构造函数。
         *
         * @param source 用于位图填充的源。可以是一个字符串或者 <code>egret.Texture</code> 对象
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        function Image(source) {
            _super.call(this);
            //endif*/
            /**
             * @private
             */
            this.sourceChanged = false;
            /**
             * @private
             */
            this._source = null;
            this.initializeUIValues();
            if (source) {
                this.source = source;
            }
        }
        var __egretProto__ = Image.prototype;
        Object.defineProperty(__egretProto__, "scale9Grid", {
            /**
             * @language en_US
             * Represent a Rectangle Area that the 9 scale area of Image.
             * Notice: This property is valid only when <code>fillMode</code>
             * is <code>BitmapFillMode.SCALE</code>.
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 矩形区域，它定义素材对象的九个缩放区域。
             * 注意:此属性仅在<code>fillMode</code>为<code>BitmapFillMode.SCALE</code>时有效。
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$scale9Grid;
            },
            set: function (value) {
                this.$scale9Grid = value;
                this.$invalidateContentBounds();
                this.invalidateDisplayList();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "fillMode", {
            /**
             * @language en_US
             * Determines how the bitmap fills in the dimensions.
             * <p>When set to <code>BitmapFillMode.CLIP</code>, the bitmap
             * ends at the edge of the region.</p>
             * <p>When set to <code>BitmapFillMode.REPEAT</code>, the bitmap
             * repeats to fill the region.</p>
             * <p>When set to <code>BitmapFillMode.SCALE</code>, the bitmap
             * stretches to fill the region.</p>
             *
             * @default <code>BitmapFillMode.SCALE</code>
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 确定位图填充尺寸的方式。
             * <p>设置为 <code>BitmapFillMode.CLIP</code>时，位图将在边缘处被截断。</p>
             * <p>设置为 <code>BitmapFillMode.REPEAT</code>时，位图将重复以填充区域。</p>
             * <p>设置为 <code>BitmapFillMode.SCALE</code>时，位图将拉伸以填充区域。</p>
             *
             * @default <code>BitmapFillMode.SCALE</code>
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$fillMode;
            },
            set: function (value) {
                if (value == this.$fillMode) {
                    return;
                }
                this.$fillMode = value;
                this.invalidateDisplayList();
            },
            enumerable: true,
            configurable: true
        });
        //if egret
        __egretProto__.$setFillMode = function (value) {
            _super.prototype.$setFillMode.call(this, value);
            this.invalidateDisplayList();
        };
        Object.defineProperty(__egretProto__, "source", {
            /**
             * @language en_US
             * The source used for the bitmap fill. the value can be
             * a string or an instance of <code>egret.Texture</code>
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 用于位图填充的源。可以是一个字符串或者 <code>egret.Texture</code> 对象
             *
             * @version Egret 2.4
             * @version Swan 1.0
             * @platform Web,Native
             */
            get: function () {
                return this._source;
            },
            set: function (value) {
                if (value == this._source) {
                    return;
                }
                this._source = value;
                this.sourceChanged = true;
                this.invalidateProperties();
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.$setBitmapData = function (value) {
            if (value == this.$Bitmap[0 /* bitmapData */]) {
                return;
            }
            _super.prototype.$setBitmapData.call(this, value);
            this.sourceChanged = false;
            this.invalidateSize();
            this.invalidateDisplayList();
        };
        /**
         * @private
         * 解析source
         */
        __egretProto__.parseSource = function () {
            this.sourceChanged = false;
            var source = this._source;
            if (source && typeof source == "string") {
                var adapter = this.$stage.getImplementation("eui.IAssetAdapter");
                if (!adapter) {
                    adapter = assetAdapter;
                }
                adapter.getAsset(this._source, this.contentChanged, this);
            }
            else {
                this.$setBitmapData(source);
            }
        };
        /**
         * @private
         * 资源发生改变
         */
        __egretProto__.contentChanged = function (data, source) {
            if (source !== this._source)
                return;
            if (!egret.is(data, "egret.Texture")) {
                return;
            }
            this.$setBitmapData(data);
            if (data) {
                this.dispatchEventWith(egret.Event.COMPLETE);
            }
            else if (DEBUG) {
                egret.$warn(2301, source);
            }
        };
        __egretProto__.$measureContentBounds = function (bounds) {
            var values = this.$Bitmap;
            var image = this.$Bitmap[0 /* bitmapData */];
            if (image) {
                var uiValues = this.$UIComponent;
                var width = uiValues[10 /* width */];
                var height = uiValues[11 /* height */];
                if (isNaN(width) || isNaN(height)) {
                    bounds.setEmpty();
                    return;
                }
                if (this.$fillMode == "clip") {
                    if (width > image.$getTextureWidth()) {
                        width = image.$getTextureWidth();
                    }
                    if (height > image.$getTextureHeight()) {
                        height = image.$getTextureHeight();
                    }
                }
                bounds.setTo(0, 0, width, height);
            }
            else {
                bounds.setEmpty();
            }
        };
        /**
         * @private
         *
         * @param context
         */
        __egretProto__.$render = function (context) {
            var image = this.$Bitmap[0 /* bitmapData */];
            if (!image) {
                return;
            }
            var uiValues = this.$UIComponent;
            var width = uiValues[10 /* width */];
            var height = uiValues[11 /* height */];
            if (width === 0 || height === 0) {
                return;
            }
            var values = this.$Bitmap;
            egret.Bitmap.$drawImage(context, values[1 /* image */], values[2 /* clipX */], values[3 /* clipY */], values[4 /* clipWidth */], values[5 /* clipHeight */], values[6 /* offsetX */], values[7 /* offsetY */], values[8 /* width */], values[9 /* height */], width, height, this.$scale9Grid, this.$fillMode, this.$smoothing);
        };
        /**
         * @copy eui.UIComponent#createChildren
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.createChildren = function () {
        };
        /**
         * @copy eui.UIComponent#childrenCreated
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.childrenCreated = function () {
        };
        /**
         * @copy eui.UIComponent#commitProperties
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.commitProperties = function () {
            eui.sys.UIComponentImpl.prototype["commitProperties"].call(this);
            if (this.sourceChanged) {
                this.parseSource();
            }
        };
        /**
         * @copy eui.UIComponent#measure
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.measure = function () {
            var bitmapData = this.$Bitmap[0 /* bitmapData */];
            if (bitmapData) {
                this.setMeasuredSize(bitmapData.$getTextureWidth(), bitmapData.$getTextureHeight());
            }
            else {
                this.setMeasuredSize(0, 0);
            }
        };
        /**
         * @copy eui.UIComponent#updateDisplayList
         *
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.updateDisplayList = function (unscaledWidth, unscaledHeight) {
            this.$invalidateContentBounds();
        };
        /**
         * @copy eui.UIComponent#invalidateParentLayout
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
        return Image;
    })(egret.Bitmap);
    eui.Image = Image;
    Image.prototype.__class__ = "eui.Image";
    egret.registerClass(Image,"eui.Image",["eui.UIComponent"]);
    eui.sys.implementUIComponent(Image, egret.Bitmap);
    eui.registerProperty(Image, "scale9Grid", "egret.Rectangle");
})(eui || (eui = {}));
