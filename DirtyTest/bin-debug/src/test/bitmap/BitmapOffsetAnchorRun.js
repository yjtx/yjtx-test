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
var BitmapOffsetAnchorRun = (function (_super) {
    __extends(BitmapOffsetAnchorRun, _super);
    function BitmapOffsetAnchorRun() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = BitmapOffsetAnchorRun.prototype;
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
        //0.5 0.5
        bmp = this.createBitmapByName("img_scale9_png");
        this.addChildAt(bmp, 0);
        bmp.width = w;
        bmp.height = h;
        bmp.anchorOffsetX = w / 2;
        bmp.anchorOffsetY = h / 2;
        bmp.x = x;
        bmp.y = y;
        console.log(bmp.width);
        egret.Tween.get(bmp, { loop: true }).to({ rotation: 360 }, 3600);
        this.scaleX = this.scaleY = 1.5;
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
    return BitmapOffsetAnchorRun;
})(egret.DisplayObjectContainer);
BitmapOffsetAnchorRun.prototype.__class__ = "BitmapOffsetAnchorRun";
egret.registerClass(BitmapOffsetAnchorRun,"BitmapOffsetAnchorRun");
