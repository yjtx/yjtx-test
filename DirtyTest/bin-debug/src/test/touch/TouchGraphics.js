/**
 * Created by yjtx on 15-7-10.
 */
var TouchGraphics = (function (_super) {
    __extends(TouchGraphics, _super);
    function TouchGraphics() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TouchGraphics.prototype;
    __egretProto__.init = function () {
        this.testSimpleMaskDO();
    };
    __egretProto__.testSimpleMaskDO = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 10;
        shape.y = 10;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
        shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 210;
        shape.y = 10;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
        shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.beginFill(0xff0000, 0);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 410;
        shape.y = 10;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
        shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawCircle(50, 50, 50);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 10;
        shape.y = 210;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
        shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.drawCircle(50, 50, 50);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 210;
        shape.y = 210;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
        shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 0);
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.drawCircle(50, 50, 50);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 410;
        shape.y = 210;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
    };
    return TouchGraphics;
})(egret.DisplayObjectContainer);
TouchGraphics.prototype.__class__ = "TouchGraphics";
egret.registerClass(TouchGraphics,"TouchGraphics");
