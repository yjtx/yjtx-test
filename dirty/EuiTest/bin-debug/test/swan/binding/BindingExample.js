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
        eui.Binding.bindProperty(this, ["porp"], this, "porp2");
        eui.Binding.bindHandler(this, ["porp"], this.watcherHander, this);
        this.porp = 666;
        this.porp = 123;
    }
    var d = __define,c=BindingExample;p=c.prototype;
    p.watcherHander = function (value) {
        console.log("watcherHander:", value, this.porp, this.porp2);
    };
    return BindingExample;
})(egret.DisplayObjectContainer);
egret.registerClass(BindingExample,"BindingExample");
