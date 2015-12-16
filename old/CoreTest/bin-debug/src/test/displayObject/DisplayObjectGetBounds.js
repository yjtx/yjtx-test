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
var DisplayObjectGetBounds = (function (_super) {
    __extends(DisplayObjectGetBounds, _super);
    function DisplayObjectGetBounds() {
        _super.call(this);
    }
    var __egretProto__ = DisplayObjectGetBounds.prototype;
    __egretProto__.initRoot = function () {
        var sp = new egret.Shape();
        sp.graphics.beginFill(0);
        sp.graphics.drawRect(0, 0, 100, 300);
        sp.graphics.endFill();
        this.addChild(sp);
        sp.x = 110;
        sp.y = 210;
        var rect = sp.getBounds();
        console.log(rect.x, rect.y, rect.width, rect.height);
        sp.rotation = 45;
        var rect = sp.getBounds();
        console.log(rect.x, rect.y, rect.width, rect.height);
        /*sp.rotation = 0;
        var rect:egret.Rectangle = this.getTransformedBounds(sp);
        console.log(rect.x,rect.y,rect.width,rect.height);
        //0 0 100 300

        egret.setTimeout(function() {
            sp.rotation = 45;
            var rect:egret.Rectangle = this.getTransformedBounds(sp);
            console.log(rect.x,rect.y,rect.width,rect.height);
            //0 0 100 300
        }, this, 3000);*/
    };
    return DisplayObjectGetBounds;
})(EntryDisplayObjectContainer);
DisplayObjectGetBounds.prototype.__class__ = "DisplayObjectGetBounds";
