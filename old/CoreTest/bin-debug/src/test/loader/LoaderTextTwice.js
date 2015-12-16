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
var LoaderTextTwice = (function (_super) {
    __extends(LoaderTextTwice, _super);
    function LoaderTextTwice() {
        _super.call(this);
    }
    var __egretProto__ = LoaderTextTwice.prototype;
    __egretProto__.initRoot = function () {
        var self = this;
        this.loader = new egret.URLLoader();
        this.loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            this.loader.removeEventListener(egret.Event.COMPLETE, loadOver, self);
            //alert(loader.data);
            //alert(JSON.parse(loader.data));
            console.log("once");
            self.testText2();
        }, this);
        this.loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest("resource/resource.json");
        this.loader.load(request);
    };
    __egretProto__.testText2 = function () {
        this.loader = new egret.URLLoader();
        this.loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            this.loader.removeEventListener(egret.Event.COMPLETE, loadOver, self);
            console.log("twice");
        }, this);
        this.loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest("resource/resource.json");
        this.loader.load(request);
    };
    return LoaderTextTwice;
})(EntryDisplayObjectContainer);
LoaderTextTwice.prototype.__class__ = "LoaderTextTwice";
