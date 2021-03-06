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
var RenderTextureCopyGrids = (function (_super) {
    __extends(RenderTextureCopyGrids, _super);
    function RenderTextureCopyGrids() {
        _super.call(this, ["preload"]);
    }
    var __egretProto__ = RenderTextureCopyGrids.prototype;
    __egretProto__.initRoot = function () {
        var test = new egret.Bitmap(RES.getRes("tmw_desert_spacing_png"));
        this.addChild(test);
        test.x = 240;
        test.y = 400 - 60;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 8; j++) {
                var renderTexture = new egret.RenderTexture();
                renderTexture.drawToTexture(test, new egret.Rectangle(j * 33, i * 33, 33, 33), 1);
                var tiled = new egret.Bitmap();
                tiled.texture = renderTexture;
                tiled.x = j * 33;
                tiled.y = i * 33;
                this.addChild(tiled);
            }
        }
    };
    return RenderTextureCopyGrids;
})(EntryDisplayObjectContainer);
RenderTextureCopyGrids.prototype.__class__ = "RenderTextureCopyGrids";
