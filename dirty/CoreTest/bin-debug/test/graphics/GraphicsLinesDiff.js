/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsLinesDiff = (function (_super) {
    __extends(GraphicsLinesDiff, _super);
    function GraphicsLinesDiff() {
        _super.call(this);
    }
    var d = __define,c=GraphicsLinesDiff,p=c.prototype;
    p.initRoot = function () {
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.bg1 = new egret.Shape();
        this.addChild(this.bg1);
        this.bg1.graphics.lineStyle(10, 0x000000);
        this.bg2 = new egret.Shape();
        this.bg2.y = 300;
        this.addChild(this.bg2);
        this.bg2.graphics.lineStyle(10, 0x000000);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventHandler, this);
    };
    p.onTouchEventHandler = function (e) {
        switch (e.type) {
            case "touchBegin":
                this.bg1.graphics.moveTo(e.stageX, e.stageY);
                this.lastX = e.stageX;
                this.lastY = e.stageY;
                break;
            case "touchMove":
                this.bg1.graphics.lineTo(e.stageX, e.stageY);
                this.bg2.graphics.moveTo(this.lastX, this.lastY);
                this.lastX = e.stageX;
                this.lastY = e.stageY;
                this.bg2.graphics.lineTo(this.lastX, this.lastY);
                break;
            case "touchEnd":
                break;
        }
    };
    return GraphicsLinesDiff;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsLinesDiff,'GraphicsLinesDiff');
