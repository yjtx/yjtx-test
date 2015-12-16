/**
 * Created by yjtx on 15-6-23.
 */
var EventTouchCapture = (function (_super) {
    __extends(EventTouchCapture, _super);
    function EventTouchCapture() {
        _super.call(this, ["bitmap"]);
    }
    var __egretProto__ = EventTouchCapture.prototype;
    __egretProto__.initRoot = function () {
        var scroll = new egret.ScrollView();
        this.addChild(scroll);
        scroll.width = 300;
        scroll.height = 100;
        var texture = RES.getRes("img_scale9_png");
        var icon = new egret.Bitmap();
        icon.texture = texture;
        icon.width = 300;
        icon.height = 300;
        scroll.setContent(icon);
        icon.touchEnabled = true;
        this.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        icon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        icon.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
    };
    __egretProto__.onTrueHandler = function (e) {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " ======= " + e.type + " ======= useCapture true " + this["useCapture"]);
    };
    __egretProto__.onFalseHandler = function (e) {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " =======  " + e.type + " ======= useCapture false " + +this["useCapture"]);
    };
    return EventTouchCapture;
})(EntryDisplayObjectContainer);
EventTouchCapture.prototype.__class__ = "EventTouchCapture";
