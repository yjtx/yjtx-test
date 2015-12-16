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
var BitmapClickCrossMore = (function (_super) {
    __extends(BitmapClickCrossMore, _super);
    function BitmapClickCrossMore() {
        _super.call(this, ["mcs"]);
    }
    var __egretProto__ = BitmapClickCrossMore.prototype;
    __egretProto__.initRoot = function () {
        var self = this;
        var texture1 = RES.getRes("icon_win_png");
        var texture2 = RES.getRes("icon_lose_png");
        function addMcs() {
            for (var i = 0; i < 50; i++) {
                var role = new egret.Bitmap();
                role.texture = (i % 2) ? texture1 : texture2;
                role.x = 100;
                role.y = 220;
                self.addChild(role);
                role.scaleX = 1;
                role.x = Math.random() * self.stage.stageWidth;
                role.y = Math.random() * self.stage.stageHeight + 20;
            }
        }
        addMcs();
        self.touchEnabled = true;
        self.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            addMcs();
        }, this);
    };
    return BitmapClickCrossMore;
})(EntryDisplayObjectContainer);
BitmapClickCrossMore.prototype.__class__ = "BitmapClickCrossMore";
