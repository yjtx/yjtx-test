/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawLine = (function (_super) {
    __extends(GraphicsDrawLine, _super);
    function GraphicsDrawLine() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawLine,p=c.prototype;
    p.initRoot = function () {
        this.testDrawArc();
    };
    p.testDrawArc = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.lineStyle(2, 0);
        shape.graphics.lineTo(0, 0);
        shape.graphics.lineTo(100, 100);
        shape.graphics.lineTo(200, 100);
        shape.x = 200;
        shape.y = 200;
        egret.Tween.get(shape, { loop: true }).to({ rotation: 360 }, 4000);
    };
    return GraphicsDrawLine;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsDrawLine,'GraphicsDrawLine');
