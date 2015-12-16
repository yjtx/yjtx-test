/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsLinesDiff = (function (_super) {
    __extends(GraphicsLinesDiff, _super);
    function GraphicsLinesDiff() {
        _super.call(this);
    }
    var __egretProto__ = GraphicsLinesDiff.prototype;
    __egretProto__.initRoot = function () {
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        var shape;
        shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.lineStyle(10, 0xff0000);
        shape.graphics.moveTo(10, 10);
        shape.graphics.lineTo(10, 100);
        shape.graphics.lineTo(50, 50);
        shape.graphics.lineTo(100, 10);
        shape.graphics.lineTo(140, 130);
        shape.graphics.lineTo(200, 10);
    };
    return GraphicsLinesDiff;
})(EntryDisplayObjectContainer);
GraphicsLinesDiff.prototype.__class__ = "GraphicsLinesDiff";
