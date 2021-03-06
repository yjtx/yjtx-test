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
     * @class dragonBones.EgretTextureAtlas
     * @implements dragonBones.ITextureAtlas
     * @classdesc
     * egret引擎使用的纹理集
     */
    var EgretTextureAtlas = (function () {
        /**
         * 创建一个新的EgretTextureAtlas实例
         * @param texture 纹理集
         * @param textureAtlasRawData 纹理集数据
         * @param scale 缩放
         */
        function EgretTextureAtlas(texture, textureAtlasRawData, scale) {
            if (scale === void 0) { scale = 1; }
            this.texture = texture;
            this.textureAtlasRawData = textureAtlasRawData;
            this._textureDatas = {};
            this.scale = scale;
            this.name = textureAtlasRawData[dragonBones.ConstValues.A_NAME];
            this.parseData(textureAtlasRawData);
            this.spriteSheet = new egret.SpriteSheet(texture);
        }
        var __egretProto__ = EgretTextureAtlas.prototype;
        /**
         * 根据名字获取纹理
         * @param fullName 纹理的名字
         * @returns {egret.Texture} 获取到的纹理
         */
        __egretProto__.getTexture = function (fullName) {
            var result = this.spriteSheet.getTexture(fullName);
            if (!result) {
                var data = this._textureDatas[fullName];
                if (data) {
                    result = this.spriteSheet.createTexture(fullName, data.region.x, data.region.y, data.region.width, data.region.height);
                    if (data.rotated) {
                        EgretTextureAtlas.rotatedDic[fullName] = 1;
                    }
                }
            }
            return result;
        };
        /**
         * 释放资源
         */
        __egretProto__.dispose = function () {
            this.texture = null;
        };
        /**
         * 根据子纹理的名字获取子纹理所在的实际矩形区域
         * @param subTextureName 子纹理的名字
         * @returns {*} 子纹理所在的矩形区域
         */
        __egretProto__.getRegion = function (subTextureName) {
            var textureData = this._textureDatas[subTextureName];
            if (textureData && textureData instanceof dragonBones.TextureData) {
                return textureData.region;
            }
            return null;
        };
        /**
         * 根据子纹理的名字获取子纹理所在的真实矩形区域
         * @param subTextureName 子纹理的名字
         * @returns {*} 子纹理所在的矩形区域
         */
        __egretProto__.getFrame = function (subTextureName) {
            var textureData = this._textureDatas[subTextureName];
            if (textureData && textureData instanceof dragonBones.TextureData) {
                return textureData.frame;
            }
            return null;
        };
        __egretProto__.parseData = function (textureAtlasRawData) {
            this._textureDatas = dragonBones.DataParser.parseTextureAtlasData(textureAtlasRawData, this.scale);
        };
        EgretTextureAtlas.rotatedDic = {};
        return EgretTextureAtlas;
    })();
    dragonBones.EgretTextureAtlas = EgretTextureAtlas;
    EgretTextureAtlas.prototype.__class__ = "dragonBones.EgretTextureAtlas";
})(dragonBones || (dragonBones = {}));
