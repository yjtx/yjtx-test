/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsLineStyle = (function (_super) {
    __extends(GraphicsLineStyle, _super);
    function GraphicsLineStyle() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = GraphicsLineStyle.prototype;
    __egretProto__.init = function () {
        this.testDrawArc();
    };
    __egretProto__.testDrawArc = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        var angle = 60;
        egret.setInterval(function () {
            changeGraphics(angle);
            angle += 10;
            angle = angle % 360;
        }, this, 3000);
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.lineStyle(50, 0xFFFFFF, 1, true, "", "", "round");
            shape.graphics.moveTo(200, 200);
            shape.graphics.lineTo(100 * Math.sin(angle) + 200, 100 * Math.cos(angle) + 200);
            shape.graphics.endFill();
        }
    };
    return GraphicsLineStyle;
})(egret.DisplayObjectContainer);
GraphicsLineStyle.prototype.__class__ = "GraphicsLineStyle";
