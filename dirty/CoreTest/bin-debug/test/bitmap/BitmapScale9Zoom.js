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
var BitmapScale9Zoom = (function (_super) {
    __extends(BitmapScale9Zoom, _super);
    function BitmapScale9Zoom() {
        _super.call(this, ["bitmap"]);
    }
    var d = __define,c=BitmapScale9Zoom,p=c.prototype;
    p.initRoot = function () {
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        icon.y = 0;
        this.addChild(icon);
        icon.scale9Grid = new egret.Rectangle(45, 44, 8, 14);
        icon.scaleX = icon.scaleY = 2;
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(icon);
        icon.y = 200;
        icon.scaleX = icon.scaleY = 2;
        var icon = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(icon);
        icon.x = 220;
        icon.scaleX = icon.scaleY = 2;
        var texture = RES.getRes("scale9_1_png");
        var icon = new egret.Bitmap();
        icon.texture = texture;
        icon.y = 400;
        this.addChild(icon);
        var texture = RES.getRes("scale9_1_png");
        var icon = new egret.Bitmap();
        icon.texture = texture;
        icon.x = 200;
        icon.y = 400;
        icon.width = 200;
        icon.height = 300;
        this.addChild(icon);
    };
    return BitmapScale9Zoom;
})(EntryDisplayObjectContainer);
egret.registerClass(BitmapScale9Zoom,'BitmapScale9Zoom');
