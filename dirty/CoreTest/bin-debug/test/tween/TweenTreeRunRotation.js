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
var TweenTreeRunRotation = (function (_super) {
    __extends(TweenTreeRunRotation, _super);
    function TweenTreeRunRotation() {
        _super.call(this, ["images"]);
    }
    var d = __define,c=TweenTreeRunRotation,p=c.prototype;
    p.initRoot = function () {
        for (var i = 0; i < 5; i++) {
            this.btp1 = new egret.Bitmap(RES.getRes("home-zw-blueRing" + (i + 1) + "_png"));
            this.addChild(this.btp1);
            this.btp1.x = 200;
            this.btp1.y = 200;
            this.btp1.anchorOffsetX = this.btp1.width / 2;
            this.btp1.anchorOffsetY = this.btp1.height / 2;
            egret.Tween.get(this.btp1, { loop: true }).to({ rotation: 360 }, 4000).to({ rotation: 0 }, 4000);
        }
        var image = new egret.Bitmap(RES.getRes("home-Figure_png"));
        this.addChild(image);
        image.scaleX = 0.5;
        image.scaleY = 0.5;
        egret.Tween.get(image).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 1000, egret.Ease.backOut).call(function () {
        });
    };
    return TweenTreeRunRotation;
})(EntryDisplayObjectContainer);
egret.registerClass(TweenTreeRunRotation,'TweenTreeRunRotation');
