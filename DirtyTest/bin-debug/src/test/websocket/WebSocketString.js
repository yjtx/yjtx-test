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
var WebSocketString = (function (_super) {
    __extends(WebSocketString, _super);
    function WebSocketString() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = WebSocketString.prototype;
    __egretProto__.init = function () {
        this.testWebSocketString();
    };
    __egretProto__.testWebSocketString = function () {
        var socket = new egret.WebSocket();
        socket.type = egret.WebSocket.TYPE_STRING;
        socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, function (e) {
            console.log("SOCKET_DATA");
            var msg = socket.readUTF();
            console.log("收到数据：" + msg);
        }, this);
        socket.addEventListener(egret.Event.CONNECT, function (e) {
            console.log("WebSocketOpen");
        }, this);
        socket.addEventListener(egret.Event.CLOSE, function (e) {
            console.log("WebSocketClose");
        }, this);
        socket.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) {
            console.log("WebSocketError");
        }, this);
        var label = new egret.TextField();
        label.text = "点击打开连接";
        label.touchEnabled = true;
        label.y = 0;
        this.addChild(label);
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            socket.connect("echo.websocket.org", 80);
        }, this);
        var label = new egret.TextField();
        label.text = "点击发送数据";
        label.touchEnabled = true;
        label.y = 30;
        this.addChild(label);
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            socket.writeUTF("Hello Egret WebSocket");
        }, this);
        var label = new egret.TextField();
        label.text = "点击关闭连接";
        label.touchEnabled = true;
        label.y = 60;
        this.addChild(label);
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            socket.close();
        }, this);
    };
    return WebSocketString;
})(egret.DisplayObjectContainer);
WebSocketString.prototype.__class__ = "WebSocketString";
egret.registerClass(WebSocketString,"WebSocketString");
