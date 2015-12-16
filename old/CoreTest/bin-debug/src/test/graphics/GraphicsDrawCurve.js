/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawCurve = (function (_super) {
    __extends(GraphicsDrawCurve, _super);
    function GraphicsDrawCurve() {
        _super.call(this);
    }
    var __egretProto__ = GraphicsDrawCurve.prototype;
    __egretProto__.initRoot = function () {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(2, 0x00ff00);
        shp.graphics.moveTo(100, 100);
        shp.graphics.curveTo(100, 100, 200, 50);
        shp.graphics.endFill();
        shp.name = "test";
        shp.x = 200;
        shp.y = 200;
        this.addChild(shp);
    };
    return GraphicsDrawCurve;
})(EntryDisplayObjectContainer);
GraphicsDrawCurve.prototype.__class__ = "GraphicsDrawCurve";
