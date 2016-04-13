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
var TweenTweensOp = (function (_super) {
    __extends(TweenTweensOp, _super);
    function TweenTweensOp() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=TweenTweensOp,p=c.prototype;
    p.initRoot = function () {
        this.btp1 = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChildAt(this.btp1, 0);
        this.btp1.x = 0;
        this.btp1.y = 200;
        this.btp1.scaleX = this.btp1.scaleY = 0.5;
        this.btp1.anchorOffsetX = this.btp1.width / 2;
        this.btp1.anchorOffsetY = this.btp1.height / 2;
        var tween1 = egret.Tween.get(this.btp1).call(function () {
            egret.log("tween1 time start: " + egret.getTimer());
        }, this).to({ x: 400 }, 8000).call(function () {
            egret.log("tween1 time end: " + egret.getTimer());
        }, this);
        var tween2 = egret.Tween.get(this.btp1).call(function () {
            egret.log("tween2 time start: " + egret.getTimer());
        }, this).to({ rotation: 400 }, 8000).call(function () {
            egret.log("tween2 time end: " + egret.getTimer());
        }, this);
        egret.setTimeout(function () {
            egret.log("pause");
            egret.Tween.pauseTweens(this.btp1);
        }, this, 4000);
        egret.setTimeout(function () {
            egret.log("resume");
            egret.Tween.resumeTweens(this.btp1);
        }, this, 6000);
        egret.setTimeout(function () {
            egret.log("remove");
            egret.Tween.removeTweens(this.btp1);
        }, this, 8000);
        egret.setTimeout(function () {
            egret.log("resume 2");
            egret.Tween.resumeTweens(this.btp1);
        }, this, 10000);
    };
    return TweenTweensOp;
}(EntryDisplayObjectContainer));
egret.registerClass(TweenTweensOp,'TweenTweensOp');
