/**
 * Created by yjtx on 15-6-23.
 */
var DrawMCAndClick = (function (_super) {
    __extends(DrawMCAndClick, _super);
    function DrawMCAndClick() {
        _super.call(this, ["mcs"]);
        this.jo = new egret.Sprite();
        this.pttarget = new egret.Point();
    }
    var d = __define,c=DrawMCAndClick,p=c.prototype;
    p.initRoot = function () {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var data = RES.getRes("man_json");
        var txtr = RES.getRes("man_png");
        var mcdf = new egret.MovieClipDataFactory(data, txtr);
        this.mc = new egret.MovieClip(mcdf.generateMovieClipData("man"));
        this.mc.x = stageW / 2;
        this.mc.y = stageH / 2;
        this.addChild(this.mc);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.showjo, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.closejo, this);
        this.mc.addEventListener(egret.MovieClipEvent.COMPLETE, this.onLoopComplete, this);
        this.mc.addEventListener(egret.MovieClipEvent.FRAME_LABEL, this.enterframe, this);
        var jo = new egret.Sprite();
        jo.graphics.beginFill(0xffffff);
        jo.graphics.drawCircle(0, 0, 100);
        jo.graphics.endFill();
        jo.alpha = 0;
        jo.touchEnabled = true;
        jo.x = 100;
        jo.y = stageH * 2 / 3;
        this.addChild(jo);
        jo.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.Move, this);
        jo.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.Move, this);
        jo.addEventListener(egret.TouchEvent.TOUCH_END, this.releaseout, this);
        jo.addEventListener(egret.TouchEvent.TOUCH_ROLL_OUT, this.show, this);
        jo.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.releaseout, this);
        var up = new egret.Shape();
        up.name = "walk_up";
        up.graphics.beginFill(0x00ffff);
        up.graphics.drawRect(0, -30, 30, 60);
        up.anchorOffsetY = 60;
        up.anchorOffsetX = 15;
        up.graphics.endFill();
        up.alpha = 1;
        jo.addChild(up);
        up.touchEnabled = true;
        var down = new egret.Shape();
        down.name = "walk_down";
        down.graphics.beginFill(0x00ffff);
        down.graphics.drawRect(0, 30, 30, 60);
        down.anchorOffsetX = 15;
        down.anchorOffsetY = 0;
        down.graphics.endFill();
        down.alpha = 1;
        jo.addChild(down);
        down.touchEnabled = true;
        var left = new egret.Shape();
        left.name = "walk_left";
        left.graphics.beginFill(0x00ffff);
        left.graphics.drawRect(-30, 0, 60, 30);
        left.graphics.endFill();
        left.anchorOffsetX = 60;
        left.anchorOffsetY = 15;
        left.alpha = 1;
        jo.addChild(left);
        left.touchEnabled = true;
        var right = new egret.Shape();
        right.name = "walk_right";
        right.graphics.beginFill(0x00ffff);
        right.graphics.drawRect(30, 0, 60, 30);
        right.graphics.endFill();
        right.anchorOffsetX = 0;
        right.anchorOffsetY = 15;
        right.alpha = 1;
        jo.addChild(right);
        right.touchEnabled = true;
        this.jo = jo;
        this.speed = 10;
    };
    p.manMove = function () {
        if (Math.abs(this.mc.x - this.pttarget.x) > 10) {
            if (this.mc.x < this.pttarget.x) {
                this.mc.gotoAndPlay("walk_right", 1);
            }
            else if (this.mc.x > this.pttarget.x) {
                this.mc.gotoAndPlay("walk_left", 1);
            }
        }
        else if (Math.abs(this.mc.y - this.pttarget.y) > 10) {
            if (this.mc.y > this.pttarget.y) {
                this.mc.gotoAndPlay("walk_up", 1);
            }
            else if (this.mc.y < this.pttarget.y) {
                this.mc.gotoAndPlay("walk_down", 1);
            }
        }
    };
    p.closejo = function (e) {
        console.log("closejo");
        //var tw:egret.Tween = egret.Tween.get(this.jo);
        //tw.to({ alpha: 0 },50);
        this.jo.alpha = 0;
        this.jo.touchChildren = false;
        this.jo.touchEnabled = false;
    };
    p.showjo = function (e) {
        this.jo.x = e.localX;
        this.jo.y = e.localY;
        this.jo.alpha = 1;
        this.jo.touchChildren = true;
        this.jo.touchEnabled = true;
    };
    p.change = function () {
        this.mc.stop();
        this.mc.gotoAndPlay("ffff");
    };
    p.show = function (e) {
        console.log("ff", e.type, e.target);
    };
    p.touchend = function (e) {
        console.log("touchend");
        for (var i = 0; i < this.jo.numChildren; i++) {
            this.jo.getChildAt(i).alpha = 1;
        }
        this.mc.gotoAndStop(this.mc.currentLabel);
    };
    p.releaseout = function (e) {
        console.log("releaseout");
        this.mc.gotoAndStop(this.mc.currentLabel);
    };
    p.onLoopComplete = function (e) {
        //this.mc.gotoAndStop(this.mc.currentLabel);
        //this.manMove();
    };
    p.enterframe = function (e) {
        switch (e.frameLabel) {
            case "@walk_right":
                this.mc.x = this.mc.x + this.speed;
                break;
            case "@walk_left":
                this.mc.x = this.mc.x - this.speed;
                break;
            case "@walk_up":
                this.mc.y = this.mc.y - this.speed;
                break;
            case "@walk_down":
                this.mc.y = this.mc.y + this.speed;
                break;
        }
    };
    p.Move = function (e) {
        console.log("move");
        for (var i = 0; i < this.jo.numChildren; i++) {
            this.jo.getChildAt(i).alpha = 1;
        }
        switch (e.target.name) {
            case "walk_right":
            case "walk_left":
            case "walk_up":
            case "walk_down":
                e.target.alpha = 0.4;
                if (this.mc.currentLabel == e.target.name && this.mc.isPlaying != false) {
                    return;
                }
                this.mc.gotoAndStop(this.mc.currentLabel);
                this.mc.gotoAndPlay(e.target.name, -1);
                break;
            default:
                this.mc.gotoAndStop(this.mc.currentLabel);
                return;
        }
    };
    return DrawMCAndClick;
})(EntryDisplayObjectContainer);
egret.registerClass(DrawMCAndClick,'DrawMCAndClick');
