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

class ScrollViewList extends EntryDisplayObjectContainer {

    public constructor() {
        super(["spritesheets"]);
    }

    protected initRoot():void {
        var container = new egret.DisplayObjectContainer();
        this.bgContainer = new egret.DisplayObjectContainer();
        this.iconContainer = new egret.DisplayObjectContainer();
        this.text1Container = new egret.DisplayObjectContainer();
        this.text2Container = new egret.DisplayObjectContainer();
        container.addChild(this.bgContainer);
        container.addChild(this.iconContainer);
        container.addChild(this.text1Container);
        container.addChild(this.text2Container);


        var scroller = new egret.ScrollView();
        scroller.scrollSpeed = 6;
        scroller.setContent(container);
        this.addChild(scroller);
        scroller.width = 400;
        scroller.height = 600;
        scroller.bounces = true;

        for (var i:number = 0; i < 100; i++) {
            this.addItem(27 + i, i);
        }
    }

    private bgContainer:egret.DisplayObjectContainer;
    private iconContainer:egret.DisplayObjectContainer;
    private text1Container:egret.DisplayObjectContainer;
    private text2Container:egret.DisplayObjectContainer;

    private addItem(iconId:number, index:number):void {
        var icon = new egret.Bitmap(RES.getRes("icon_json.icon_" + (50000 + iconId)));
        this.iconContainer.addChild(icon);
        icon.width = icon.height = 70;

        var bg = new egret.Bitmap(RES.getRes("skillpannel_json.img_emptySkill"));
        this.bgContainer.addChild(bg);
        bg.width = bg.height = 75;

        var text = new egret.TextField();
        this.text1Container.addChild(text);
        text.size = 20;
        text.text = "dd " + index;

        var text2 = new egret.TextField();
        this.text2Container.addChild(text2);
        text2.size = 20;
        text2.text = "aa " + iconId;


        icon.x = (index % 5) * 80;
        icon.y = Math.floor(index / 5) * 80;

        bg.x = icon.x;
        bg.y = icon.y;

        text.x = icon.x + 20;
        text.y = icon.y;

        text2.x = icon.x;
        text2.y = icon.y + 50;

    }
}


