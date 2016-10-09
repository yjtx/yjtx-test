/**
 * Created by yjtx on 15-11-12.
 */
class ScrollerExmlOut extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

        this.skinName = "resource/test_skins/ScrollerExmlOut.exml";
    }

    protected initRoot():void {

        
        this.init(this);
    }

    protected init(ui):void {
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
    }

    private onItemChoose(e:eui.ItemTapEvent):void {
        console.log(111);
    }

    private onTrueHandler(e:egret.TouchEvent):void {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " ======= " + e.type + " ======= useCapture true " + this["useCapture"]);
    }

    private onFalseHandler(e:egret.TouchEvent):void {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " =======  " + e.type + " ======= useCapture false " +  + this["useCapture"]);
    }
}
