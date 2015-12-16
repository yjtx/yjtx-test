/**
 * Created by yjtx on 15-6-23.
 */

class EventTouchCapture extends EntryDisplayObjectContainer {
    public constructor() {
        super(["bitmap"]);
    }

    protected initRoot():void {
        var scroll:egret.ScrollView = new egret.ScrollView();
        this.addChild(scroll);
        scroll.width = 300;
        scroll.height = 100;

        var texture:egret.Texture = RES.getRes("img_scale9_png");
        var icon:egret.Bitmap = new egret.Bitmap();
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
    }

    private onTrueHandler(e:egret.TouchEvent):void {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " ======= " + e.type + " ======= useCapture true " + this["useCapture"]);
    }

    private onFalseHandler(e:egret.TouchEvent):void {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " =======  " + e.type + " ======= useCapture false " +  + this["useCapture"]);
    }
}
