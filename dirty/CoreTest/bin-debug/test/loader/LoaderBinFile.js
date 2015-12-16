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
var LoaderBinFile = (function (_super) {
    __extends(LoaderBinFile, _super);
    function LoaderBinFile() {
        _super.call(this, ["bitmap"]);
    }
    var d = __define,c=LoaderBinFile,p=c.prototype;
    p.initRoot = function () {
        egret.log("start");
        var loader = new egret.URLLoader();
        loader.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            egret.log("success11");
            var b = new egret.ByteArray(loader.data);
            var st = b.readUTFBytes(b.length);
            egret.log("success22");
            egret.log(st);
        }, this);
        loader.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadOver(event) {
            egret.log("error");
        }, this);
        loader.dataFormat = egret.URLLoaderDataFormat.BINARY;
        var request = new egret.URLRequest(RES.$getVirtualUrl("resource/vib/binConfig.vib"));
        loader.load(request);
    };
    return LoaderBinFile;
})(EntryDisplayObjectContainer);
egret.registerClass(LoaderBinFile,'LoaderBinFile');
