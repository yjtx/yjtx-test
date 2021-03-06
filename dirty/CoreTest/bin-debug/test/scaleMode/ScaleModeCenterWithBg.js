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
var ScaleModeCenterWithBg = (function (_super) {
    __extends(ScaleModeCenterWithBg, _super);
    function ScaleModeCenterWithBg() {
        _super.call(this);
        //默认设置是 fixedWidth
        this.defaultW = 480;
        this.defaultH = 800;
    }
    var d = __define,c=ScaleModeCenterWithBg,p=c.prototype;
    p.initRoot = function () {
        this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
        this.checkMode();
        new LoadResources(this.testScrollView, this, "preload", this.stage.textureScaleFactor);
    };
    p.testScrollView = function () {
        this.initBg();
        this.initContent();
        this.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, function (e) {
            egret.log(e.type);
            this.checkMode();
        }, this);
        this.stage.addEventListener(egret.Event.RESIZE, function (e) {
            egret.log(e.type);
            this.checkMode();
        }, this);
    };
    p.initContent = function () {
        this.rootContainer = new egret.DisplayObjectContainer();
        this.addChild(this.rootContainer);
        this.rootContainer.width = this.defaultW;
        this.rootContainer.height = this.defaultH;
        var bg = new egret.Bitmap(RES.getRes("bg_jpg"));
        bg.width = this.defaultW;
        bg.height = this.defaultH;
        this.rootContainer.x = this.stage.stageWidth / 2 - this.rootContainer.width / 2;
        this.rootContainer.y = this.stage.stageHeight / 2 - this.rootContainer.height / 2;
        this.rootContainer.addChild(bg);
    };
    p.initBg = function () {
        this.bgShape = new egret.Shape();
        this.bgShape.graphics.beginFill(0xff00ff);
        this.bgShape.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        this.bgShape.graphics.endFill();
        this.addChild(this.bgShape);
    };
    p.checkMode = function () {
        if (this.stage.stageWidth == this.defaultW && this.stage.stageHeight < this.defaultH) {
            this.stage.scaleMode = egret.StageScaleMode.FIXED_HEIGHT;
        }
        else if (this.stage.stageWidth < this.defaultW && this.stage.stageHeight == this.defaultH) {
            this.stage.scaleMode = egret.StageScaleMode.FIXED_WIDTH;
        }
        if (this.rootContainer) {
            this.rootContainer.x = this.stage.stageWidth / 2 - this.rootContainer.width / 2;
            this.rootContainer.y = this.stage.stageHeight / 2 - this.rootContainer.height / 2;
            this.bgShape.graphics.clear();
            this.bgShape.graphics.beginFill(0xff00ff);
            this.bgShape.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
            this.bgShape.graphics.endFill();
        }
    };
    return ScaleModeCenterWithBg;
})(EntryDisplayObjectContainer);
egret.registerClass(ScaleModeCenterWithBg,'ScaleModeCenterWithBg');
