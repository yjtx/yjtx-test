/**
 * Created by yjtx on 15-7-10.
 */
var TouchContainer = (function (_super) {
    __extends(TouchContainer, _super);
    function TouchContainer() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TouchContainer.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testSimpleMaskDO, this, "preload", this.stage.textureScaleFactor);
    };
    __egretProto__.testSimpleMaskDO = function () {
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = false;
        var c = new egret.DisplayObjectContainer();
        this.addChild(c);
        c.touchChildren = true;
        c.width = 400;
        c.height = 400;
        c.addChild(icon);
        c.touchEnabled = true;
        c.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = false;
        icon.pixelHitTest = true;
        var c = new egret.DisplayObjectContainer();
        this.addChild(c);
        c.touchChildren = true;
        c.width = 400;
        c.height = 400;
        c.y = 450;
        c.addChild(icon);
        c.touchEnabled = true;
        c.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("TOUCH_TAP");
        }, this);
    };
    return TouchContainer;
})(egret.DisplayObjectContainer);
TouchContainer.prototype.__class__ = "TouchContainer";
egret.registerClass(TouchContainer,"TouchContainer");
