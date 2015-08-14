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
var BitmapScale9ZoomSize = (function (_super) {
    __extends(BitmapScale9ZoomSize, _super);
    function BitmapScale9ZoomSize() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = BitmapScale9ZoomSize.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testBitmapScale9, this, "bitmap", this.stage.textureScaleFactor);
    };
    __egretProto__.testBitmapScale9 = function () {
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        icon.y = 0;
        this.addChild(icon);
        icon.scale9Grid = new egret.Rectangle(45, 44, 8, 14);
        icon.scaleX = icon.scaleY = 1.5;
        icon.width = 200;
        icon.height = 180;
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(icon);
        icon.y = 290;
        icon.scaleX = icon.scaleY = 1.5;
        icon.width = 200;
        icon.height = 180;
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(icon);
        icon.x = 320;
        icon.scaleX = icon.scaleY = 1.5;
        icon.width = 200;
        icon.height = 180;
    };
    return BitmapScale9ZoomSize;
})(egret.DisplayObjectContainer);
BitmapScale9ZoomSize.prototype.__class__ = "BitmapScale9ZoomSize";
egret.registerClass(BitmapScale9ZoomSize,"BitmapScale9ZoomSize");
