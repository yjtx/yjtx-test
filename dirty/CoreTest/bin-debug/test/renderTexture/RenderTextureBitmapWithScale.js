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
var RenderTextureBitmapWithScale = (function (_super) {
    __extends(RenderTextureBitmapWithScale, _super);
    function RenderTextureBitmapWithScale() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=RenderTextureBitmapWithScale,p=c.prototype;
    p.initRoot = function () {
        var tx = RES.getRes("egret_icon_png");
        var bmp = new egret.Bitmap(tx);
        this.addChild(bmp);
        bmp.width = bmp.height = 200;
        bmp.x = 10;
        bmp.y = 10;
        var tx2 = new egret.RenderTexture();
        tx2.drawToTexture(bmp, new egret.Rectangle(0, 0, bmp.width, bmp.height), 0.42);
        tx2.textureWidth = 300;
        tx2.textureHeight = 300;
        var bmp2 = new egret.Bitmap(tx2);
        this.addChild(bmp2);
        bmp2.x = 10;
        bmp2.y = 310;
    };
    return RenderTextureBitmapWithScale;
})(EntryDisplayObjectContainer);
egret.registerClass(RenderTextureBitmapWithScale,'RenderTextureBitmapWithScale');
