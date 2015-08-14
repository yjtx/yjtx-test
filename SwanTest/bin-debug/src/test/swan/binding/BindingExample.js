/**
 * @language en_US
 * The following example uses the class BindingExample to show how to performing data binding
 */
/**
 * @language zh_CN
 * 以下示例使用 BindingExample 类来说明如何执行数据绑定
 */
var BindingExample = (function (_super) {
    __extends(BindingExample, _super);
    function BindingExample() {
        _super.call(this);
        this.porp = 789;
        this.porp2 = 456;
        swan.Binding.bindProperty(this, ["porp"], this, "porp2");
        swan.Binding.bindHandler(this, ["porp"], this.watcherHander, this);
        this.porp = 666;
        this.porp = 123;
    }
    var __egretProto__ = BindingExample.prototype;
    __egretProto__.watcherHander = function (value) {
        console.log("watcherHander:", value, this.porp, this.porp2);
    };
    return BindingExample;
})(egret.DisplayObjectContainer);
BindingExample.prototype.__class__ = "BindingExample";
egret.registerClass(BindingExample,"BindingExample");
