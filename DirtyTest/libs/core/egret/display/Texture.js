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
    egret.$TextureScaleFactor = 1;
    /**
     * @language en_US
     * The Texture class encapsulates different image resources on different platforms.
     * In HTML5, resource is an HTMLElement object
     * In OpenGL / WebGL, resource is a texture ID obtained after the GPU is submitted
     * The Texture class encapsulates the details implemented on the underlayer. Developers just need to focus on interfaces
     * @see http://docs.egret-labs.org/post/manual/bitmap/textures.html The use of texture packs
     * @see http://docs.egret-labs.org/post/manual/loader/getres.html Several ways of access to resources
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/display/Texture.ts
     */
    /**
     * @language zh_CN
     * 纹理类是对不同平台不同的图片资源的封装
     * 在HTML5中，资源是一个HTMLElement对象
     * 在OpenGL / WebGL中，资源是一个提交GPU后获取的纹理id
     * Texture类封装了这些底层实现的细节，开发者只需要关心接口即可
     * @see http://docs.egret-labs.org/post/manual/bitmap/textures.html 纹理集的使用
     * @see http://docs.egret-labs.org/post/manual/loader/getres.html 获取资源的几种方式
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/display/Texture.ts
     */
    var Texture = (function (_super) {
        __extends(Texture, _super);
        /**
         * @language en_US
         * Create an egret.Texture object
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个 egret.Texture 对象
         * @version Egret 2.0
         * @platform Web,Native
         */
        function Texture() {
            _super.call(this);
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的 x 起始位置
             */
            this._bitmapX = 0;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的 y 起始位置
             */
            this._bitmapY = 0;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的宽度
             */
            this._bitmapWidth = 0;
            /**
             * @private
             * 表示这个纹理在 bitmapData 上的高度
             */
            this._bitmapHeight = 0;
            /**
             * @private
             * 表示这个纹理显示了之后在 x 方向的渲染偏移量
             */
            this._offsetX = 0;
            /**
             * @private
             * 表示这个纹理显示了之后在 y 方向的渲染偏移量
             */
            this._offsetY = 0;
            /**
             * @private
             * 纹理宽度
             */
            this._textureWidth = 0;
            /**
             * @private
             * 纹理高度
             */
            this._textureHeight = 0;
            /**
             * @private
             * 表示bitmapData.width
             */
            this._sourceWidth = 0;
            /**
             * @private
             * 表示bitmapData.height
             */
            this._sourceHeight = 0;
            /**
             * @private
             */
            this._bitmapData = null;
        }
        var __egretProto__ = Texture.prototype;
        Object.defineProperty(__egretProto__, "textureWidth", {
            /**
             * @language en_US
             * Texture width
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 纹理宽度
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$getTextureWidth();
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.$getTextureWidth = function () {
            return this._textureWidth;
        };
        Object.defineProperty(__egretProto__, "textureHeight", {
            /**
             * @language en_US
             * Texture height
             * @version Egret 2.0
             * @platform Web,Native
             */
            /**
             * @language zh_CN
             * 纹理高度
             * @version Egret 2.0
             * @platform Web,Native
             */
            get: function () {
                return this.$getTextureHeight();
            },
            enumerable: true,
            configurable: true
        });
        __egretProto__.$getTextureHeight = function () {
            return this._textureHeight;
        };
        __egretProto__.$getScaleBitmapWidth = function () {
            return this._bitmapWidth * egret.$TextureScaleFactor;
        };
        __egretProto__.$getScaleBitmapHeight = function () {
            return this._bitmapHeight * egret.$TextureScaleFactor;
        };
        /**
         * @private
         *
         * @param value
         */
        __egretProto__._setBitmapData = function (value) {
            this._bitmapData = value;
            var w = value.width * egret.$TextureScaleFactor;
            var h = value.height * egret.$TextureScaleFactor;
            this.$setData(0, 0, w, h, 0, 0, w, h, w, h);
        };
        /**
         * @private
         * 设置Texture数据
         * @param bitmapX
         * @param bitmapY
         * @param bitmapWidth
         * @param bitmapHeight
         * @param offsetX
         * @param offsetY
         * @param textureWidth
         * @param textureHeight
         * @param sourceWidth
         * @param sourceHeight
         */
        __egretProto__.$setData = function (bitmapX, bitmapY, bitmapWidth, bitmapHeight, offsetX, offsetY, textureWidth, textureHeight, sourceWidth, sourceHeight) {
            var scale = egret.$TextureScaleFactor;
            this._bitmapX = bitmapX / scale;
            this._bitmapY = bitmapY / scale;
            this._bitmapWidth = bitmapWidth / scale;
            this._bitmapHeight = bitmapHeight / scale;
            this._offsetX = offsetX;
            this._offsetY = offsetY;
            this._textureWidth = textureWidth;
            this._textureHeight = textureHeight;
            this._sourceWidth = sourceWidth;
            this._sourceHeight = sourceHeight;
        };
        /**
         * @language en_US
         * Obtain the color value of a pixel point
         * @param x {number} The x coordinate of a pixel point
         * @param y {number} The y coordinate of a pixel point
         * @returns {number} Color value of a specified pixel point
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 获取某一点像素的颜色值
         * @param x {number} 像素点的X轴坐标
         * @param y {number} 像素点的Y轴坐标
         * @returns {number} 指定像素点的颜色值
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.getPixel32 = function (x, y) {
            var result = this._bitmapData.getContext("2d").getImageData(x, y, 1, 1);
            return result.data;
        };
        /**
         * @language en_US
         * Convert base64 string, if the picture (or pictures included) cross-border or null
         * @param type Type conversions, such as "image / png"
         * @param rect The need to convert the area
         * @param smoothing Whether to convert data to the smoothing process
         * @returns {any} base64 string
         * @version Egret 2.4
         */
        /**
         * @language zh_CN
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
         * @param type 转换的类型，如  "image/png"
         * @param rect 需要转换的区域
         * @returns {any} base64字符串
         * @version Egret 2.4
         */
        __egretProto__.toDataURL = function (type, rect) {
            throw new Error();
        };
        /**
         * @language en_US
         * 裁剪指定区域并保存成图片。
         * native只支持 "image/png" 和 "image/jpeg"；Web中由于各个浏览器的实现不一样，因此建议也只用这2种。
         * @param type 转换的类型，如  "image/png"
         * @param filePath 图片的名称的路径（主目录为游戏的私有空间，路径中不能有 "../"，Web只支持传名称。）
         * @param rect 需要转换的区域
         * @version Egret 2.4
         * @platform Native
         */
        /**
         * @language zh_CN
         * Crop designated area and save it as image.
         * native support only "image / png" and "image / jpeg"; Web browser because of the various implementations are not the same, it is recommended to use only these two kinds.
         * @param type Type conversions, such as "image / png"
         * @param filePath The path name of the image (the home directory for the game's private space, the path can not have "../",Web supports only pass names.)
         * @param rect The need to convert the area
         * @version Egret 2.4
         * @platform Native
         */
        __egretProto__.saveToFile = function (type, filePath, rect) {
            throw new Error();
        };
        /**
         * @language en_US
         * dispose texture
         * @version Egret 2.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 释放纹理
         * @version Egret 2.0
         * @platform Web,Native
         */
        __egretProto__.dispose = function () {
            if (this._bitmapData) {
                Texture.$dispose(this);
                egret.ImageLoader.disposeBitmapData(this._bitmapData);
            }
        };
        Texture.$addDisplayObject = function (displayObject, texture) {
            var hashCode = texture._bitmapData.$hashCode;
            if (!Texture._displayList[hashCode]) {
                Texture._displayList[hashCode] = [displayObject];
                return;
            }
            var tempList = Texture._displayList[hashCode];
            if (tempList.indexOf(displayObject) < 0) {
                tempList.push(displayObject);
            }
        };
        Texture.$removeDisplayObject = function (displayObject, texture) {
            var hashCode = texture._bitmapData.$hashCode;
            if (!Texture._displayList[hashCode]) {
                return;
            }
            var tempList = Texture._displayList[hashCode];
            var index = tempList.indexOf(displayObject);
            if (index >= 0) {
                tempList.splice(index);
            }
        };
        Texture.$dispose = function (texture) {
            var hashCode = texture._bitmapData.$hashCode;
            if (!Texture._displayList[hashCode]) {
                return;
            }
            var tempList = Texture._displayList[hashCode];
            for (var i = 0; i < tempList.length; i++) {
                tempList[i].$invalidateContentBounds();
            }
        };
        Texture.$loaded = function (texture) {
            var hashCode = texture._bitmapData.$hashCode;
            if (!Texture._displayList[hashCode]) {
                return;
            }
            var tempList = Texture._displayList[hashCode];
            for (var i = 0; i < tempList.length; i++) {
                tempList[i].$invalidateContentBounds();
            }
        };
        Texture._displayList = {};
        return Texture;
    })(egret.HashObject);
    egret.Texture = Texture;
    Texture.prototype.__class__ = "egret.Texture";
    egret.registerClass(Texture,"egret.Texture");
})(egret || (egret = {}));
