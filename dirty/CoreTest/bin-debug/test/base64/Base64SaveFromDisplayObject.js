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
var Base64SaveFromDisplayObject = (function (_super) {
    __extends(Base64SaveFromDisplayObject, _super);
    function Base64SaveFromDisplayObject() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=Base64SaveFromDisplayObject,p=c.prototype;
    p.initRoot = function () {
        var c = new egret.DisplayObjectContainer();
        this.addChild(c);
        var texture = RES.getRes("run_down_png");
        var icon = new egret.Bitmap(texture);
        c.addChild(icon);
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(c);
        renderTexture.saveToFile("image/png", "a/down.png", new egret.Rectangle(20, 20, 100, 100));
    };
    return Base64SaveFromDisplayObject;
})(EntryDisplayObjectContainer);
egret.registerClass(Base64SaveFromDisplayObject,'Base64SaveFromDisplayObject');
