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
var SpriteSheetDiff = (function (_super) {
    __extends(SpriteSheetDiff, _super);
    function SpriteSheetDiff() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = SpriteSheetDiff.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testNormal, this, "spritesheets", egret.MainContext.instance.rendererContext.texture_scale_factor);
    };
    __egretProto__.getBitmap = function (idx) {
        return RES.getRes("ori_" + idx + "_png");
    };
    __egretProto__.testNormal = function () {
        var texture = this.getBitmap(0);
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.scaleX = icon.scaleY = 1.5;
        texture = this.getBitmap(2);
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.scaleX = icon.scaleY = 1.5;
        icon.y = 200;
        //texture = this.getBitmap(1);
        //var icon:egret.Bitmap = new egret.Bitmap(texture);
        //this.addChild(icon);
        //icon.scaleX = icon.scaleY = 1.5;
        //icon.y = 300;
    };
    return SpriteSheetDiff;
})(egret.DisplayObjectContainer);
SpriteSheetDiff.prototype.__class__ = "SpriteSheetDiff";
