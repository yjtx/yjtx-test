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

class MovieClipEvents extends EntryDisplayObjectContainer {

    public constructor() {
        super(["mcs"]);
    }

    protected initRoot():void {
        var movieclipData1 = RES.getRes("run_down_json");
        var texture1 = RES.getRes("run_down_png");
        var mcDataFactory1 = new egret.MovieClipDataFactory(movieclipData1, texture1);

        var movieclipData2 = RES.getRes("run_up_json");
        var texture2 = RES.getRes("run_up_png");
        var mcDataFactory2 = new egret.MovieClipDataFactory(movieclipData2, texture2);

        var self = this;

        var role1:egret.MovieClip = new egret.MovieClip(mcDataFactory1.generateMovieClipData("run"));
        self.addChild(role1);
        role1.gotoAndPlay(Math.floor(Math.random() * 12 + 1), -1);
        role1.scaleX = 1;

        role1.x = Math.random() * self.stage.stageWidth;
        role1.y = Math.random() * self.stage.stageHeight + 20;
        role1.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
            console.log("111 " + e.type + "  " + e.frameLabel + "  " + role1.currentFrame);//frame_label @fall 6
        },this);


        var role2:egret.MovieClip = new egret.MovieClip(mcDataFactory1.generateMovieClipData("run"));
        role2.gotoAndPlay(Math.floor(Math.random() * 12 + 1), -1);

        role2.addEventListener(egret.MovieClipEvent.FRAME_LABEL,(e:egret.MovieClipEvent)=>{
            console.log("222 " + e.type + "  " + e.frameLabel + "  " + role2.currentFrame);//frame_label @fall 6
        },this);
    }
}


