/**
 * Created by yjtx on 15-7-10.
 */
var BlendModeErase = (function (_super) {
    __extends(BlendModeErase, _super);
    function BlendModeErase() {
        _super.call(this);
    }
    var __egretProto__ = BlendModeErase.prototype;
    __egretProto__.initRoot = function () {
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
        this.addChild(container);
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(container);
        var bitmap = new egret.Bitmap();
        bitmap.texture = renderTexture;
        this.addChild(bitmap);
        bitmap.touchEnabled = true;
        //bitmap.pixelHitTest = true;
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log(e.type);
        }, this);
    };
    return BlendModeErase;
})(EntryDisplayObjectContainer);
BlendModeErase.prototype.__class__ = "BlendModeErase";
