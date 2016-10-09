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
var ScrollViewDouble = (function (_super) {
    __extends(ScrollViewDouble, _super);
    function ScrollViewDouble() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ScrollViewDouble,p=c.prototype;
    p.initRoot = function () {
        var btp1 = new egret.Bitmap(RES.getRes("bg_jpg"));
        //btp1.width = 400;
        //btp1.height = 600;
        var scroller = new egret.ScrollView();
        scroller.scrollSpeed = 6;
        scroller.setContent(btp1);
        scroller.width = 200;
        scroller.height = 300;
        scroller.bounces = true;
        scroller.verticalScrollPolicy = "on";
        scroller.horizontalScrollPolicy = "off";
        var scroll2 = new egret.ScrollView();
        scroll2.horizontalScrollPolicy = "on";
        scroll2.verticalScrollPolicy = "off";
        var c = new egret.DisplayObjectContainer();
        var s = new egret.Shape();
        s.graphics.beginFill(0xff0000);
        s.graphics.drawCircle(0, 0, 100);
        s.graphics.endFill();
        c.addChild(s);
        c.addChild(scroller);
        scroller.x = 10;
        scroller.y = 200;
        scroll2.setContent(c);
        scroller.width = 500;
        scroller.height = 600;
        this.addChild(scroll2);
    };
    return ScrollViewDouble;
}(EntryDisplayObjectContainer));
egret.registerClass(ScrollViewDouble,'ScrollViewDouble');
