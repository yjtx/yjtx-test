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

class TweenTwoTween extends EntryDisplayObjectContainer {

    public constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        this.init1();
        this.init2();
    }

    protected init1():void {
        var btn = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChildAt(btn, 0);
        btn.x = 100;
        btn.y = 200;
        btn.scaleX = btn.scaleY = 0.5;
        btn.anchorOffsetX = btn.width / 2;
        btn.anchorOffsetY = btn.height / 2;

        var tween2 = egret.Tween.get(btn);

        var tween3 = egret.Tween.get(btn);

        tween3.to({"rotation": 1000}, 4000);
        tween2.call(function () {
            egret.log("tween1 time start: " + egret.getTimer());
        }, this);
    }

    protected init2():void {
        var btn = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChildAt(btn, 0);
        btn.x = 100;
        btn.y = 400;
        btn.scaleX = btn.scaleY = 0.5;
        btn.anchorOffsetX = btn.width / 2;
        btn.anchorOffsetY = btn.height / 2;

        var tween2 = egret.Tween.get(btn);

        var tween3 = egret.Tween.get(btn);

        tween2.call(function () {
            egret.log("tween2 time start: " + egret.getTimer());

            tween3.to({"rotation": 1000}, 4000);
        }, this);
    }
}


