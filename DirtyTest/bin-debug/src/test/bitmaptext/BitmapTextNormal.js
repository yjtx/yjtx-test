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
var BitmapTextNormal = (function (_super) {
    __extends(BitmapTextNormal, _super);
    function BitmapTextNormal() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = BitmapTextNormal.prototype;
    __egretProto__.init = function () {
        this.testBitmapText();
    };
    __egretProto__.testBitmapText = function () {
        var count = 0;
        var movieclipData;
        var texture;
        var self = this;
        function addMCs() {
            var font = new egret.BitmapFont(texture, movieclipData);
            var bitmapFont = font;
            var bitmap1 = new egret.BitmapText();
            bitmap1.font = bitmapFont;
            bitmap1.text = "Hello Egret";
            self.addChild(bitmap1);
            egret.setTimeout(function () {
                bitmap1.text = "Egret Hello";
            }, self, 5000);
        }
        var f = function (url, data) {
            if (url.indexOf(".fnt") >= 0) {
                movieclipData = JSON.parse(data);
            }
            else {
                texture = data;
            }
            count++;
            if (count == 2) {
                addMCs();
            }
        };
        this.load(ResourceUtils.getRoot(this.stage.textureScaleFactor) + "font/font.fnt", egret.URLLoaderDataFormat.TEXT, f);
        this.load(ResourceUtils.getRoot(this.stage.textureScaleFactor) + "font/font.png", egret.URLLoaderDataFormat.TEXTURE, f);
    };
    __egretProto__.load = function (url, dataFormat, call) {
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            call(url, loader.data);
        }, this);
        loader.dataFormat = dataFormat;
        var request = new egret.URLRequest(url);
        loader.load(request);
    };
    return BitmapTextNormal;
})(egret.DisplayObjectContainer);
BitmapTextNormal.prototype.__class__ = "BitmapTextNormal";
egret.registerClass(BitmapTextNormal,"BitmapTextNormal");
