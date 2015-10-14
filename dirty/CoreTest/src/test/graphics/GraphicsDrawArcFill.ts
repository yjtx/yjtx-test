/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawArcFill extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.test(100, 2);

        this.test(300, 1);
    }

    private test(x, total):void {
        var textField = new egret.TextField();
        this.addChild(textField);
        textField.y = 300;
        textField.x = x;
        textField.text = "Loading..." + 10 + "/" + 100;

        var count = 0;
        var f = function(dt):boolean {
            count++;
            if (count >= total) {

                egret.stopTick(f, this);

                this.removeChild(textField);

                var g = new egret.Shape();
                g.x = x;
                g.y = 200;
                g.graphics.beginFill(0xffff00);
                g.graphics.lineStyle(21, 0xffff00);
                g.graphics.drawArc(0, 0, 100, 0, 0.5);
                g.graphics.endFill();
                this.addChild(g);
            }
            return true;
        };

        egret.startTick(f, this);
    }
}

