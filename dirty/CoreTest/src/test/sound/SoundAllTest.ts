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

class SoundAllTest extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testSound, this, "sounds", this.stage.textureScaleFactor);
    }

    public static Label:egret.TextField;

    private testSound():void {
        var container:egret.Sprite = new egret.Sprite();
        this.addChild(container);
        var currentChild;

        container.x = 100;
        container.y = 100;
        container.graphics.beginFill(0xff0000, 1);
        container.graphics.drawRect(0, 0, 380, 400);
        container.graphics.endFill();

        var testInfo = {};
        testInfo["testSoundFuncs"] = input.testSoundFuncs;

        var label:egret.TextField = new egret.TextField();
        label.fontFamily = "";
        this.addChild(label);
        label.x = 450;

        SoundAllTest.Label = label;

        var i:number = 0;
        for (var key in testInfo)
        {
            var text:egret.TextField = new egret.TextField();
            this.addChild(text);
            text.stroke = 2;
            text.strokeColor = 0xff0000;
            text.x = 0;
            text.y = 40 * i +100;
            text.text = key;
            text.touchEnabled = true;
            text.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                if (currentChild) {
                    egret.Tween.removeTweens(currentChild);
                }
                container.removeChildren();

                currentChild = testInfo[this.text].call(null);
                container.addChild(currentChild);
                currentChild.x = 200;
                label.text = this.text;
            }, text);
            i++;
        }
    }
}


