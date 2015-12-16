/**
 * Created by yjtx on 15-7-17.
 */
var FunctionSuperClasses = (function (_super) {
    __extends(FunctionSuperClasses, _super);
    function FunctionSuperClasses() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=FunctionSuperClasses,p=c.prototype;
    p.init = function () {
        var b = new B();
    };
    return FunctionSuperClasses;
})(egret.DisplayObjectContainer);
egret.registerClass(FunctionSuperClasses,'FunctionSuperClasses');
var A = (function () {
    function A() {
        this.a = 1;
        this.init();
    }
    var d = __define,c=A,p=c.prototype;
    p.init = function () {
    };
    return A;
})();
egret.registerClass(A,'A');
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
    var d = __define,c=B,p=c.prototype;
    p.init = function () {
        //this.c.test();
    };
    return B;
})(A);
egret.registerClass(B,'B');
/**
 *
 * @author
 *
 */
var C = (function () {
    function C() {
    }
    var d = __define,c=C,p=c.prototype;
    p.test = function () {
        console.log(">>>>");
    };
    return C;
})();
egret.registerClass(C,'C');
