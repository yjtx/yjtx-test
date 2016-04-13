/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsDrawLineClick = (function (_super) {
    __extends(GraphicsDrawLineClick, _super);
    function GraphicsDrawLineClick() {
        _super.call(this);
        this.lastX = 100;
        this.lastY = 100;
    }
    var d = __define,c=GraphicsDrawLineClick,p=c.prototype;
    p.initRoot = function () {
        this.testDrawArc();
    };
    p.testDrawArc = function () {
        this.shape = new egret.Shape();
        this.addChild(this.shape);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickHandler, this);
    };
    p.onClickHandler = function (e) {
        this.shape.graphics.lineStyle(10, 0xff0000);
        this.shape.graphics.moveTo(this.lastX, this.lastY);
        this.lastX = e.stageX;
        this.lastY = e.stageY;
        egret.log(this.lastX + " " + this.lastY);
        this.shape.graphics.lineTo(this.lastX, this.lastY);
        this.shape.graphics.endFill();
    };
    return GraphicsDrawLineClick;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsDrawLineClick,'GraphicsDrawLineClick');
