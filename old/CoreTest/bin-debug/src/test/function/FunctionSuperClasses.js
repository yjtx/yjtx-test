/**
 * Created by yjtx on 15-7-17.
 */
var FunctionSuperClasses = (function (_super) {
    __extends(FunctionSuperClasses, _super);
    function FunctionSuperClasses() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = FunctionSuperClasses.prototype;
    __egretProto__.init = function () {
        var b = new B();
    };
    return FunctionSuperClasses;
})(egret.DisplayObjectContainer);
FunctionSuperClasses.prototype.__class__ = "FunctionSuperClasses";
var A = (function () {
    function A() {
        this.a = 1;
        this.init();
    }
    var __egretProto__ = A.prototype;
    __egretProto__.init = function () {
    };
    return A;
})();
A.prototype.__class__ = "A";
/**
 *
 * @author
 *
 */
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.call(this);
        this.b = 2;
        this.c = new C();
    }
    var __egretProto__ = B.prototype;
    __egretProto__.init = function () {
        //this.c.test();
    };
    return B;
})(A);
B.prototype.__class__ = "B";
/**
 *
 * @author
 *
 */
var C = (function () {
    function C() {
    }
    var __egretProto__ = C.prototype;
    __egretProto__.test = function () {
        console.log(">>>>");
    };
    return C;
})();
C.prototype.__class__ = "C";
