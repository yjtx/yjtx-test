/**
 * Created by yjtx on 15-7-10.
 */
class MaskWithShapeMove extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var self = this;
        var square:egret.Shape = new egret.Shape();
        square.graphics.beginFill(0xff0000, 0.3);
        square.graphics.drawRect(0,0,100,100);
        square.graphics.endFill();
        square.y = 100;
        this.addChild(square);

        //画一个蓝色的圆形
        var circle:egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawCircle(25,25,25);
        circle.graphics.endFill();
        circle.y = 100;
        this.addChild(circle);

        square.mask = circle;

        var change:Function = function() {
            square.mask = circle;
        }
        var tw = egret.Tween.get(circle, {
            loop: true,//设置循环播放
            onChange: change,//设置更新函数
            onChangeObj: this//更新函数作用域
        });
        tw.to({ "y": 125 }, 1000);
        tw.to({ "y": 100 }, 1000);
        tw.call(change, self);
    }
}