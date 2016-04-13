/**
 * Created by yjtx on 15-7-10.
 */
var MaskWithShapeMove = (function (_super) {
    __extends(MaskWithShapeMove, _super);
    function MaskWithShapeMove() {
        _super.call(this);
    }
    var d = __define,c=MaskWithShapeMove,p=c.prototype;
    p.initRoot = function () {
        var self = this;
        var square = new egret.Shape();
        square.graphics.beginFill(0xff0000, 0.3);
        square.graphics.drawRect(0, 0, 100, 100);
        square.graphics.endFill();
        square.y = 100;
        this.addChild(square);
        //画一个蓝色的圆形
        var circle = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        circle.y = 100;
        this.addChild(circle);
        square.mask = circle;
        var change = function () {
            square.mask = circle;
        };
        var tw = egret.Tween.get(circle, {
            loop: true,
            onChange: change,
            onChangeObj: this //更新函数作用域
        });
        tw.to({ "y": 125 }, 1000);
        tw.to({ "y": 100 }, 1000);
        tw.call(change, self);
    };
    return MaskWithShapeMove;
}(EntryDisplayObjectContainer));
egret.registerClass(MaskWithShapeMove,'MaskWithShapeMove');
