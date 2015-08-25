/**
 * Created by yjtx on 15-7-10.
 */
var TickerLoadingUse = (function (_super) {
    __extends(TickerLoadingUse, _super);
    function TickerLoadingUse() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = TickerLoadingUse.prototype;
    __egretProto__.init = function () {
        alert("right ");
    };
    return TickerLoadingUse;
})(egret.DisplayObjectContainer);
TickerLoadingUse.prototype.__class__ = "TickerLoadingUse";
egret.registerClass(TickerLoadingUse,"TickerLoadingUse");
/*

egret.setTimeout(function () {
    console.log("timeout")
}, this, 2000);

var key = egret.setInterval(function () {
    console.log("setInterval")

    egret.clearInterval(key);
}, this, 3000);*/
