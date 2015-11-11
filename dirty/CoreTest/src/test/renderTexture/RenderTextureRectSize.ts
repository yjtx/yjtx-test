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

class RenderTextureRectSize extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var s: egret.Sprite = new egret.Sprite();
        var sp: egret.Sprite = new egret.Sprite();

        sp.graphics.beginFill(0xFF0000);
        sp.graphics.drawRect(0,0,258,4);
        sp.graphics.endFill();
        s.addChild(sp);

        var sp2: egret.Sprite = new egret.Sprite();
        sp2.graphics.beginFill(0x00FF00);
        sp2.graphics.drawRect(0,0,258,4);
        sp2.graphics.endFill();
        sp2.y = 6;
        s.addChild(sp2);

        this.addChild(s);

        var t: egret.RenderTexture = new egret.RenderTexture();
        t.drawToTexture(s,new egret.Rectangle(0,0,20,20));
        var b: egret.Bitmap = new egret.Bitmap(t);
        b.y = 100;
        this.addChild(b);
        console.log(b.width + "-" + b.height);

        s.mask = new egret.Rectangle(0, 0, 20, 20);
    }
}


