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
var ScaleModeClickChangeModes = (function (_super) {
    __extends(ScaleModeClickChangeModes, _super);
    //默认设置是 fixedWidth
    function ScaleModeClickChangeModes() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ScaleModeClickChangeModes,p=c.prototype;
    p.initRoot = function () {
        this.initContent();
        this.stage.orientation = egret.OrientationMode.PORTRAIT;
    };
    p.initContent = function () {
        var bg = new egret.Bitmap(RES.getRes("bg_jpg"));
        bg.width = this.stage.stageWidth;
        bg.height = this.stage.stageHeight;
        this.addChild(bg);
        var icon = new egret.Bitmap(RES.getRes("egret_icon_png"));
        this.addChild(icon);
        icon.x = this.stage.stageWidth / 2 - 50;
        icon.y = this.stage.stageHeight / 2 - 50;
        icon.width = icon.height = 100;
        this.text = new egret.TextField();
        this.addChild(this.text);
        this.text.x = icon.x;
        this.text.y = icon.y - 140;
        var scaleModes = [
            egret.StageScaleMode.FIXED_HEIGHT,
            egret.StageScaleMode.FIXED_WIDTH,
            egret.StageScaleMode.SHOW_ALL,
            egret.StageScaleMode.EXACT_FIT,
            egret.StageScaleMode.NO_SCALE,
            egret.StageScaleMode.NO_BORDER,
        ];
        var self = this;
        var count = 4;
        this.stage.scaleMode = scaleModes[count++];
        self.setText();
        icon.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            self.stage.scaleMode = scaleModes[count++];
            count = count % scaleModes.length;
            self.setText();
        }, this);
        self.stage.addEventListener(egret.Event.RESIZE, function () {
            self.setText();
        }, this);
        self.stage.addEventListener(egret.OrientationEvent.CHANGE, function () {
            self.setText();
        }, this);
    };
    p.setText = function () {
        this.text.text = this.stage.scaleMode
            + "\nstageWidth:" + this.stage.stageWidth + "\nstageHeight:" + this.stage.stageHeight;
    };
    return ScaleModeClickChangeModes;
})(EntryDisplayObjectContainer);
egret.registerClass(ScaleModeClickChangeModes,'ScaleModeClickChangeModes');
