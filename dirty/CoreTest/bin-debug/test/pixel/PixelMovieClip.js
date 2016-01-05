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
var PixelMovieClip = (function (_super) {
    __extends(PixelMovieClip, _super);
    function PixelMovieClip() {
        _super.call(this, ["mcs"]);
    }
    var d = __define,c=PixelMovieClip,p=c.prototype;
    p.initRoot = function () {
        var movieclipData = RES.getRes("scene_block_tree_json");
        var texture = RES.getRes("scene_block_tree_png");
        var self = this;
        var mcDataFactory1 = new egret.MovieClipDataFactory(movieclipData, texture);
        this._mc = new egret.MovieClip(mcDataFactory1.generateMovieClipData("scene_block_tree1"));
        this._mc.x = 200;
        this._mc.y = 320;
        self.addChild(this._mc);
        this.touchEnabled = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTest, this);
    };
    p.onTest = function (e) {
        e.stopImmediatePropagation();
        var stageX = e.stageX;
        var stageY = e.stageY;
        var point = new egret.Point();
        this._mc.globalToLocal(stageX, stageY, point);
        var texture = this._mc.movieClipData.getTextureByFrame(this._mc.currentFrame);
        var bounds = this._mc.getBounds();
        var nums = texture.getPixel32(point.x - bounds.x, point.y - bounds.y);
        console.log(nums[0] + "  " + nums[1] + " " + nums[2] + " " + nums[3]);
        console.log((point.x - bounds.x) + "  " + (point.y - bounds.y));
    };
    return PixelMovieClip;
})(EntryDisplayObjectContainer);
egret.registerClass(PixelMovieClip,'PixelMovieClip');
