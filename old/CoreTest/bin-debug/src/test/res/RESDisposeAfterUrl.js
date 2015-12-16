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
var RESDisposeAfterUrl = (function (_super) {
    __extends(RESDisposeAfterUrl, _super);
    function RESDisposeAfterUrl() {
        _super.call(this);
    }
    var __egretProto__ = RESDisposeAfterUrl.prototype;
    __egretProto__.initRoot = function () {
        this.testUrl();
    };
    __egretProto__.testUrl = function () {
        RES.getResByUrl("https://www.httpwatch.com/assets/images/logo.png", function (texture) {
            this._bitmap = new egret.Bitmap(texture);
            this.addChild(this._bitmap);
            egret.setTimeout(function () {
                this.destroy();
            }, this, 4000);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    __egretProto__.load = function () {
        RES.getResByUrl("https://www.httpwatch.com/assets/images/logo.png", function (texture) {
            this._bitmap.texture = texture;
            egret.setTimeout(function () {
                this.destroy();
            }, this, 4000);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    __egretProto__.destroy = function () {
        var result = RES.destroyRes("https://www.httpwatch.com/assets/images/logo.png");
        console.log(result);
        egret.setTimeout(function () {
            this.load();
        }, this, 4000);
    };
    return RESDisposeAfterUrl;
})(EntryDisplayObjectContainer);
RESDisposeAfterUrl.prototype.__class__ = "RESDisposeAfterUrl";
