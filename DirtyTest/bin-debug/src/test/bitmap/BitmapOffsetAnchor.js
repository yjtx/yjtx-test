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
var BitmapOffsetAnchor = (function (_super) {
    __extends(BitmapOffsetAnchor, _super);
    function BitmapOffsetAnchor() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = BitmapOffsetAnchor.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testAnchor, this, "bitmap", this.stage.textureScaleFactor);
    };
    __egretProto__.testAnchor = function () {
        var bmp;
        //0 0
        bmp = this.createBitmapByName("img_scale9_png");
        var w = bmp.width; // * 0.5;
        var h = bmp.height; // * 0.5;
        var x = this.stage.stageWidth / 2;
        var y = this.stage.stageHeight / 2;
        //0 0
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = bmp.anchorOffsetY = 0;
        bmp.x = x - w / 2;
        bmp.y = y - h / 2;
        //0 0.5
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = 0;
        bmp.anchorOffsetY = h / 2;
        bmp.x = x - w / 2;
        bmp.y = y;
        //0.5 0
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = w / 2;
        bmp.anchorOffsetY = 0;
        bmp.x = x;
        bmp.y = y - h / 2;
        //0.5 0.5
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = w / 2;
        bmp.anchorOffsetY = h / 2;
        bmp.x = x;
        bmp.y = y;
        //1 0.5
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = w;
        bmp.anchorOffsetY = h / 2;
        bmp.x = x + w / 2;
        bmp.y = y;
        //0.5 1
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = w / 2;
        bmp.anchorOffsetY = h;
        bmp.x = x;
        bmp.y = y + h / 2;
        //1 1
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = w;
        bmp.anchorOffsetY = h;
        bmp.x = x + w / 2;
        bmp.y = y + h / 2;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    __egretProto__.createBitmapByName = function (name) {
        var texture = RES.getRes(name);
        var result = new egret.Bitmap(texture);
        return result;
    };
    return BitmapOffsetAnchor;
})(egret.DisplayObjectContainer);
BitmapOffsetAnchor.prototype.__class__ = "BitmapOffsetAnchor";
egret.registerClass(BitmapOffsetAnchor,"BitmapOffsetAnchor");
