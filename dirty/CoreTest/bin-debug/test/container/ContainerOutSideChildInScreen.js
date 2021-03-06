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
var ContainerOutSideChildInScreen = (function (_super) {
    __extends(ContainerOutSideChildInScreen, _super);
    function ContainerOutSideChildInScreen() {
        _super.call(this, ["bitmap"]);
    }
    var d = __define,c=ContainerOutSideChildInScreen,p=c.prototype;
    p.initRoot = function () {
        var container = new egret.DisplayObjectContainer();
        var texture = RES.getRes("img_scale9_png");
        var icon = new egret.Bitmap();
        icon.texture = texture;
        container.addChild(icon);
        icon.x = 100;
        icon.y = 100;
        this.addChild(container);
        var texture1 = new egret.RenderTexture();
        texture1.drawToTexture(container, new egret.Rectangle(0, 0, 100, 110));
        var bitmap = new egret.Bitmap(texture1);
        this.addChild(bitmap);
        bitmap.x = 200;
        bitmap.y = 300;
    };
    return ContainerOutSideChildInScreen;
})(EntryDisplayObjectContainer);
egret.registerClass(ContainerOutSideChildInScreen,'ContainerOutSideChildInScreen');
