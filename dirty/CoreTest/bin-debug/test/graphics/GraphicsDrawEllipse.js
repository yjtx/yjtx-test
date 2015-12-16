/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawEllipse = (function (_super) {
    __extends(GraphicsDrawEllipse, _super);
    function GraphicsDrawEllipse() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawEllipse,p=c.prototype;
    p.initRoot = function () {
        this.testDrawArc(100, 100, 100);
    };
    p.testDrawArc = function (x, y, r) {
        var g = new egret.Sprite();
        g.x = x;
        g.y = y;
        g.graphics.beginFill(0xff0000, 0);
        g.graphics.lineStyle(3, 0xffff00, 1);
        g.graphics.drawEllipse(x, y, r, r * 0.8);
        g.graphics.endFill();
        this.addChild(g);
    };
    return GraphicsDrawEllipse;
})(EntryDisplayObjectContainer);
egret.registerClass(GraphicsDrawEllipse,'GraphicsDrawEllipse');
