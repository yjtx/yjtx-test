/**
 * Created by yjtx on 15-7-10.
 */
class TickerLoadingUse extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {

        alert("right ");
    }

}
/*

egret.setTimeout(function () {
    console.log("timeout")
}, this, 2000);

var key = egret.setInterval(function () {
    console.log("setInterval")

    egret.clearInterval(key);
}, this, 3000);*/
