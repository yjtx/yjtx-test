/**
 * Created by yjtx on 15-7-10.
 */
var GraphicsGradientFill = (function (_super) {
    __extends(GraphicsGradientFill, _super);
    function GraphicsGradientFill() {
        _super.call(this);
    }
    var d = __define,c=GraphicsGradientFill,p=c.prototype;
    p.initRoot = function () {
        this.testDrawArc1();
        this.testDrawArc2();
    };
    p.testDrawArc1 = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        var matrix = new egret.Matrix();
        matrix.createGradientBox(300, 100);
        matrix.rotate(Math.PI / 2);
        shape.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xff0000, 0xffff00, 0xff00ff], [1, 1, 1], [0, 127, 255], matrix);
        shape.graphics.drawRect(0, 0, 300, 300);
        shape.graphics.endFill();
    };
    p.testDrawArc2 = function () {
        var shape = new egret.Shape();
        this.addChild(shape);
        shape.y = 400;
        var matrix = new egret.Matrix();
        matrix.createGradientBox(300, 300);
        matrix.rotate(Math.PI / 2);
        shape.graphics.beginGradientFill(egret.GradientType.RADIAL, [0xff0000, 0xffff00, 0xff00ff], [1, 1, 1], [0, 127, 255]);
        shape.graphics.drawRect(0, 0, 300, 300);
        shape.graphics.endFill();
    };
    return GraphicsGradientFill;
}(EntryDisplayObjectContainer));
egret.registerClass(GraphicsGradientFill,'GraphicsGradientFill');
