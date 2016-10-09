/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsLineDDD = (function (_super) {
    __extends(GraphicsLineDDD, _super);
    function GraphicsLineDDD() {
        _super.call(this);
        this.once(egret.Event.ADDED_TO_STAGE, this.initRoot, this);
    }
    var d = __define,c=GraphicsLineDDD,p=c.prototype;
    p.initRoot = function () {
        this.line = new egret.Shape();
        this.line.graphics.lineStyle(1, 0);
        //        this.line.graphics.beginFill(0x2FB108);
        //        this.line.graphics.moveTo(100, 100);
        //        this.line.graphics.lineTo(500, 500);
        //        this.line.graphics.endFill();
        this.addChild(this.line);
        //        this.auhtBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAuth, this);
        //        this.lianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLian, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        //        MessageCenter.getInstance().addListener(DrawLineConst.BEGIN_DRAW,this.beginDraw,this);
        //        MessageCenter.getInstance().addListener(DrawLineConst.END_DRAW,this.endDraw,this);
    };
    p.onBegin = function (e) {
        //        this.line.graphics.clear();
        console.log("beggin" + e.localX + "," + e.localY);
        this.line.graphics.moveTo(e.localX, e.localY);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    p.onMove = function (e) {
        console.log("moveee" + e.localX + "," + e.localY);
        this.line.graphics.lineTo(e.localX, e.localY);
    };
    p.onEnd = function (e) {
        console.log("end" + e.localX + "," + e.localY);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
    };
    return GraphicsLineDDD;
}(egret.DisplayObjectContainer));
egret.registerClass(GraphicsLineDDD,'GraphicsLineDDD');
