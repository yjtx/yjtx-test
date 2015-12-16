/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawLine = (function (_super) {
    __extends(GraphicsDrawLine, _super);
    function GraphicsDrawLine() {
        _super.call(this);
    }
    var __egretProto__ = GraphicsDrawLine.prototype;
    __egretProto__.initRoot = function () {
        this.testDrawArc();
    };
    __egretProto__.testDrawArc = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.lineStyle(10, 0);
        shape.graphics.lineTo(0, 0);
        shape.graphics.lineTo(100, 100);
        shape.graphics.lineTo(200, 100);
    };
    return GraphicsDrawLine;
})(EntryDisplayObjectContainer);
GraphicsDrawLine.prototype.__class__ = "GraphicsDrawLine";
