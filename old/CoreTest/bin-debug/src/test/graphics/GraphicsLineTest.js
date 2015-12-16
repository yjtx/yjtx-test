/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsLineTest = (function (_super) {
    __extends(GraphicsLineTest, _super);
    function GraphicsLineTest() {
        _super.call(this);
    }
    var __egretProto__ = GraphicsLineTest.prototype;
    __egretProto__.initRoot = function () {
        this.createGameScene();
    };
    __egretProto__.createGameScene = function () {
        var wid = document.documentElement.clientWidth || document.body.clientWidth;
        var hei = document.documentElement.clientHeight || document.body.clientHeight;
        this.touchEnabled = true;
        this.bg_container = new egret.Sprite();
        this.addChild(this.bg_container);
        this.bg_container.graphics.beginFill(0xFFFFFF, 1);
        this.bg_container.graphics.drawRect(0, 0, wid, hei);
        this.bg_container.graphics.endFill();
        this.mask_container = new egret.Sprite();
        this.addChild(this.mask_container);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventHandler, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventHandler, this);
    };
    __egretProto__.onTouchEventHandler = function (e) {
        switch (e.type) {
            case "touchBegin":
                this.mask_container.graphics.lineStyle(10, 0x000000, 1, false);
                this.mask_container.graphics.moveTo(e.stageX, e.stageY);
                break;
            case "touchMove":
                this.mask_container.graphics.lineTo(e.stageX, e.stageY);
                break;
            case "touchEnd":
                break;
        }
    };
    return GraphicsLineTest;
})(EntryDisplayObjectContainer);
GraphicsLineTest.prototype.__class__ = "GraphicsLineTest";
