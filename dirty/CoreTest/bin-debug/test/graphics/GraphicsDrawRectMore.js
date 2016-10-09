/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawRectMore = (function (_super) {
    __extends(GraphicsDrawRectMore, _super);
    function GraphicsDrawRectMore() {
        _super.call(this);
    }
    var d = __define,c=GraphicsDrawRectMore,p=c.prototype;
    p.initRoot = function () {
        var sp = new egret.Shape();
        this.addChild(sp);
        var g = sp.graphics;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 10; j++) {
                g.beginFill(0xFFFFFF);
                g.drawRect(i * 13, j * 10, 10, 2);
                g.endFill();
            }
        }
        this.addChild(sp);
    };
    return GraphicsDrawRectMore;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsDrawRectMore,'GraphicsDrawRectMore');
