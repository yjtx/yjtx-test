/**
 *
 * @author
 *
 */
class OtherWinTest extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.drawIcon();
        this.drawI();
        this.drawS();
    }

    //暂停
    public drawI() {
        var sprite1: egret.Sprite = new egret.Sprite();
        sprite1.touchEnabled = true;
        sprite1.graphics.beginFill(0xFFff00,1);//区别是Sprite拥有graphics对象可用于画图
        sprite1.graphics.drawRect(0,0,50,50);
        sprite1.graphics.endFill();
        sprite1.x = 200;
        sprite1.y = 0;
        var self = this;
        sprite1.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            //暂停功能
            self.timer[0].stop();
            egret.Tween.pauseTweens(self.ss[0]);
        },this);
        this.addChild(sprite1);
    }
    //开始
    public drawS() {
        var sprite2: egret.Sprite = new egret.Sprite();
        sprite2.touchEnabled = true;
        sprite2.graphics.beginFill(0xFF00ff,1);//区别是Sprite拥有graphics对象可用于画图
        sprite2.graphics.drawRect(0,0,50,50);
        sprite2.graphics.endFill();
        sprite2.x = 300;
        sprite2.y = 0;
        var self = this;
        sprite2.addEventListener(egret.TouchEvent.TOUCH_TAP,function() {
            //暂停功能
            self.timer[0].start();
            egret.Tween.resumeTweens(self.ss[0]);
        },this);
        this.addChild(sprite2);
    }

    private ss: Array<any> = new Array();
    //绘制一个容器
    public drawIcon() {
        var sprite: egret.Sprite = new egret.Sprite();
        sprite.graphics.beginFill(0xFF0000,1);//区别是Sprite拥有graphics对象可用于画图
        sprite.graphics.drawRect(0,0,100,100);
        sprite.graphics.endFill();
        sprite.x = 0;//开始位置麻烦改成不要和第一移动过去的一样，不然没有任何效果
        sprite.y = 0;
        this.addChild(sprite);
        this.ss.push(sprite);

        //移动一个位置
        var self = this;

        var timers: egret.Timer = new egret.Timer(5000, this.move.length - 1);
        timers.addEventListener(egret.TimerEvent.TIMER,function(evt) {
            console.log(egret.getTimer());
            self.moveIcon(sprite);
        },this);
        timers.start();
        this.timer.push(timers);
        self.moveIcon(sprite);//必须自己先调用，timer是间隔时间后才会触发
    }

    public moveIcon(sprit:egret.Sprite) {
        var len = this.move.length;//获取垃圾移动的步数
        var s = this.timer[0].currentCount;
        var nextX = this.move[s][0] * 90;
        var nextY = this.move[s][1] * 90;
        egret.Tween.get(sprit,{ loop: false }).to({ x: nextX,y: nextY }, 3000).call(function () {
            console.log(egret.getTimer());
        }, this);
    }

    private move: Array<any> = [[1,1],[2,2],[3,3],[4,4],[5,5]];
    private timer: Array<egret.Timer> = new Array();
}