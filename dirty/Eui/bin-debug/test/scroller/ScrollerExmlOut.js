/**
 * Created by yjtx on 15-11-12.
 */
var ScrollerExmlOut = (function (_super) {
    __extends(ScrollerExmlOut, _super);
    function ScrollerExmlOut() {
        _super.call(this, ["preload"]);
        this.skinName = "resource/test_skins/ScrollerExmlOut.exml";
    }
    var d = __define,c=ScrollerExmlOut,p=c.prototype;
    p.initRoot = function () {
        this.init(this);
    };
    p.init = function (ui) {
        ui.list.allowMultipleSelection = false;
        ui.list.useVirtualLayout = false;
        ui.list.touchEnabled = true;
        this.touchEnabled = true;
        ui.list.selectedIndex = 1;
        ui.list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemChoose, this);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);
    };
    p.onItemChoose = function (e) {
        console.log(111);
    };
    p.onTrueHandler = function (e) {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " ======= " + e.type + " ======= useCapture true " + this["useCapture"]);
    };
    p.onFalseHandler = function (e) {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " =======  " + e.type + " ======= useCapture false " + +this["useCapture"]);
    };
    return ScrollerExmlOut;
}(EntryEuiDocument));
egret.registerClass(ScrollerExmlOut,'ScrollerExmlOut');
