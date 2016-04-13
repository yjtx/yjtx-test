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

class WebSocketString extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var socket = new egret.WebSocket();
        socket.type = egret.WebSocket.TYPE_STRING;
        alert("111")
        socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, function (e:egret.ProgressEvent) {
            egret.log("SOCKET_DATA");

            var msg:string = socket.readUTF();
            egret.log("收到数据：" + msg);

        }, this);
        socket.addEventListener(egret.Event.CONNECT, function (e:egret.Event) {
            egret.log("WebSocketOpen");
        }, this);
        socket.addEventListener(egret.Event.CLOSE, function (e:egret.Event) {
            egret.log("WebSocketClose");
        }, this);
        socket.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e:egret.IOErrorEvent) {
            egret.log("WebSocketError");

        }, this);

        var label:egret.TextField = new egret.TextField();
        label.text = "点击打开连接";
        label.touchEnabled = true;
        label.y = 0;
        this.addChild(label);
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.log("打开连接中....");
            //socket.connect("echo.websocket.org", 80);
            socket.connectByUrl("ws://echo.websocket.org");
        }, this);

        var label:egret.TextField = new egret.TextField();
        label.text = "点击发送数据";
        label.touchEnabled = true;
        label.y = 30;
        this.addChild(label);
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.log("发送数据中....");
            socket.writeUTF("Hello Egret WebSocket");
        }, this);

        var label:egret.TextField = new egret.TextField();
        label.text = "点击关闭连接";
        label.touchEnabled = true;
        label.y = 60;
        this.addChild(label);
        label.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            egret.log("关闭连接中....");
            socket.close();
        }, this);
    }
}


