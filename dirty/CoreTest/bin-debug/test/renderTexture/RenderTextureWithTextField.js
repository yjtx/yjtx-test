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
var RenderTextureWithTextField = (function (_super) {
    __extends(RenderTextureWithTextField, _super);
    function RenderTextureWithTextField() {
        _super.call(this);
    }
    var d = __define,c=RenderTextureWithTextField,p=c.prototype;
    p.initRoot = function () {
        var bg = new egret.Sprite();
        var txt = new egret.TextField();
        txt.width = 200;
        bg.addChild(txt);
        bg.x = bg.y = 300;
        this.addChild(bg);
        txt.text = "西门大官人";
        txt.textColor = 0xFF0000;
        var t1 = new egret.RenderTexture();
        t1.drawToTexture(bg, new egret.Rectangle(0, 0, 200, 30));
        var b1 = new egret.Bitmap(t1);
        b1.x = 10;
        b1.y = 210;
        this.addChild(b1);
        txt.text = "西门吹雪";
        txt.textColor = 0x00FF00;
        //         var t2:egret.RenderTexture = new egret.RenderTexture();
        //         t2.drawToTexture(bg, new egret.Rectangle(0, 0, 200, 30));
        //         var b2:egret.Bitmap = new egret.Bitmap(t2);
        //         b2.x = 250;
        //         this.addChild(b2);
    };
    return RenderTextureWithTextField;
}(EntryDisplayObjectContainer));
egret.registerClass(RenderTextureWithTextField,'RenderTextureWithTextField');