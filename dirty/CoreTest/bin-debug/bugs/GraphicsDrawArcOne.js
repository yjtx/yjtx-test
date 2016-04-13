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
var GraphicsDrawArcOne = (function (_super) {
    __extends(GraphicsDrawArcOne, _super);
    function GraphicsDrawArcOne() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawArcOne,p=c.prototype;
    p.initRoot = function () {
        //this.testDrawArc(100, 100, 1);
        this.getSectorProgress(true, 1, 60);
    };
    p.testDrawArc = function (x, y, size) {
        var g = new egret.Shape();
        g.x = x;
        g.y = y;
        g.graphics.beginFill(0xff0000);
        g.graphics.lineStyle(size, 0xffff00);
        g.graphics.drawArc(0, 0, 100, 0, Math.PI * 3 / 4, false);
        g.graphics.endFill();
        this.addChild(g);
    };
    p.getSectorProgress = function (anticlockwise, dic, r) {
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.x = 200;
        shape.y = 200;
        var angle = 0;
        egret.startTick(function (timeStamp) {
            angle += 1 * dic;
            changeGraphics(angle);
            angle = angle % 360;
            return true;
        }, this);
        shape.anchorOffsetX = r;
        shape.anchorOffsetY = r;
        return shape;
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0xff0000);
            shape.graphics.moveTo(r, r);
            shape.graphics.lineTo(r, r * 2);
            shape.graphics.drawArc(r, r, r, 270 * Math.PI / 180, angle * Math.PI / 180, anticlockwise);
            shape.graphics.lineTo(r, r);
            shape.graphics.endFill();
        }
    };
    return GraphicsDrawArcOne;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsDrawArcOne,'GraphicsDrawArcOne');
