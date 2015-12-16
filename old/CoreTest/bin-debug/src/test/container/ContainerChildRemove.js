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
var ContainerChildRemove = (function (_super) {
    __extends(ContainerChildRemove, _super);
    function ContainerChildRemove() {
        _super.call(this);
    }
    var __egretProto__ = ContainerChildRemove.prototype;
    __egretProto__.initRoot = function () {
        for (var i = 0; i < 5; i++) {
            var text = new egret.TextField();
            text.text = "ddd " + i;
            this.addChild(text);
            text.x = 100;
            text.y = 100 + i * 60;
        }
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapHandler, this);
        var child = this.getChildAt(2);
        child.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemovedFromStage, this);
    };
    __egretProto__.onTapHandler = function () {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapHandler, this);
        var child = this.getChildAt(2);
        this.removeChild(child);
    };
    __egretProto__.onRemovedFromStage = function (e) {
        var child = this.getChildAt(0);
        if (child.parent) {
            child.parent.removeChild(child);
        }
    };
    return ContainerChildRemove;
})(EntryDisplayObjectContainer);
ContainerChildRemove.prototype.__class__ = "ContainerChildRemove";
