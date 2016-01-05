/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawRoundRect = (function (_super) {
    __extends(GraphicsDrawRoundRect, _super);
    function GraphicsDrawRoundRect() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawRoundRect,p=c.prototype;
    p.initRoot = function () {
        this.testDrawArc(100, 100, 100);
    };
    p.testDrawArc = function (x, y, r) {
        var g = new egret.Sprite();
        g.x = x;
        g.y = y;
        g.graphics.beginFill(0xff0000, 0);
        g.graphics.lineStyle(3, 0xffff00, 1);
        g.graphics.drawRoundRect(x, y, 100, 80, 20);
        g.graphics.endFill();
        this.addChild(g);
    };
    return GraphicsDrawRoundRect;
})(EntryDisplayObjectContainer);
egret.registerClass(GraphicsDrawRoundRect,'GraphicsDrawRoundRect');
