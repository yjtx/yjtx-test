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

class SoundVolume extends EntryDisplayObjectContainer {

    public constructor() {
        super(["sounds"]);
    }

    protected initRoot():void {
        var text1: egret.TextField = new egret.TextField();
        text1.text = "增高声音";
        text1.size = 60;
        text1.y = 60;
        this.addChild(text1);
        text1.touchEnabled = true;

        var text2: egret.TextField = new egret.TextField();
        text2.text = "减少声音";
        text2.size = 60;
        text2.y = 160;
        text2.touchEnabled = true;
        this.addChild(text2);


        var s1: egret.Sound = RES.getRes("wf_mp3");
        var schannel = s1.play();

        text1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            schannel.volume += 0.1;
        }, this);

        text2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            schannel.volume -= 0.1;
        }, this);

        s1.addEventListener(egret.Event.SOUND_COMPLETE, function () {
            console.log("sfsf111");
        }, this);

    }
}


