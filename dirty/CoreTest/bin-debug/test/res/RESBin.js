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
var RESBin = (function (_super) {
    __extends(RESBin, _super);
    function RESBin() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=RESBin,p=c.prototype;
    p.initRoot = function () {
        var value = RES.getRes("binTest_json");
        egret.log(value);
        var byte = new egret.ByteArray(value);
        var magBytesAvailable = 0;
        egret.log("收到数据：" + byte.length);
        egret.log("收到数据：" + byte.bytesAvailable);
        var msg = byte.readUTFBytes(byte.bytesAvailable);
        egret.log("收到数据：" + msg);
        byte.position = 0;
        var boo = byte.readBoolean();
        egret.log("收到数据：" + boo.toString());
        byte.position = 0;
        var num = byte.readInt();
        egret.log("收到数据：" + num.toString());
    };
    return RESBin;
}(EntryDisplayObjectContainer));
egret.registerClass(RESBin,'RESBin');
