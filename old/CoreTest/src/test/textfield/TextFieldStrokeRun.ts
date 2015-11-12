/**
 * Created by yjtx on 15-6-23.
 */

class TextFieldStrokeRun extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
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

