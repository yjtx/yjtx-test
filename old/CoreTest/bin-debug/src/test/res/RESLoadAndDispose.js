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
var RESLoadAndDispose = (function (_super) {
    __extends(RESLoadAndDispose, _super);
    function RESLoadAndDispose() {
        _super.call(this, ["member_bitmap"]);
    }
    var __egretProto__ = RESLoadAndDispose.prototype;
    __egretProto__.initRoot = function () {
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes("bg_jpg");
        this.addChild(bitmap);
        var isLoaded = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (isLoaded) {
                this.removeChild(bitmap);
                console.log("destroy");
                RES.destroyRes("member_bitmap");
            }
            else {
                console.log("load");
                RES.loadGroup("member_bitmap");
            }
            isLoaded = !isLoaded;
        }, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, function () {
            console.log("over");
            bitmap = new egret.Bitmap();
            bitmap.texture = RES.getRes("bg_jpg");
            this.addChild(bitmap);
        }, this);
    };
    return RESLoadAndDispose;
})(EntryDisplayObjectContainer);
RESLoadAndDispose.prototype.__class__ = "RESLoadAndDispose";
