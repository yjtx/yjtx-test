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
        eui.Watcher.watch(this, ["porp"], this.watcherHander, this);
        this.porp = 666;
        this.porp = 123;
    }
    var d = __define,c=WatcherExample;p=c.prototype;
    p.watcherHander = function (value) {
        console.log("watcherHander:", value, this.porp);
    };
    return WatcherExample;
})(egret.DisplayObjectContainer);
egret.registerClass(WatcherExample,"WatcherExample");
