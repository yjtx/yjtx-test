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
var LoaderPostData = (function (_super) {
    __extends(LoaderPostData, _super);
    function LoaderPostData() {
        _super.call(this);
    }
    var d = __define,c=LoaderPostData,p=c.prototype;
    p.initRoot = function () {
        this.testText();
        this.testText1();
    };
    p.testText = function () {
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            egret.log("1111");
            egret.log(loader.data);
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest("http://s1.ns.qimi.com/zmfsj/www/qimi/local/api.php");
        request.method = egret.URLRequestMethod.POST;
        var variables = new egret.URLVariables("data={%22mod%22:%22User%22,%22do%22:%22login%22,%22p%22:{%22uName%22:%22ivens0008@ismole.com%22,%22uPass%22:%22whatAfuckingDay%22}}&h=U1p7QAlvfmNmXXBcWWZBdm4KFF4Idxp1YXgkPAIeFFd9&print=no&secket=");
        request.data = variables;
        loader.load(request);
    };
    p.testText1 = function () {
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            egret.log("2222");
            egret.log(loader.data);
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
        var request = new egret.URLRequest("http://s1.ns.qimi.com/zmfsj/www/qimi/local/api.php");
        request.method = egret.URLRequestMethod.POST;
        var variables = new egret.URLVariables();
        request.data = variables;
        variables.variables = { "data": '{"mod":"User","do":"login","p":{"uName":"ivens0008@ismole.com","uPass":"whatAfuckingDay"}}', "h": "U1p7QAlvfmNmXXBcWWZBdm4KFF4Idxp1YXgkPAIeFFd9", "print": "no", "secket": "" };
        loader.load(request);
    };
    return LoaderPostData;
})(EntryDisplayObjectContainer);
egret.registerClass(LoaderPostData,'LoaderPostData');
