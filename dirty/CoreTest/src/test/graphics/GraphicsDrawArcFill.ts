/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawArcFill extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
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
                g.graphics.lineStyle(12, 0xff0000);
                g.graphics.drawArc(0, 0, 100, 0, 145*Math.PI/180);
                g.graphics.endFill();
                this.addChild(g);
            }
            return true;
        };

        egret.startTick(f, this);
    }
}

