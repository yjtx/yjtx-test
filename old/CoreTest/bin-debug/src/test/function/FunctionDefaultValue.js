/**
 * Created by yjtx on 15-7-7.
 */
var FunctionDefaultValue = (function (_super) {
    __extends(FunctionDefaultValue, _super);
    function FunctionDefaultValue() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = FunctionDefaultValue.prototype;
    __egretProto__.init = function () {
        var tf = new TestFunction();
        tf.initNumber(10);
        console.log("number default values:");
        console.log(tf.toString());
        tf.initBoolean(true);
        console.log("boolean default values:");
        console.log(tf.toString());
        tf.initString("a");
        console.log("string default values:");
        console.log(tf.toString());
    };
    return FunctionDefaultValue;
})(egret.DisplayObjectContainer);
FunctionDefaultValue.prototype.__class__ = "FunctionDefaultValue";
var TestFunction = (function () {
    function TestFunction() {
    }
    var __egretProto__ = TestFunction.prototype;
    __egretProto__.initNumber = function (a, b, c) {
        if (c === void 0) { c = 10; }
        this.a = a;
        this.b = b;
        this.c = c;
    };
    __egretProto__.initBoolean = function (a, b, c) {
        if (c === void 0) { c = true; }
        this.a = a;
        this.b = b;
        this.c = c;
    };
    __egretProto__.initString = function (a, b, c) {
        if (c === void 0) { c = "c"; }
        this.a = a;
        this.b = b;
        this.c = c;
    };
    __egretProto__.toString = function () {
        var str = "";
        str += ("a=" + this.a + "  ");
        str += ("b=" + this.b + "  ");
        str += ("c=" + this.c + "  ");
        return str;
    };
    return TestFunction;
})();
TestFunction.prototype.__class__ = "TestFunction";
