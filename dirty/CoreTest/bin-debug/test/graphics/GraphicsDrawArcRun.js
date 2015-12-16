/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawArcRun = (function (_super) {
    __extends(GraphicsDrawArcRun, _super);
    function GraphicsDrawArcRun() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawArcRun,p=c.prototype;
    p.initRoot = function () {
        this.testDrawArc();
    };
    p.testDrawArc = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        var angle = 60;
        egret.setInterval(function () {
            changeGraphics(angle);
            angle += 10;
            angle = angle % 360;
        }, this, 16);
        function changeGraphics(angle) {
            shape.graphics.clear();
            //shape.graphics.lineStyle(2, 0x0000ff, 1);
            shape.graphics.beginFill(0x00ffff, 1);
            shape.graphics.moveTo(200, 200);
            shape.graphics.lineTo(300, 200);
            shape.graphics.drawArc(200, 200, 100, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(200, 200);
            shape.graphics.endFill();
        }
    };
    return GraphicsDrawArcRun;
})(EntryDisplayObjectContainer);
egret.registerClass(GraphicsDrawArcRun,'GraphicsDrawArcRun');
