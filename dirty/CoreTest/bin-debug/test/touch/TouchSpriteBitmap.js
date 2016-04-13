/**
 * Created by yjtx on 15-7-10.
 */
var TouchSpriteBitmap = (function (_super) {
    __extends(TouchSpriteBitmap, _super);
    function TouchSpriteBitmap() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=TouchSpriteBitmap,p=c.prototype;
    p.initRoot = function () {
        var texture = RES.getRes("egret_icon_png");
        var btn2 = new egret.Sprite();
        btn2.graphics.beginFill(0xff0000, 1);
        btn2.graphics.drawRect(0, 0, 100, 100);
        btn2.graphics.endFill();
        var img = new egret.Bitmap(texture);
        img.x = 100;
        img.y = 100;
        btn2.addChild(img);
        this.addChild(btn2);
        btn2.y = 100;
        btn2.touchEnabled = true;
        btn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log(e.stageX, e.stageY);
            console.log(btn2.hitTestPoint(e.stageX, e.stageY, true));
        }, this);
    };
    return TouchSpriteBitmap;
}(EntryDisplayObjectContainer));
egret.registerClass(TouchSpriteBitmap,'TouchSpriteBitmap');
