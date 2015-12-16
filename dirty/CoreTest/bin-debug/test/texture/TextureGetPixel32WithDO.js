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
var TextureGetPixel32WithDO = (function (_super) {
    __extends(TextureGetPixel32WithDO, _super);
    function TextureGetPixel32WithDO() {
        _super.call(this, ["mcs"]);
    }
    var d = __define,c=TextureGetPixel32WithDO,p=c.prototype;
    p.initRoot = function () {
        var c = new egret.DisplayObjectContainer();
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawRect(0, 0, 2, 2);
        shape.graphics.endFill();
        c.addChild(shape);
        shape.x = shape.y = 99;
        var texture = new egret.RenderTexture();
        texture.drawToTexture(c);
        var bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);
        var data = texture.getPixel32(98, 98);
        console.dir(data);
        var data = texture.getPixel32(99, 99);
        console.dir(data);
        var data = texture.getPixel32(100, 100);
        console.dir(data);
        var data = texture.getPixel32(101, 101);
        console.dir(data);
    };
    return TextureGetPixel32WithDO;
})(EntryDisplayObjectContainer);
egret.registerClass(TextureGetPixel32WithDO,'TextureGetPixel32WithDO');
