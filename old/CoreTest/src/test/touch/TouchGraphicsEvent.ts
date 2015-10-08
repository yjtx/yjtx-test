/**
 * Created by yjtx on 15-7-10.
 */
class TouchGraphicsEvent extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testSimpleMaskDO();
    }

    private testSimpleMaskDO():void {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 10;
        shape.y = 10;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log("shape1")
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log("shape1")
        }, this);

        shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 210;
        shape.y = 10;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log("shape2")
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log("shape2")
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
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log("shape3")
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log("shape3")
        }, this);

        shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawCircle(50, 50, 50);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 10;
        shape.y = 210;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log("shape4")
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log("shape4")
        }, this);

        shape = new egret.Shape();
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.drawCircle(50, 50, 50);
        shape.graphics.endFill();
        this.addChild(shape);
        shape.x = 210;
        shape.y = 210;
        shape.touchEnabled = true;
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log("shape5")
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log("shape5")
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
        shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            console.log("shape6")
        }, this);
        shape.addEventListener(egret.TouchEvent.TOUCH_MOVE, function () {
            console.log("shape6")
        }, this);
    }


}