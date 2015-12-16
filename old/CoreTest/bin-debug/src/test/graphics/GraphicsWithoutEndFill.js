/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsWithoutEndFill = (function (_super) {
    __extends(GraphicsWithoutEndFill, _super);
    function GraphicsWithoutEndFill() {
        _super.call(this);
    }
    var __egretProto__ = GraphicsWithoutEndFill.prototype;
    __egretProto__.initRoot = function () {
        this.testDrawArc();
    };
    __egretProto__.testDrawArc = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.graphics.clear();
        shape.graphics.lineStyle(2, 0xFF00FF, 1, true, "", "", "round");
        shape.graphics.moveTo(200, 20);
        shape.graphics.lineTo(300, 20);
        shape.graphics.drawArc(200, 20, 100, 0, 180 * Math.PI / 180, false);
        shape.graphics.lineTo(200, 20);
        //shape.graphics.endFill();
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.y = 230;
        shape.graphics.clear();
        shape.graphics.beginFill(0xFF0000, 1);
        shape.graphics.moveTo(200, 20);
        shape.graphics.lineTo(300, 20);
        shape.graphics.drawArc(200, 20, 100, 0, 180 * Math.PI / 180, false);
        shape.graphics.lineTo(200, 20);
        //shape.graphics.endFill();
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.y = 460;
        shape.graphics.clear();
        shape.graphics.beginFill(0xFF0000, 1);
        shape.graphics.lineStyle(2, 0xFF00FF, 1, true, "", "", "round");
        shape.graphics.moveTo(200, 20);
        shape.graphics.lineTo(300, 20);
        shape.graphics.drawArc(200, 20, 100, 0, 180 * Math.PI / 180, false);
        shape.graphics.lineTo(200, 20);
        //shape.graphics.endFill();
    };
    return GraphicsWithoutEndFill;
})(EntryDisplayObjectContainer);
GraphicsWithoutEndFill.prototype.__class__ = "GraphicsWithoutEndFill";
