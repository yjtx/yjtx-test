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
var SoundClickPlayNumbers = (function (_super) {
    __extends(SoundClickPlayNumbers, _super);
    function SoundClickPlayNumbers() {
        _super.call(this, ["sounds"]);
    }
    var __egretProto__ = SoundClickPlayNumbers.prototype;
    __egretProto__.initRoot = function () {
        var s = RES.getRes("numbers_mp3");
        var text1 = new egret.TextField();
        text1.text = "play";
        text1.size = 60;
        text1.y = 60;
        this.addChild(text1);
        text1.touchEnabled = true;
        text1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            s.play(true, 1);
        }, this);
        var text2 = new egret.TextField();
        text2.text = "pause";
        text2.size = 60;
        text2.y = 160;
        text2.touchEnabled = true;
        text2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            s.stop();
        }, this);
        this.addChild(text2);
        s.addEventListener(egret.SoundEvent.SOUND_COMPLETE, function (e) {
            console.log(e.type);
        }, this);
    };
    return SoundClickPlayNumbers;
})(EntryDisplayObjectContainer);
SoundClickPlayNumbers.prototype.__class__ = "SoundClickPlayNumbers";
