/**
 * Created by yjtx on 15-7-10.
 */
class MaskProgressCircle extends EntryDisplayObjectContainer {

    public constructor() {
        super();

        this.y = 200;
    }

    headerBgImg;
    progressMask;

    protected initRoot():void {
        var xy = 100;
        var self = this;

        self.headerBgImg = new egret.Shape();
        self.headerBgImg.graphics.beginFill(0x0000ff);
        self.headerBgImg.graphics.drawCircle(0, 0, 68);
        self.headerBgImg.graphics.endFill();
        self.addChild(self.headerBgImg);
        self.headerBgImg.x = xy;
        self.headerBgImg.y = xy;


        self.progressMask = new egret.Shape();
        self.progressMask.graphics.beginFill(0xffffff, 15);
        //self.progressMask.graphics.drawCircle(0,0,68);
        self.progressMask.graphics.endFill();
        self.addChild(self.progressMask);
        self.progressMask.x = xy;
        self.progressMask.y = xy;

        self.drawSector(self.progressMask, 0, 0, 68, 0, 270, 0xff00ff);
        self.headerBgImg.mask = self.progressMask;
    }

    private drawSector(sp:any, x:number = 0, y:number = 0, r:number = 100, startFrom:number = 0, angle:number = 360, color:number = 0xff0000):void {

        sp.graphics.beginFill(color);
        //sp.graphics.lineStyle(1, 0xff0000);
        sp.graphics.moveTo(x, y);
        angle = (Math.abs(angle) > 360) ? 360 : angle;
        var n:number = Math.ceil(Math.abs(angle) / 45);
        var angleA:number = angle / n;
        angleA = angleA * Math.PI / 180;
        startFrom = startFrom * Math.PI / 180;
        sp.graphics.lineTo(x + r * Math.cos(startFrom), y + r * Math.sin(startFrom));
        for (var i = 1; i <= n; i++) {
            startFrom += angleA;
            var angleMid = startFrom - angleA / 2;
            var bx = x + r / Math.cos(angleA / 2) * Math.cos(angleMid);
            var by = y + r / Math.cos(angleA / 2) * Math.sin(angleMid);
            var cx = x + r * Math.cos(startFrom);
            var cy = y + r * Math.sin(startFrom);
            sp.graphics.curveTo(bx, by, cx, cy);
        }
        if (angle != 360) {
            sp.graphics.lineTo(x, y);
        }
        sp.graphics.endFill();// if you want a sector without filling color , please remove this line.
    }
}

