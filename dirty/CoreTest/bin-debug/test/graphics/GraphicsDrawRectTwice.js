/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawRectTwice = (function (_super) {
    __extends(GraphicsDrawRectTwice, _super);
    function GraphicsDrawRectTwice() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawRectTwice,p=c.prototype;
    p.initRoot = function () {
        var sp = new egret.Sprite();
        this.addChild(sp);
        sp.graphics.lineStyle(1);
        sp.graphics.drawRect(50, 50, 100, 100);
        sp.graphics.drawRect(150, 50, 100, 100);
    };
    return GraphicsDrawRectTwice;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsDrawRectTwice,'GraphicsDrawRectTwice');
