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
var TweenLoopWithShape = (function (_super) {
    __extends(TweenLoopWithShape, _super);
    function TweenLoopWithShape() {
        _super.call(this, ["bitmap"]);
    }
    var d = __define,c=TweenLoopWithShape,p=c.prototype;
    p.initRoot = function () {
        var btp1 = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChildAt(btp1, 0);
        btp1.x = 100;
        btp1.y = 100;
        egret.Tween.get(btp1, { loop: true }).to({ y: 300 }, 3000).to({ y: 100 }, 3000);
        var tshape = new egret.Shape();
        tshape.graphics.clear();
        tshape.graphics.beginFill(0, 0.5);
        tshape.graphics.drawRect(0, 0, 300, 500);
        tshape.graphics.endFill();
        this.addChild(tshape);
    };
    return TweenLoopWithShape;
})(EntryDisplayObjectContainer);
egret.registerClass(TweenLoopWithShape,'TweenLoopWithShape');
