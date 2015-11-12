/**
 * Created by yjtx on 15-6-23.
 */

class DrawClickShowSprites extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        this.testNormal();
    }

    private speed: number;
    private jo: egret.Sprite = new egret.Sprite();
    private testNormal(): void {
        var stageW: number = this.stage.stageWidth;
        var stageH: number = this.stage.stageHeight;

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.showjo,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.closejo,this);

        var jo: egret.Sprite = new egret.Sprite();
        jo.graphics.beginFill(0xffffff);
        jo.graphics.drawCircle(0,0,100);
        jo.graphics.endFill();
        jo.alpha = 0;
        jo.touchEnabled = true;
        jo.x = 100;
        jo.y = stageH * 2 / 3;
        this.addChild(jo);
        jo.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.Move,this);
        jo.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.Move,this);

        var up: egret.Shape = new egret.Shape();
        up.name = "walk_up";
        up.graphics.beginFill(0x00ffff);
        up.graphics.drawRect(0,-30,30,60);
        up.anchorOffsetY = 60;
        up.anchorOffsetX = 15;
        up.graphics.endFill();
        up.alpha = 1;
        jo.addChild(up);

        up.touchEnabled = true;

        var down: egret.Shape = new egret.Shape();
        down.name = "walk_down";
        down.graphics.beginFill(0x00ffff);
        down.graphics.drawRect(0,30,30,60);
        down.anchorOffsetX = 15;
        down.anchorOffsetY = 0;
        down.graphics.endFill();
        down.alpha = 1;
        jo.addChild(down);

        down.touchEnabled = true;

        var left: egret.Shape = new egret.Shape();
        left.name = "walk_left";
        left.graphics.beginFill(0x00ffff);
        left.graphics.drawRect(-30,0,60,30);
        left.graphics.endFill();
        left.anchorOffsetX = 60;
        left.anchorOffsetY = 15;
        left.alpha = 1;
        jo.addChild(left);

        left.touchEnabled = true;

        var right: egret.Shape = new egret.Shape();
        right.name = "walk_right";
        right.graphics.beginFill(0x00ffff);
        right.graphics.drawRect(30,0,60,30);
        right.graphics.endFill();
        right.anchorOffsetX = 0;
        right.anchorOffsetY = 15;
        right.alpha = 1;
        jo.addChild(right);

        right.touchEnabled = true;
        this.jo = jo;
        this.speed = 10;
    }

    private closejo(e:egret.TouchEvent) {
        console.log("closejo")

        this.jo.alpha = 0;
        this.jo.touchChildren = false;
        this.jo.touchEnabled = false;

    }
    private showjo(e:egret.TouchEvent) {
        this.jo.x = e.localX;
        this.jo.y = e.localY;
        this.jo.alpha = 1;
        this.jo.touchChildren = true;
        this.jo.touchEnabled = true;
    }

    private Move(e: egret.TouchEvent) {
        console.log("move")
        for(var i: number = 0;i < this.jo.numChildren; i ++) {
            this.jo.getChildAt(i).alpha = 1;
        }


    }
}

