/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsGuaguale extends EntryDisplayObjectContainer {

    public constructor() {
        super();

        this.y = 300;
    }

    bg_container;
    pen_container;

    protected initRoot():void {
        var w = 300;
        var h = 100;

        this.bg_container = new egret.Shape();
        this.bg_container.graphics.beginFill(0xcccccc,1);
        this.bg_container.graphics.drawRect(0,0, w, h);
        this.bg_container.graphics.endFill();
        this.addChild(this.bg_container);


        var container:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var mask_container1 = new egret.Sprite();
        mask_container1.graphics.beginFill(0xffffff, 1);
        mask_container1.graphics.drawRect(0, 0, w, h);
        mask_container1.graphics.endFill();
        container.addChild(mask_container1);

        var code: egret.TextField = new egret.TextField();
        code.text = Math.floor(Math.random() * 1000000).toString();
        code.size = h / 2;
        code.width = w;
        code.height = h;
        code.textColor = 0xFF0000;
        code.textAlign = egret.HorizontalAlign.CENTER;
        code.verticalAlign = egret.VerticalAlign.MIDDLE;
        container.addChild(code);

        this.addChild(container);

        this.pen_container = new egret.Sprite();
        this.addChild(this.pen_container);
        container.mask = this.pen_container;

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchEventHandler,this);
    }

    private onTouchEventHandler(e: egret.TouchEvent): void {
        switch(e.type) {
            case "touchBegin":
                this.pen_container.graphics.lineStyle(20,0x000000,1);
                this.pen_container.graphics.moveTo(e.localX,e.localY);

                this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchEventHandler,this);
                this.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEventHandler,this);
                break;
            case "touchMove":
                this.pen_container.graphics.lineTo(e.localX,e.localY);
                break;
            case "touchEnd":
                this.pen_container.graphics.endFill();
                this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchEventHandler,this);
                this.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEventHandler,this);
                break;
        }
    }
}

