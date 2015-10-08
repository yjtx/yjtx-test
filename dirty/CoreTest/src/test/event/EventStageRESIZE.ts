/**
 * Created by yjtx on 15-6-23.
 */

class EventStageRESIZE extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {

        console.log("11111")
        this.stage.addEventListener(egret.Event.RESIZE, function (e:egret.Event) {
            console.log("22222")
        }, this);

    }
}
