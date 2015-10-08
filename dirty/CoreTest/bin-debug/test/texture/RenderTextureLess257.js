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
var RenderTextureLess257 = (function (_super) {
    __extends(RenderTextureLess257, _super);
    function RenderTextureLess257() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=RenderTextureLess257;p=c.prototype;
    p.init = function () {
        this.testBitmap();
    };
    p.testBitmap = function () {
        var c1 = new egret.DisplayObjectContainer();
        var shape1 = new egret.Shape();
        shape1.graphics.beginFill(0xff0000, 1);
        shape1.graphics.drawRect(0, 0, 100, 100);
        shape1.graphics.endFill();
        c1.addChild(shape1);
        shape1.x = 149;
        shape1.y = 10;
        var texture1 = new egret.RenderTexture();
        texture1.drawToTexture(c1);
        var bitmap1 = new egret.Bitmap(texture1);
        this.addChild(bitmap1);
        console.log("right width: 100  height: 100");
        console.log("show width: " + bitmap1.width + "  height: " + bitmap1.height);
        var c2 = new egret.DisplayObjectContainer();
        var shape2 = new egret.Shape();
        shape2.graphics.beginFill(0xff0000, 1);
        shape2.graphics.drawRect(0, 0, 300, 300);
        shape2.graphics.endFill();
        c2.addChild(shape2);
        shape2.x = 149;
        shape2.y = 160;
        shape2.x = 199;
        shape2.y = 199;
        var texture2 = new egret.RenderTexture();
        texture2.drawToTexture(c2);
        var bitmap2 = new egret.Bitmap(texture2);
        this.addChild(bitmap2);
        console.log("right width: 300  height: 300");
        console.log("show width: " + bitmap2.width + "  height: " + bitmap2.height);
    };
    return RenderTextureLess257;
})(egret.DisplayObjectContainer);
egret.registerClass(RenderTextureLess257,"RenderTextureLess257");
