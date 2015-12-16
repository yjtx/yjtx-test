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
var MovieClipNumRun = (function (_super) {
    __extends(MovieClipNumRun, _super);
    function MovieClipNumRun() {
        _super.call(this, ["mcs"]);
    }
    var __egretProto__ = MovieClipNumRun.prototype;
    __egretProto__.initRoot = function () {
        var movieclipData = RES.getRes("nums_json");
        var texture = RES.getRes("nums_png");
        var self = this;
        var mcDataFactory1 = new egret.MovieClipDataFactory(movieclipData, texture);
        for (var i = 0; i < 6; i++) {
            var role = new egret.MovieClip(((i % 2 == 0) ? mcDataFactory1 : mcDataFactory1).generateMovieClipData("nums"));
            role.x = 100;
            role.y = 220;
            self.addChild(role);
            role.play(-1);
            role.x = (i % 5) * 80;
            role.y = Math.floor(i / 5) * 80 + 300;
        }
        var count = -1;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            count++;
            for (var i = 0; i < 6; i++) {
                var child = this.getChildAt(i);
                child.gotoAndStop((i + count) % 6 + 1);
            }
        }, this);
    };
    return MovieClipNumRun;
})(EntryDisplayObjectContainer);
MovieClipNumRun.prototype.__class__ = "MovieClipNumRun";
