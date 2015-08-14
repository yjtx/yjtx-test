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
var BitmapScale9Size = (function (_super) {
    __extends(BitmapScale9Size, _super);
    function BitmapScale9Size() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = BitmapScale9Size.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testBitmapScale9, this, "bitmap", this.stage.textureScaleFactor);
    };
    __egretProto__.testBitmapScale9 = function () {
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        icon.width = 200;
        icon.height = 180;
        this.addChild(icon);
        icon.y = 0;
        icon.scale9Grid = new egret.Rectangle(45, 44, 8, 14);
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        icon.width = 200;
        icon.height = 180;
        this.addChild(icon);
        icon.y = 200;
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        icon.width = 200;
        icon.height = 180;
        this.addChild(icon);
        icon.x = 220;
    };
    return BitmapScale9Size;
})(egret.DisplayObjectContainer);
BitmapScale9Size.prototype.__class__ = "BitmapScale9Size";
egret.registerClass(BitmapScale9Size,"BitmapScale9Size");
