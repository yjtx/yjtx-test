/**
 * Created by yjtx on 15-7-10.
 */
var TickerLoadingUse = (function (_super) {
    __extends(TickerLoadingUse, _super);
    function TickerLoadingUse() {
        _super.call(this);
        egret.setTimeout(function () {
            console.log("timeout");
            egret.Ticker.getInstance().register(f, this);
        }, this, 2000);
        var key = egret.setInterval(function () {
            console.log("setInterval");
            egret.clearInterval(key);
        }, this, 3000);
        var count = 0;
        var f = function (dt) {
            console.log("dfTicker:" + dt);
            count++;
            if (count >= 10) {
                egret.Ticker.getInstance().unregister(f, this);
            }
        };
        var timeout = egret.setTimeout(function () {
            throw "error";
        }, this, 100);
    }
    var __egretProto__ = TickerLoadingUse.prototype;
    return TickerLoadingUse;
})(egret.DisplayObjectContainer);
TickerLoadingUse.prototype.__class__ = "TickerLoadingUse";
