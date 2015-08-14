/**
 * @language en_US
 * The following example uses the class WatcherExample to show how to
 * defines utility method that you can use with bindable properties.
 */
/**
 * @language zh_CN
 * 以下示例使用 WatcherExample 类来说明如何监视绑定属性的改变
 */
var WatcherExample = (function (_super) {
    __extends(WatcherExample, _super);
    function WatcherExample() {
        _super.call(this);
        this.porp = 789;
        swan.Watcher.watch(this, ["porp"], this.watcherHander, this);
        this.porp = 666;
        this.porp = 123;
    }
    var __egretProto__ = WatcherExample.prototype;
    __egretProto__.watcherHander = function (value) {
        console.log("watcherHander:", value, this.porp);
    };
    return WatcherExample;
})(egret.DisplayObjectContainer);
WatcherExample.prototype.__class__ = "WatcherExample";
egret.registerClass(WatcherExample,"WatcherExample");
