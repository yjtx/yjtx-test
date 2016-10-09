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

class GraphicsAllUse extends EntryDisplayObjectContainer {

    public constructor() {
        super(["arcs"]);
    }

    protected initRoot():void {
        this.addToContainer(this.getArc(false));
        this.addToContainer(this.getArc(true));

        this.addToContainer(this.getArch(false));
        this.addToContainer(this.getArch(true));

        this.addToContainer(this.getSector(false, 1));
        this.addToContainer(this.getSector(true, 1));
        this.addToContainer(this.getSector(false, -1));
        this.addToContainer(this.getSector(true, -1));

        this.addToContainer(this.getArcProgress(360, 1));
        this.addToContainer(this.getArcProgress(0, 1));
        this.addToContainer(this.getArcProgress(360, -1));
        this.addToContainer(this.getArcProgress(0, -1));

        this.addToContainer(this.getSectorProgress(360, 1, 50, 50, 50));
        this.addToContainer(this.getSectorProgress(0, 1, 50, 50, 50));
        this.addToContainer(this.getSectorProgress(360, -1, 50, 50, 50));
        this.addToContainer(this.getSectorProgress(0, -1, 50, 50, 50));

        this.addToContainer(this.drawBorderProgress("progressTime_png", 360, 1));
        this.addToContainer(this.drawBorderProgress("progressTime_png", 0, 1));
        this.addToContainer(this.drawBorderProgress("progressTime_png", 0, -1));
        this.addToContainer(this.drawBorderProgress("progressTime_png", 360, -1));

        this.addToContainer(this.drawBorderProgress("progressTime2_png", 360, 1));
        this.addToContainer(this.drawBorderProgress("progressTime2_png", 0, 1));
        this.addToContainer(this.drawBorderProgress("progressTime2_png", 0, -1));
        this.addToContainer(this.drawBorderProgress("progressTime2_png", 360, -1));

        this.addToContainer(this.drawBorderProgress("egret_icon_png", 360, 1));
        this.addToContainer(this.drawBorderProgress("egret_icon_png", 0, 1));
        this.addToContainer(this.drawBorderProgress("egret_icon_png", 0, -1));
        this.addToContainer(this.drawBorderProgress("egret_icon_png", 360, -1));
    }

    private addToContainer(child:egret.DisplayObject):void {
        child.x = Math.floor(this.numChildren % 4) * 120 + 10;
        child.y = Math.floor(this.numChildren / 4) * 120 + 10;

        this.addChild(child);
    }

    private getArc(anticlockwise:boolean):egret.Shape {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xffff00);
        shape.graphics.drawArc(50, 50, 50, 0, 30 * Math.PI / 180, anticlockwise);
        return shape;
    }

    private getArch(anticlockwise:boolean):egret.Shape {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000);
        shape.graphics.drawArc(50, 50, 50, 0, Math.PI / 180 * 60, anticlockwise);
        shape.graphics.endFill();
        return shape;
    }

    private getSector(anticlockwise:boolean, dic:number):egret.Shape {
        var shape:egret.Shape = new egret.Shape();

        this.updateSector(shape, 260 * dic, anticlockwise, 50, 50, 50);
        return shape;
    }

    private updateSector(shape:egret.Shape, angle:number, anticlockwise:boolean, x:number, y:number, r:number):void {
        shape.graphics.clear();

        shape.graphics.beginFill(0x00ffff, 1);
        shape.graphics.moveTo(x, y);
        shape.graphics.lineTo(x + r, y);
        shape.graphics.drawArc(x, y, r, 0, angle * Math.PI / 180, anticlockwise);
        shape.graphics.lineTo(x, y);
        shape.graphics.endFill();
    }

    private getArcProgress(angle:number, dic:number):egret.Shape {
        var x = 50;
        var y = 50;
        var r = 50;
        var shape:egret.Shape = new egret.Shape();

        angle *= dic;
        var i:number = 1;
        egret.startTick(function ff(timeStamp:number):boolean {
            angle += 1 * dic;
            if (i < 0 && angle / dic >= 360) {
                angle = angle % 360;
                i *= -1;
            }
            else if (i > 0 && angle/dic > 360) {
                angle = angle % 360;
                i *= -1;
            }

            changeGraphics(angle);
            
            return true;
        }, this);

        function changeGraphics(angle) {
            shape.graphics.clear();

            shape.graphics.lineStyle(2, 0x0000ff, 1);
            shape.graphics.drawArc(x, y, r, 0, angle * Math.PI / 180, i * dic < 0);
        }
        return shape;
    }

    private getSectorProgress(angle:number, dic:number, x:number, y:number, r:number):egret.Shape {
        var shape:egret.Shape = new egret.Shape();
        var self = this;

        angle *= dic;
        var i:number = 1;
        egret.startTick(function ff(timeStamp:number):boolean {
            angle += 1 * dic;
            if (i < 0 && angle / dic >= 360) {
                angle = angle % 360;
                i *= -1;
            }
            else if (i > 0 && angle/dic > 360) {
                angle = angle % 360;
                i *= -1;
            }

            changeGraphics(angle);
            
            return true;
        }, this);

        function changeGraphics(angle) {
            self.updateSector(shape, angle, i * dic < 0, x, y, r);
        }
        return shape;
    }

    private drawBorderProgress(key, angle:number, dic:number):egret.DisplayObjectContainer {
        var container:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var w = 100;
        var h = 100;
        var r = Math.max(w, h) / 2 * 1.5;
        var bitmap = new egret.Bitmap(RES.getRes(key));
        container.addChild(bitmap);
        bitmap.width = w;
        bitmap.height = h;

        var shape:egret.Shape = this.getSectorProgress(angle, dic, bitmap.width / 2, bitmap.height / 2, r);
        
        bitmap.mask = shape;
        container.addChild(shape);

        return container;

    }
}


