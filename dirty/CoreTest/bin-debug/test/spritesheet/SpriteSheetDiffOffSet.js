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
var SpriteSheetDiffOffSet = (function (_super) {
    __extends(SpriteSheetDiffOffSet, _super);
    function SpriteSheetDiffOffSet() {
        _super.call(this, ["spritesheets"]);
    }
    var d = __define,c=SpriteSheetDiffOffSet,p=c.prototype;
    p.initRoot = function () {
        this.addBitmap("icon_34026", 10);
        this.addBitmap("icon_39004", 150);
        this.addBitmap("item_box_30", 310);
    };
    p.addBitmap = function (key, x) {
        var texture = RES.getRes("icons_div_1_json." + key);
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        console.log(icon.width);
        icon.anchorOffsetX = icon.width / 2;
        icon.anchorOffsetY = icon.height / 2;
        icon.x = x + 30;
        icon.y = 100;
        var texture = RES.getRes("icons_div_2_json." + key);
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        console.log(icon.width);
        icon.anchorOffsetX = icon.width / 2;
        icon.anchorOffsetY = icon.height / 2;
        icon.x = x + 30;
        icon.y = 230;
        var texture = RES.getRes("icons_div_1_json." + key);
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        icon.x = x + 30 - icon.width / 2;
        icon.y = 300;
        var texture = RES.getRes("icons_div_2_json." + key);
        var icon = new egret.Bitmap(texture);
        this.addChild(icon);
        console.log(icon.width);
        icon.x = x + 30 - icon.width / 2;
        icon.y = 430;
    };
    return SpriteSheetDiffOffSet;
}(EntryDisplayObjectContainer));
egret.registerClass(SpriteSheetDiffOffSet,'SpriteSheetDiffOffSet');
