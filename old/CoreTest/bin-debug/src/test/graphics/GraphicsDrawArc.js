/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawArc = (function (_super) {
    __extends(GraphicsDrawArc, _super);
    function GraphicsDrawArc() {
        _super.call(this);
    }
    var __egretProto__ = GraphicsDrawArc.prototype;
    __egretProto__.initRoot = function () {
        this.testDrawArc(100, 100, 1);
        this.testDrawArc(100, 200, 10);
        this.testDrawArc(100, 300, 18);
        this.testDrawArc(100, 400, 20);
        this.testDrawArc(300, 100, 25);
    };
    __egretProto__.testDrawArc = function (x, y, size) {
        var g = new egret.Shape();
        g.x = x;
        g.y = y;
        g.graphics.beginFill(0xff0000);
        g.graphics.lineStyle(size, 0xffff00);
        g.graphics.drawArc(0, 0, 100, 0, 0.5, true);
        g.graphics.endFill();
        this.addChild(g);
    };
    return GraphicsDrawArc;
})(EntryDisplayObjectContainer);
GraphicsDrawArc.prototype.__class__ = "GraphicsDrawArc";
