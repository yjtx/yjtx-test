/**
 * Created by yjtx on 15-7-17.
 */
var FunctionSuper = (function (_super) {
    __extends(FunctionSuper, _super);
    function FunctionSuper() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = FunctionSuper.prototype;
    __egretProto__.init = function () {
        var a = new A5();
        console.log(a.a);
        a.a = 4;
        console.log(a.a);
    };
    return FunctionSuper;
})(egret.DisplayObjectContainer);
FunctionSuper.prototype.__class__ = "FunctionSuper";
egret.registerClass(FunctionSuper,"FunctionSuper");
var A1 = (function () {
    function A1() {
        this._a = 1;
    }
    var __egretProto__ = A1.prototype;
    Object.defineProperty(__egretProto__, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: true,
        configurable: true
    });
    __egretProto__.getB = function (v1, v2, v3) {
    };
    return A1;
})();
A1.prototype.__class__ = "A1";
egret.registerClass(A1,"A1");
var A2 = (function (_super) {
    __extends(A2, _super);
    function A2() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = A2.prototype;
    return A2;
})(A1);
A2.prototype.__class__ = "A2";
egret.registerClass(A2,"A2");
var A3 = (function (_super) {
    __extends(A3, _super);
    function A3() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = A3.prototype;
    return A3;
})(A2);
A3.prototype.__class__ = "A3";
egret.registerClass(A3,"A3");
var A4 = (function (_super) {
    __extends(A4, _super);
    function A4() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = A4.prototype;
    return A4;
})(A3);
A4.prototype.__class__ = "A4";
egret.registerClass(A4,"A4");
var A5 = (function (_super) {
    __extends(A5, _super);
    function A5() {
        _super.apply(this, arguments);
    }
    var __egretProto__ = A5.prototype;
    Object.defineProperty(__egretProto__, "a", {
        get: function () {
            //return super.a;
            return egret.superGetter(this, "a");
        },
        set: function (value) {
            //super.a = value;
            egret.superSetter(this, "a", value);
        },
        enumerable: true,
        configurable: true
    });
    __egretProto__.getB = function (v1, v2, v3) {
        return _super.prototype.getB.call(this, v1, v2, v3);
    };
    return A5;
})(A4);
A5.prototype.__class__ = "A5";
egret.registerClass(A5,"A5");
