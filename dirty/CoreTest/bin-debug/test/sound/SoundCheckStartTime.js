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
var SoundCheckStartTime = (function (_super) {
    __extends(SoundCheckStartTime, _super);
    function SoundCheckStartTime() {
        _super.call(this, ["sounds"]);
    }
    var d = __define,c=SoundCheckStartTime,p=c.prototype;
    p.initRoot = function () {
        var s1 = RES.getRes("wf_mp3");
        var sChannel1;
        var text1_1 = new egret.TextField();
        text1_1.text = "playMusic";
        text1_1.size = 60;
        text1_1.y = 10;
        this.addChild(text1_1);
        text1_1.touchEnabled = true;
        text1_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (sChannel1) {
                sChannel1.stop();
            }
            sChannel1 = s1.play(parseFloat(startTime.text), 0);
        }, this);
        var text2_1 = new egret.TextField();
        text2_1.text = "pauseMusic";
        text2_1.size = 60;
        text2_1.y = 80;
        text2_1.touchEnabled = true;
        text2_1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (sChannel1) {
                sChannel1.stop();
            }
        }, this);
        this.addChild(text2_1);
        var s2 = RES.getRes("effect_mp3");
        var sChannel2;
        var text1_2 = new egret.TextField();
        text1_2.text = "playEffect";
        text1_2.size = 60;
        text1_2.y = 150;
        this.addChild(text1_2);
        text1_2.touchEnabled = true;
        text1_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (sChannel2) {
                sChannel2.stop();
            }
            sChannel2 = s2.play(parseFloat(startTime.text), 0);
        }, this);
        var text2_2 = new egret.TextField();
        text2_2.text = "pauseEffect";
        text2_2.size = 60;
        text2_2.y = 220;
        text2_2.touchEnabled = true;
        text2_2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (sChannel2) {
                sChannel2.stop();
            }
        }, this);
        this.addChild(text2_2);
        var startTime = new egret.TextField();
        this.addChild(startTime);
        startTime.size = 40;
        startTime.text = "输入开始时间 秒";
        startTime.x = 10;
        startTime.y = 300;
        var startTime = new egret.TextField();
        startTime.type = egret.TextFieldType.INPUT;
        startTime.size = 40;
        startTime.border = true;
        this.addChild(startTime);
        startTime.text = "0";
        startTime.width = 80;
        startTime.height = 70;
        startTime.restrict = "0-9\.";
        startTime.x = 340;
        startTime.y = 300;
    };
    return SoundCheckStartTime;
})(EntryDisplayObjectContainer);
egret.registerClass(SoundCheckStartTime,'SoundCheckStartTime');
