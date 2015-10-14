/**
 * Created by yjtx on 15-7-10.
 */
class TickerLoadingUse extends egret.DisplayObjectContainer {

    public constructor() {
        super();

         egret.setTimeout(function () {
            console.log("timeout")
             egret.Ticker.getInstance().register(f, this);
         }, this, 2000);

         var key = egret.setInterval(function () {
            console.log("setInterval")

            egret.clearInterval(key);
         }, this, 3000);

        var count = 0;
        var f = function(dt) {
            console.log("dfTicker:" + dt);

            count++;
            if (count >= 10) {
                egret.Ticker.getInstance().unregister(f, this);
            }
        };

        var timeout = egret.setTimeout(function () {
            throw "error"
        },this,100);
    }
}