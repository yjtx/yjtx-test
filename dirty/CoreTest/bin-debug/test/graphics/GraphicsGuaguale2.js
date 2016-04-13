/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsGuaguale2 = (function (_super) {
    __extends(GraphicsGuaguale2, _super);
    function GraphicsGuaguale2() {
        _super.call(this);
        this.y = 300;
    }
    var d = __define,c=GraphicsGuaguale2,p=c.prototype;
    p.initRoot = function () {
        var w = 300;
        var h = 100;
        this.bg_container = new egret.Shape();
        this.bg_container.graphics.beginFill(0x0000ff, 1);
        this.bg_container.graphics.drawRect(0, 0, w, h);
        this.bg_container.graphics.endFill();
        this.addChild(this.bg_container);
        this.container = new egret.DisplayObjectContainer();
        var codeBg = new egret.Sprite();
        codeBg.graphics.beginFill(0xffff00, 1);
        codeBg.graphics.drawRect(0, 0, w, h);
        codeBg.graphics.endFill();
        this.container.addChild(codeBg);
        var code = new egret.TextField();
        code.text = Math.floor(Math.random() * 1000000).toString();
        code.size = h / 2;
        code.width = w;
        code.height = h;
        code.textColor = 0xFF0000;
        code.textAlign = egret.HorizontalAlign.CENTER;
        code.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.container.addChild(code);
        this.addChild(this.container);
        var tm = new egret.DisplayObjectContainer();
        this.addChild(tm);
        this.maskContainer = new egret.DisplayObjectContainer();
        this.mask_bg = new egret.Bitmap();
        this.maskContainer.addChild(this.mask_bg);
        this.pen_container = new egret.Shape();
        this.maskContainer.addChild(this.pen_container);
        tm.addChild(this.maskContainer);
        this.container.mask = tm;
        this.bg_container.touchEnabled = true;
        this.bg_container.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchEventHandler, this);
        this.bg_texture = new egret.RenderTexture();
        this.tempContainer = new egret.DisplayObjectContainer();
        this.addChild(this.tempContainer);
        this.tempBitmap = new egret.Bitmap();
        this.tempContainer.addChild(this.tempBitmap);
        this.tempContainer.y = 300;
    };
    p.onTouchEventHandler = function (e) {
        switch (e.type) {
            case "touchBegin":
                this.pen_container.graphics.clear();
                this.pen_container.graphics.lineStyle(20, 0xff0000, 1);
                this.pen_container.graphics.moveTo(e.localX, e.localY);
                this.bg_container.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventHandler, this);
                this.bg_container.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventHandler, this);
                break;
            case "touchMove":
                this.pen_container.graphics.lineTo(e.localX, e.localY);
                break;
            case "touchEnd":
                this.pen_container.graphics.endFill();
                this.bg_texture = new egret.RenderTexture();
                this.bg_texture.drawToTexture(this.maskContainer, new egret.Rectangle(0, 0, 300, 100));
                this.mask_bg.texture = null;
                this.tempBitmap.texture = null;
                this.mask_bg.texture = this.bg_texture;
                this.tempBitmap.texture = this.bg_texture;
                this.bg_container.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchEventHandler, this);
                this.bg_container.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEventHandler, this);
                break;
        }
    };
    return GraphicsGuaguale2;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsGuaguale2,'GraphicsGuaguale2');
