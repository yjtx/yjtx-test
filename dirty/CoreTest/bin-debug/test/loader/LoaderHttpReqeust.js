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
var LoaderHttpReqeust = (function (_super) {
    __extends(LoaderHttpReqeust, _super);
    function LoaderHttpReqeust() {
        _super.call(this);
        this.count = 0;
    }
    var d = __define,c=LoaderHttpReqeust,p=c.prototype;
    p.initRoot = function () {
        var urlArr = [];
        urlArr.push("http://gameanalysis.egret.com/loadingStat.php");
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(urlArr[0], egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
        var variables = new egret.URLVariables();
        variables.variables = { "uid": "a75a7384517243139a6622282c1744e0", "act": "login", "gameId": "51586B42", "chanId": "9166", "pixel": { "height": 1080, "width": 1920, "dp": 1 }, "os": { "os": 3 } };
        request.send('data={"uid":"a75a7384517243139a6622282c1744e0","act":"login","gameId":"51586B42","chanId":"9166","pixel":{"height":1080,"width":1920,"dp":1},"os":{"os":3}}');
        request.addEventListener(egret.Event.COMPLETE, function (e) {
            egret.log(" sss  " + request.response);
            this.count++;
            if (this.count < 12) {
                this.initRoot();
            }
        }, this);
    };
    return LoaderHttpReqeust;
}(EntryDisplayObjectContainer));
egret.registerClass(LoaderHttpReqeust,'LoaderHttpReqeust');
