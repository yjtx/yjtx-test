/**
 * Created by yjtx on 15-7-10.
 */
var MaskArcCircleRun = (function (_super) {
    __extends(MaskArcCircleRun, _super);
    function MaskArcCircleRun() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=MaskArcCircleRun,p=c.prototype;
    p.initRoot = function () {
        var sky = new egret.Bitmap(RES.getRes("bg_jpg"));
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        this.testDrawArc("progressTime_png", 200, 100);
        this.testDrawArc("progressCircle_png", 200, 300);
    };
    p.testDrawArc = function (key, x, y) {
        var bitmap = new egret.Bitmap(RES.getRes(key));
        this.addChild(bitmap);
        bitmap.x = x;
        bitmap.y = y;
        bitmap.width = bitmap.height = 140;
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.x = bitmap.x + bitmap.width / 2;
        shape.y = bitmap.y + bitmap.height / 2;
        bitmap.mask = shape;
        var angle = 0;
        egret.setInterval(function () {
            angle += 2;
            changeGraphics(angle);
            angle = angle % 360;
        }, this, 16);
        function changeGraphics(angle) {
            shape.graphics.clear();
            shape.graphics.beginFill(0x00ffff, 1);
            shape.graphics.lineTo(100, 0);
            shape.graphics.drawArc(0, 0, 100, 0, angle * Math.PI / 180, false);
            shape.graphics.lineTo(0, 0);
            shape.graphics.endFill();
        }
    };
    return MaskArcCircleRun;
})(EntryDisplayObjectContainer);
egret.registerClass(MaskArcCircleRun,'MaskArcCircleRun');
