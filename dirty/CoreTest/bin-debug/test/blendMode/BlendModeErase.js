/**
 * Created by yjtx on 15-7-10.
 */
var BlendModeErase = (function (_super) {
    __extends(BlendModeErase, _super);
    function BlendModeErase() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=BlendModeErase,p=c.prototype;
    p.initRoot = function () {
        var sky = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var container = new egret.DisplayObjectContainer();
        container.width = 300;
        container.height = 300;
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 1);
        shape.graphics.drawRect(0, 0, 300, 300);
        shape.graphics.endFill();
        container.addChild(shape);
        var erase = new egret.Shape();
        erase.graphics.beginFill(0x000000, 1);
        erase.graphics.drawCircle(50, 50, 50);
        erase.graphics.endFill();
        container.addChild(erase);
        erase.x = 200;
        erase.y = 200;
        erase.blendMode = egret.BlendMode.ERASE;
        //this.addChild(container);
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(container);
        var bitmap = new egret.Bitmap();
        bitmap.texture = renderTexture;
        this.addChild(bitmap);
        bitmap.y = 350;
        bitmap.touchEnabled = true;
        bitmap.pixelHitTest = true;
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log(e.type);
        }, this);
    };
    return BlendModeErase;
}(EntryDisplayObjectContainer));
egret.registerClass(BlendModeErase,'BlendModeErase');
