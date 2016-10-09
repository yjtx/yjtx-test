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
var BitmapScale9Logo = (function (_super) {
    __extends(BitmapScale9Logo, _super);
    function BitmapScale9Logo() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=BitmapScale9Logo,p=c.prototype;
    p.initRoot = function () {
        var btp3 = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChildAt(btp3, 2);
        btp3.scaleX = btp3.scaleY = 0.5;
        btp3.x = 200;
        btp3.y = 100;
        btp3.width = 300;
        btp3.height = 300;
        // btp3.scale9Grid = new egret.Rectangle(20, 20, 48, 44);
        var btp3 = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChildAt(btp3, 2);
        btp3.scaleX = btp3.scaleY = 0.5;
        btp3.x = 200;
        btp3.y = 300;
        btp3.width = 300;
        btp3.height = 300;
        btp3.scale9Grid = new egret.Rectangle(20, 20, 48, 44);
    };
    return BitmapScale9Logo;
}(EntryDisplayObjectContainer));
egret.registerClass(BitmapScale9Logo,'BitmapScale9Logo');
