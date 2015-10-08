/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsSomeCircles = (function (_super) {
    __extends(GraphicsSomeCircles, _super);
    function GraphicsSomeCircles() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = GraphicsSomeCircles.prototype;
    __egretProto__.init = function () {
        this.testDrawArc();
    };
    __egretProto__.testDrawArc = function () {
        var drawSp = new egret.Sprite();
        drawSp.graphics.beginFill(0xFFFFFF, 0.5);
        this.addChild(drawSp);
        var emptySP = new egret.Sprite();
        emptySP.graphics.beginFill(0xFFFFFF, 0);
        emptySP.graphics.drawRect(0, 0, this.stage.stageWidth, this.stage.stageHeight);
        emptySP.graphics.endFill();
        this.addChild(emptySP);
        emptySP.touchEnabled = true;
        emptySP.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (e) {
            //drawSp.graphics.beginFill(0xFFFFFF,0.5);
            drawSp.graphics.drawCircle(e.localX, e.localY, 50);
            drawSp.graphics.endFill();
        }, this);
        emptySP.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (e) {
            //drawSp.graphics.beginFill(0xFFFFFF,0.5);
            drawSp.graphics.drawCircle(e.localX, e.localY, 50);
            drawSp.graphics.endFill();
        }, this);
        emptySP.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            //drawSp.graphics.clear();
        }, this);
    };
    return GraphicsSomeCircles;
})(egret.DisplayObjectContainer);
GraphicsSomeCircles.prototype.__class__ = "GraphicsSomeCircles";
