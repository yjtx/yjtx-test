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

class BitmapFillMode extends EntryDisplayObjectContainer {

    public constructor() {
        super(["bitmap"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("img_scale9_png");

        var image_repeat = new egret.Bitmap();
        image_repeat.width = 400;
        //image_repeat.height = 400;
        image_repeat.texture = texture;
        image_repeat.fillMode = egret.BitmapFillMode.REPEAT;
        var txt = this.getTxt("repeat");
        txt.x = 402;
        this.addChild(txt);
        this.addChild(image_repeat);

        var image_clip = new egret.Bitmap();
        image_clip.y = 150;
        image_clip.width = 50;
        image_clip.height = 80;
        image_clip.texture = texture;
        image_clip.fillMode = egret.BitmapFillMode.CLIP;
        var txt = this.getTxt("clip");
        txt.x = 402;
        txt.y = 150;
        this.addChild(txt);
        this.addChild(image_clip);

        var image_clip = new egret.Bitmap();
        image_clip.x = 150;
        image_clip.y = 150;
        image_clip.width = 150;
        image_clip.height = 120;
        image_clip.texture = texture;
        image_clip.fillMode = egret.BitmapFillMode.CLIP;
        this.addChild(image_clip);

        var image_scale = new egret.Bitmap();
        image_scale.y = 300;
        image_scale.width = 400;
        //image_scale.height = 400;
        image_scale.texture = texture;
        image_scale.fillMode = egret.BitmapFillMode.SCALE;
        var txt = this.getTxt("scale");
        txt.x = 402;
        txt.y = 300;
        this.addChild(txt);
        this.addChild(image_scale);
    }
    private getTxt(value: string): egret.TextField {
        var txt = new egret.TextField;
        txt.text = value;
        txt.textColor = 0xffffff;
        return txt;
    }
}


