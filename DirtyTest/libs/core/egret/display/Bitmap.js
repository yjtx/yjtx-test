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
     * @language en_US
     * The Bitmap class represents display objects that represent bitmap images.
     * The Bitmap() constructor allows you to create a Bitmap object that contains a reference to a BitmapData object.
     * After you create a Bitmap object, use the addChild() or addChildAt() method of the parent DisplayObjectContainer
     * instance to place the bitmap on the display list.A Bitmap object can share its texture reference among several
     * Bitmap objects, independent of translation or rotation properties. Because you can create multiple Bitmap objects
     * that reference the same texture object, multiple display objects can use the same complex texture object
     * without incurring the memory overhead of a texture object for each display object instance.
     *
     * @see egret.Texture
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/display/Bitmap.ts
     */
    /**
     * @language zh_CN
     * Bitmap 类表示用于显示位图图片的显示对象。
     * 利用 Bitmap() 构造函数，可以创建包含对 BitmapData 对象引用的 Bitmap 对象。创建了 Bitmap 对象后，
     * 使用父级 DisplayObjectContainer 实例的 addChild() 或 addChildAt() 方法可以将位图放在显示列表中。
     * 一个 Bitmap 对象可在若干 Bitmap 对象之中共享其 texture 引用，与缩放或旋转属性无关。
     * 由于能够创建引用相同 texture 对象的多个 Bitmap 对象，因此，多个显示对象可以使用相同的 texture 对象，
     * 而不会因为每个显示对象实例使用一个 texture 对象而产生额外内存开销。
     *
     * @see egret.Texture
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/display/Bitmap.ts
     */
    var Bitmap = (function (_super) {
        __extends(Bitmap, _super);
        /**
         * @language en_US
         * Initializes a Bitmap object to refer to the specified BitmapData object.
         * @param bitmapData The BitmapData object being referenced.
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个引用指定 BitmapData 实例的 Bitmap 对象
         * @param bitmapData 被引用的 BitmapData 实例
         * @version Egret 2.0
         * @platform Web,Native
         */
        function Bitmap(bitmapData) {
            _super.call(this);
            /**
             * @private
             */
            this.$scale9Grid = null;
            /**
             * @private
             */
            this.$fillMode = "scale";
            /**
             * @private
             */
            this.$smoothing = true;
            this._pixelHitTest = false;
            this.$renderRegion = new egret.sys.Region();
            this.$Bitmap = {
                0: null,
                1: null,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: true,
                11: NaN,
                12: NaN //explicitBitmapHeight,
            };
            this.$setBitmapData(bitmapData);
        }
        var __egretProto__ = Bitmap.prototype;
        /**
         * @private
         * 显示对象添加到舞台
         */
        __egretProto__.$onAddToStage = function (stage, nestLevel) {
            _super.prototype.$onAddToStage.call(this, stage, nestLevel);
            if (this.$bitmapData) {
                if (this.$bitmapData instanceof egret.Texture) {
                    egret.Texture.$addDisplayObject(this, this.$bitmapData._bitmapData.hashCode);
                }
                else {
                    egret.Texture.$addDisplayObject(this, this.$bitmapData.hashCode);
                }
            }
        };
        /**
         * @private
         * 显示对象从舞台移除
         */
        __egretProto__.$onRemoveFromStage = function () {
            _super.prototype.$onRemoveFromStage.call(this);
            if (this.$bitmapData) {
                if (this.$bitmapData instanceof egret.Texture) {
                    egret.Texture.$removeDisplayObject(this, this.$bitmapData._bitmapData.hashCode);
                }
                else {
                    egret.Texture.$removeDisplayObject(this, this.$bitmapData.hashCode);
                }
            }
        };
        Object.defineProperty(__egretProto__, "bitmapData", {
            /**
             * @language en_US
             * The BitmapData object being referenced.
             * @version Lark 1.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 被引用的 BitmapData 对象。
             * @version Lark 1.0
             * @platform Web,Native
             */
            get: function () {
                return this.$Bitmap[0 /* bitmapData */];
            },
            set: function (value) {
                this.$setBitmapData(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(__egretProto__, "texture", {
            get: function () {
                return this.$Bitmap[0 /* bitmapData */];
            },
            set: function (value) {
                this.$setBitmapData(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         */
        __egretProto__.$setBitmapData = function (value) {
            var values = this.$Bitmap;
            if (value == values[0 /* bitmapData */]) {
                return;
            }
            values[0 /* bitmapData */] = value;
            if (value) {
                if (value instanceof egret.Texture) {
                    var texture = value;
                    this.setImageData(texture._bitmapData, texture._bitmapX, texture._bitmapY, texture._bitmapWidth, texture._bitmapHeight, texture._offsetX, texture._offsetY, texture.$getTextureWidth(), texture.$getTextureHeight());
                }
                else {
                    this.setImageData(value, 0, 0, value.width, value.height, 0, 0, value.width, value.height);
                }
            }
            else {
                this.setImageData(null, 0, 0, 0, 0, 0, 0, 0, 0);
            }
            if (this.$stage) {
                if (value instanceof egret.Texture) {
                    egret.Texture.$addDisplayObject(this, value._bitmapData.hashCode);
                }
                else {
                    egret.Texture.$addDisplayObject(this, value.hashCode);
                }
            }
            this.$invalidateContentBounds();
        };
        /**
         * @private
         */
        __egretProto__.setImageData = function (image, clipX, clipY, clipWidth, clipHeight, offsetX, offsetY, width, height) {
            var values = this.$Bitmap;
            values[1 /* image */] = image;
            values[2 /* clipX */] = clipX;
            values[3 /* clipY */] = clipY;
            values[4 /* clipWidth */] = clipWidth;
            values[5 /* clipHeight */] = clipHeight;
            values[6 /* offsetX */] = offsetX;
            values[7 /* offsetY */] = offsetY;
            values[8 /* width */] = width;
            values[9 /* height */] = height;
        };
        Object.defineProperty(__egretProto__, "scale9Grid", {
            /**
             * @language en_US
             * Represent a Rectangle Area that the 9 scale area of Image.
             * Notice: This property is valid only when <code>fillMode</code>
             * is <code>BitmapFillMode.SCALE</code>.
             *
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 矩形区域，它定义素材对象的九个缩放区域。
             * 注意:此属性仅在<code>fillMode</code>为<code>BitmapFillMode.SCALE</code>时有效。
             *
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$scale9Grid;
            },
            set: function (value) {
                this.$scale9Grid = value;
                this.$invalidateContentBounds();
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
             * @version Egret 2.0
             * @version Swan 1.0
             * @platform Web
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
             * @version Egret 2.0
             * @version Swan 1.0
             * @platform Web
             */
            get: function () {
                return this.$fillMode;
            },
            set: function (value) {
                this.$setFillMode(value);
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.$setFillMode = function (value) {
            if (value == this.$fillMode) {
                return;
            }
            this.$fillMode = value;
        };
        Object.defineProperty(__egretProto__, "smoothing", {
            /**
             * @language en_US
             * Whether or not the bitmap is smoothed when scaled.
             * @default true。
             * @version Egret 2.0
             * @platform Web
             */
            /**
             * @language zh_CN
             * 控制在缩放时是否对位图进行平滑处理。
             * @default true。
             * @version Egret 2.0
             * @platform Web
             */
            get: function () {
                return this.$smoothing;
            },
            set: function (value) {
                value = !!value;
                if (value == this.$smoothing) {
                    return;
                }
                this.$smoothing = value;
                this.$invalidate();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setWidth = function (value) {
            //value = +value || 0;
            var values = this.$Bitmap;
            if (value < 0 || value == values[11 /* explicitBitmapWidth */]) {
                return;
            }
            values[11 /* explicitBitmapWidth */] = value;
            this.$invalidateContentBounds();
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__.$setHeight = function (value) {
            //value = +value || 0;
            var values = this.$Bitmap;
            if (value < 0 || value == values[12 /* explicitBitmapHeight */]) {
                return;
            }
            values[12 /* explicitBitmapHeight */] = value;
            this.$invalidateContentBounds();
        };
        /**
         * @private
         * 获取显示宽度
         */
        __egretProto__.$getWidth = function () {
            var values = this.$Bitmap;
            return isNaN(values[11 /* explicitBitmapWidth */]) ? this.$getContentBounds().width : values[11 /* explicitBitmapWidth */];
        };
        /**
         * @private
         * 获取显示宽度
         */
        __egretProto__.$getHeight = function () {
            var values = this.$Bitmap;
            return isNaN(values[12 /* explicitBitmapHeight */]) ? this.$getContentBounds().height : values[12 /* explicitBitmapHeight */];
        };
        /**
         * @private
         */
        __egretProto__.$measureContentBounds = function (bounds) {
            var bitmapData = this.$bitmapData;
            if (bitmapData) {
                var values = this.$Bitmap;
                var w = !isNaN(values[11 /* explicitBitmapWidth */]) ? values[11 /* explicitBitmapWidth */] : values[8 /* width */];
                var h = !isNaN(values[12 /* explicitBitmapHeight */]) ? values[12 /* explicitBitmapHeight */] : values[9 /* height */];
                bounds.setTo(0, 0, w, h);
            }
            else {
                bounds.setEmpty();
            }
        };
        /**
         * @private
         */
        __egretProto__.$render = function (context) {
            var bitmapData = this.$bitmapData;
            if (bitmapData) {
                var values = this.$Bitmap;
                var destW = !isNaN(values[11 /* explicitBitmapWidth */]) ? values[11 /* explicitBitmapWidth */] : values[8 /* width */];
                var destH = !isNaN(values[12 /* explicitBitmapHeight */]) ? values[12 /* explicitBitmapHeight */] : values[9 /* height */];
                Bitmap.$drawImage(context, bitmapData._bitmapData, bitmapData._bitmapX, bitmapData._bitmapY, bitmapData._bitmapWidth, bitmapData._bitmapHeight, bitmapData._offsetX, bitmapData._offsetY, bitmapData.$getTextureWidth(), bitmapData.$getTextureHeight(), destW, destH, this.scale9Grid, this.fillMode, this.$smoothing);
            }
        };
        Object.defineProperty(__egretProto__, "pixelHitTest", {
            /**
             * @language en_US
             * Specifies whether this object use precise hit testing by checking the alpha value of each pixel.If pixelHitTest
             * is set to true,the transparent area of the bitmap will be touched through.<br/>
             * Note:If the image is loaded from cross origin,that we can't access to the pixel data,so it might cause
             * the pixelHitTest property invalid.
             * @default false
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 是否开启精确像素碰撞。设置为true显示对象本身的透明区域将能够被穿透。<br/>
             * 注意：若图片资源是以跨域方式从外部服务器加载的，将无法访问图片的像素数据，而导致此属性失效。
             * @default false
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this._pixelHitTest;
            },
            set: function (value) {
                this._pixelHitTest = !!value;
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.$hitTest = function (stageX, stageY) {
            var target = _super.prototype.$hitTest.call(this, stageX, stageY);
            if (target && this._pixelHitTest) {
                target = this.hitTestPixel(stageX, stageY);
            }
            return target;
        };
        /**
         * @private
         */
        __egretProto__.hitTestPixel = function (stageX, stageY) {
            var m = this.$getInvertedConcatenatedMatrix();
            var localX = m.a * stageX + m.c * stageY + m.tx;
            var localY = m.b * stageX + m.d * stageY + m.ty;
            var context;
            var data;
            var displayList = this.$displayList;
            if (displayList) {
                context = displayList.renderContext;
                data = context.getImageData(localX - displayList.offsetX, localY - displayList.offsetY, 1, 1).data;
            }
            else {
                context = egret.sys.sharedRenderContext;
                context.surface.width = context.surface.height = 3;
                context.translate(1 - localX, 1 - localY);
                this.$render(context);
                data = context.getImageData(1, 1, 1, 1).data;
            }
            if (data[3] === 0) {
                return null;
            }
            return this;
        };
        /**
         * @private
         *
         * @param context
         * @param texture
         * @param destW
         * @param destH
         * @param scale9Grid
         * @param fillMode
         * @param smoothing
         */
        Bitmap.$drawImage = function (context, image, clipX, clipY, clipWidth, clipHeight, offsetX, offsetY, textureWidth, textureHeight, destW, destH, scale9Grid, fillMode, smoothing) {
            if (!image) {
                return;
            }
            context.imageSmoothingEnabled = smoothing;
            if (scale9Grid) {
                Bitmap.$drawScale9GridImage(context, image, scale9Grid, clipX, clipY, clipWidth, clipHeight, offsetX, offsetY, textureWidth, textureHeight, destW, destH);
            }
            else if (fillMode == egret.BitmapFillMode.SCALE) {
                context.drawImage(image, clipX, clipY, clipWidth, clipHeight, offsetX, offsetY, clipWidth / textureWidth * destW, clipHeight / textureHeight * destH);
            }
            else {
                var tempImage = image;
                var tempCanvas;
                if (tempImage.width != clipWidth || tempImage.height != clipHeight || egret.$TextureScaleFactor != 1) {
                    tempCanvas = egret.sys.surfaceFactory.create(true);
                    tempCanvas.width = textureWidth;
                    tempCanvas.height = textureHeight;
                    tempCanvas.renderContext.drawImage(tempImage, clipX, clipY, clipWidth, clipHeight, offsetX, offsetY, textureWidth, textureHeight);
                    tempImage = tempCanvas;
                }
                var pattern = context.createPattern(tempImage, "repeat");
                context.beginPath();
                context.rect(0, 0, destW, destH);
                context.fillStyle = pattern;
                context.fill();
                if (tempCanvas) {
                    egret.sys.surfaceFactory.release(tempCanvas);
                }
            }
        };
        /**
         * @private
         * 绘制九宫格位图
         */
        Bitmap.$drawScale9GridImage = function (context, image, scale9Grid, clipX, clipY, clipWidth, clipHeight, offsetX, offsetY, textureWidth, textureHeight, surfaceWidth, surfaceHeight) {
            var imageWidth = clipWidth;
            var imageHeight = clipHeight;
            surfaceWidth = surfaceWidth - (textureWidth - clipWidth * egret.$TextureScaleFactor);
            surfaceHeight = surfaceHeight - (textureHeight - clipHeight * egret.$TextureScaleFactor);
            var targetW0 = scale9Grid.x - offsetX;
            var targetH0 = scale9Grid.y - offsetY;
            var sourceW0 = targetW0 / egret.$TextureScaleFactor;
            var sourceH0 = targetH0 / egret.$TextureScaleFactor;
            var sourceW1 = scale9Grid.width / egret.$TextureScaleFactor;
            var sourceH1 = scale9Grid.height / egret.$TextureScaleFactor;
            //防止空心的情况出现。
            if (sourceH1 == 0) {
                sourceH1 = 1;
                if (sourceH0 >= imageHeight) {
                    sourceH0--;
                }
            }
            if (sourceW1 == 0) {
                sourceW1 = 1;
                if (sourceW0 >= imageWidth) {
                    sourceW0--;
                }
            }
            var sourceX0 = clipX;
            var sourceX1 = sourceX0 + sourceW0;
            var sourceX2 = sourceX1 + sourceW1;
            var sourceW2 = imageWidth - sourceW0 - sourceW1;
            var sourceY0 = clipY;
            var sourceY1 = sourceY0 + sourceH0;
            var sourceY2 = sourceY1 + sourceH1;
            var sourceH2 = imageHeight - sourceH0 - sourceH1;
            var targetW2 = sourceW2 * egret.$TextureScaleFactor;
            var targetH2 = sourceH2 * egret.$TextureScaleFactor;
            if ((sourceW0 + sourceW2) * egret.$TextureScaleFactor > surfaceWidth || (sourceH0 + sourceH2) * egret.$TextureScaleFactor > surfaceHeight) {
                context.drawImage(image, 0, 0, surfaceWidth, surfaceHeight);
                return;
            }
            var targetX0 = offsetX;
            var targetX1 = targetX0 + targetW0;
            var targetX2 = targetX0 + (surfaceWidth - targetW2);
            var targetW1 = surfaceWidth - targetW0 - targetW2;
            var targetY0 = offsetY;
            var targetY1 = targetY0 + targetH0;
            var targetY2 = targetY0 + surfaceHeight - targetH2;
            var targetH1 = surfaceHeight - targetH0 - targetH2;
            //
            //             x0     x1     x2
            //          y0 +------+------+------+
            //             |      |      |      | h0
            //             |      |      |      |
            //          y1 +------+------+------+
            //             |      |      |      | h1
            //             |      |      |      |
            //          y2 +------+------+------+
            //             |      |      |      | h2
            //             |      |      |      |
            //             +------+------+------+
            //                w0     w1     w2
            //
            context.drawImage(image, sourceX0, sourceY0, sourceW0, sourceH0, targetX0, targetY0, targetW0, targetH0);
            context.drawImage(image, sourceX1, sourceY0, sourceW1, sourceH0, targetX1, targetY0, targetW1, targetH0);
            context.drawImage(image, sourceX2, sourceY0, sourceW2, sourceH0, targetX2, targetY0, targetW2, targetH0);
            context.drawImage(image, sourceX0, sourceY1, sourceW0, sourceH1, targetX0, targetY1, targetW0, targetH1);
            context.drawImage(image, sourceX1, sourceY1, sourceW1, sourceH1, targetX1, targetY1, targetW1, targetH1);
            context.drawImage(image, sourceX2, sourceY1, sourceW2, sourceH1, targetX2, targetY1, targetW2, targetH1);
            context.drawImage(image, sourceX0, sourceY2, sourceW0, sourceH2, targetX0, targetY2, targetW0, targetH2);
            context.drawImage(image, sourceX1, sourceY2, sourceW1, sourceH2, targetX1, targetY2, targetW1, targetH2);
            context.drawImage(image, sourceX2, sourceY2, sourceW2, sourceH2, targetX2, targetY2, targetW2, targetH2);
        };
        return Bitmap;
    })(egret.DisplayObject);
    egret.Bitmap = Bitmap;
    Bitmap.prototype.__class__ = "egret.Bitmap";
    egret.registerClass(Bitmap,"egret.Bitmap");
})(egret || (egret = {}));
