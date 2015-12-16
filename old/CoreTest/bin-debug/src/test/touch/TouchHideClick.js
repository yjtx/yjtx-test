/**
 * Created by yjtx on 15-7-10.
 *
 * up 事件不会影响 最后 click target对象改变
 */
var TouchHideClick = (function (_super) {
    __extends(TouchHideClick, _super);
    function TouchHideClick() {
        _super.call(this, ["preload"]);
    }
    var __egretProto__ = TouchHideClick.prototype;
    __egretProto__.initRoot = function () {
        var self = this;
        var texture = RES.getRes("egret_icon_png");
        var icon = new egret.Bitmap(texture);
        icon.touchEnabled = true;
        this.addChild(icon);
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.drawRect(0, 0, 100, 100);
        shape.graphics.endFill();
        shape.touchEnabled = true;
        icon.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log("touch_tap");
        }, this);
        icon.x = 50;
        icon.addEventListener(egret.TouchEvent.TOUCH_END, function (e) {
            self.addChild(shape);
            shape.x = e.stageX - 50;
            shape.y = e.stageY - 50;
            egret.setTimeout(function () {
                if (shape.parent) {
                    self.removeChild(shape);
                }
            }, self, 1000);
        }, this);
    };
    return TouchHideClick;
})(EntryDisplayObjectContainer);
TouchHideClick.prototype.__class__ = "TouchHideClick";
