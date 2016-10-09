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
var LoaderHttpReqeustGet = (function (_super) {
    __extends(LoaderHttpReqeustGet, _super);
    function LoaderHttpReqeustGet() {
        _super.call(this);
    }
    var d = __define,c=LoaderHttpReqeustGet,p=c.prototype;
    p.initRoot = function () {
        this.testText1();
        this.testText2();
    };
    p.testText1 = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://10.0.4.63/Yjtx/server/a.php?p1=postP1&p2=postP2", egret.HttpMethod.GET);
        // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send();
        var count = 0;
        request.addEventListener(egret.Event.COMPLETE, function () {
            egret.log(111);
            count++;
            if (count < 2) {
                request.open("http://10.0.4.63/Yjtx/server/a.php?p1=postP1&p2=postP2", egret.HttpMethod.GET);
                request.send();
            }
        }, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function () {
        }, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, function () {
        }, this);
    };
    p.testText2 = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://10.0.4.63/Yjtx/server/a.php", egret.HttpMethod.GET);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send('p1=postP1&p2=postP2');
        request.addEventListener(egret.Event.COMPLETE, function () {
            egret.log(111);
        }, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function () {
        }, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, function () {
        }, this);
    };
    return LoaderHttpReqeustGet;
}(EntryDisplayObjectContainer));
egret.registerClass(LoaderHttpReqeustGet,'LoaderHttpReqeustGet');
