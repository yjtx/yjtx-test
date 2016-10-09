/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsGradientFill extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        this.testDrawArc1();
        this.testDrawArc2();
    }

    private testDrawArc1():void {
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);

        var matrix:egret.Matrix = new egret.Matrix();
        matrix.createGradientBox(300, 100);
        matrix.rotate(Math.PI / 2);

        shape.graphics.beginGradientFill(egret.GradientType.LINEAR, [0xff0000, 0xffff00, 0xff00ff], [1, 1, 1], [0,127,255], matrix);
        shape.graphics.drawRect(0, 0, 300, 300);
        shape.graphics.endFill();
    }

    private testDrawArc2():void {
        var shape:egret.Shape = new egret.Shape();
        this.addChild(shape);
        shape.y = 400;

        var matrix:egret.Matrix = new egret.Matrix();
        matrix.createGradientBox(300, 300);
        matrix.rotate(Math.PI / 2);

        shape.graphics.beginGradientFill(egret.GradientType.RADIAL, [0xff0000, 0xffff00, 0xff00ff], [1, 1, 1], [0,127,255]);
        shape.graphics.drawRect(0, 0, 300, 300);
        shape.graphics.endFill();
    }
}