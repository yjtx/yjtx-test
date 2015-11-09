/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldStrokeRun extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testNormal();
    }

    private testNormal():void {
        var textfield1 = new egret.TextField();
        textfield1.text = "点击左边stroke-1点击右边stroke+1";
        textfield1.stroke = 1;
        textfield1.strokeColor = 0xff0000;
        this.addChild(textfield1);

        egret.Tween.get(textfield1, {"loop":true}).to({"y" : 300}, 4000).to({"y" : 10}, 4000);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e:egret.TouchEvent) {
            if (e.stageX < this.stage.stageWidth / 2) {
                textfield1.stroke -= 1;
            }
            else {
                textfield1.stroke += 1;
            }
        }, this);
    }
}

