/**
 * Created by yjtx on 15-6-23.
 */

class EventAddedAndRemoved extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var s1:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var s2:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var s3:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        
        this.addChild(s1);
        s1.addChild(s2);
        s2.addChild(s3);

        s1.addEventListener(egret.Event.ADDED, function (e:egret.Event) {
            console.log("added: " + (e.target == s3));
        }, this);

        s1.addEventListener(egret.Event.REMOVED, function (e:egret.Event) {
            console.log("removed: " + (e.target == s3));
        }, this);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            s3.parent ? s3.parent.removeChild(s3) : s2.addChild(s3);
        }, this);

    }   
}
