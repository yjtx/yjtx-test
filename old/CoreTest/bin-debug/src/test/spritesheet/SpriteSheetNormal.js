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
var SpriteSheetNormal = (function (_super) {
    __extends(SpriteSheetNormal, _super);
    function SpriteSheetNormal() {
        _super.call(this, ["spritesheets"]);
    }
    var __egretProto__ = SpriteSheetNormal.prototype;
    __egretProto__.initRoot = function () {
        var texture = RES.getRes("999999_02");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.x = 100;
        icon.y = 100;
        icon.width = icon.height = 120;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffffff);
        shape.graphics.drawRect(0, 0, icon.width, icon.height);
        shape.graphics.endFill();
        this.addChildAt(shape, 0);
        shape.x = icon.x;
        shape.y = icon.y;
        var texture = RES.getRes("999999_02");
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.x = 100;
        icon.y = 330;
        icon.width = icon.height = 60;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xffffff);
        shape.graphics.drawRect(0, 0, icon.width, icon.height);
        shape.graphics.endFill();
        this.addChildAt(shape, 0);
        shape.x = icon.x;
        shape.y = icon.y;
    };
    return SpriteSheetNormal;
})(EntryDisplayObjectContainer);
SpriteSheetNormal.prototype.__class__ = "SpriteSheetNormal";
