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
var UIAssetScaleZeroClick = (function (_super) {
    __extends(UIAssetScaleZeroClick, _super);
    function UIAssetScaleZeroClick() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=UIAssetScaleZeroClick,p=c.prototype;
    p.initRoot = function () {
        var guiLayer = new egret.gui.UIStage();
        this.addChild(guiLayer);
        var group = new egret.gui.Group();
        guiLayer.addElement(group);
        var btn = new egret.gui.Button();
        btn.label = "确定";
        group.addElement(btn);
        btn.x = 100;
        btn.y = 100;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("btn");
        }, this);
        var ui = new egret.gui.UIAsset();
        ui.source = "bgImage";
        ui.scaleX = 0;
        group.addElement(ui);
        ui.touchEnabled = true;
        ui.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("ui");
        }, this);
    };
    return UIAssetScaleZeroClick;
}(EntryDisplayObjectContainer));
egret.registerClass(UIAssetScaleZeroClick,'UIAssetScaleZeroClick');
