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
var RenderTextureDrawTwo = (function (_super) {
    __extends(RenderTextureDrawTwo, _super);
    function RenderTextureDrawTwo() {
        _super.call(this);
    }
    var __egretProto__ = RenderTextureDrawTwo.prototype;
    __egretProto__.initRoot = function () {
        var s = new egret.Sprite();
        var sp = new egret.Sprite();
        sp.graphics.beginFill(0xFF0000);
        sp.graphics.drawRect(0, 0, 200, 4);
        sp.graphics.endFill();
        sp.y = 4;
        s.addChild(sp);
        sp = new egret.Sprite();
        sp.graphics.beginFill(0x00FF00);
        sp.graphics.drawRect(0, 0, 100, 4);
        sp.graphics.endFill();
        sp.y = 16;
        s.addChild(sp);
        this.addChild(s);
        var t = new egret.RenderTexture();
        t.drawToTexture(s);
        var b = new egret.Bitmap(t);
        b.y = 100;
        this.addChild(b);
        console.log(b.width + "-" + b.height);
    };
    return RenderTextureDrawTwo;
})(EntryDisplayObjectContainer);
RenderTextureDrawTwo.prototype.__class__ = "RenderTextureDrawTwo";
