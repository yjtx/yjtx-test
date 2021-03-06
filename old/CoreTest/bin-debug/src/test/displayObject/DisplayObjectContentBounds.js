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
var DisplayObjectContentBounds = (function (_super) {
    __extends(DisplayObjectContentBounds, _super);
    function DisplayObjectContentBounds() {
        _super.call(this, ["preload"]);
    }
    var __egretProto__ = DisplayObjectContentBounds.prototype;
    __egretProto__.initRoot = function () {
        var container1 = new egret.DisplayObjectContainer();
        this.addChild(container1);
        container1.name = "container1";
        var container2 = new egret.DisplayObjectContainer();
        container1.addChild(container2);
        container2.width = 100;
        container2.height = 100;
        container2.name = "container2";
        var texture = RES.getRes("bg_jpg");
        var icon = new egret.Bitmap();
        icon.texture = texture;
        container2.addChild(icon);
        console.log("width=" + container1.width + "  height=" + container1.height);
        console.log("width=" + container2.width + "  height=" + container2.height);
    };
    return DisplayObjectContentBounds;
})(EntryDisplayObjectContainer);
DisplayObjectContentBounds.prototype.__class__ = "DisplayObjectContentBounds";
