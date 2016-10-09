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
var FiltersColor = (function (_super) {
    __extends(FiltersColor, _super);
    function FiltersColor() {
        _super.call(this, ["bitmap"]);
    }
    var d = __define,c=FiltersColor,p=c.prototype;
    p.initRoot = function () {
        var bmp = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(bmp);
        bmp.x = 0;
        bmp.y = 200;
        //变灰
        var bmp = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(bmp);
        //颜色矩阵数组
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        bmp.x = 150;
        bmp.y = 200;
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        bmp.filters = [colorFlilter];
        //变红
        var bmp = new egret.Bitmap(RES.getRes("img_scale9_png"));
        this.addChild(bmp);
        //颜色矩阵数组
        var colorMatrix = [
            1, 0, 0, 0, 100,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        bmp.x = 300;
        bmp.y = 200;
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        bmp.filters = [colorFlilter];
    };
    return FiltersColor;
}(EntryDisplayObjectContainer));
egret.registerClass(FiltersColor,'FiltersColor');
