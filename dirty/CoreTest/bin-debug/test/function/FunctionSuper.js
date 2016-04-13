/**
 * Created by yjtx on 15-7-17.
 */
var FunctionSuper = (function (_super) {
    __extends(FunctionSuper, _super);
    function FunctionSuper() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=FunctionSuper,p=c.prototype;
    p.init = function () {
        var a = new A5();
        console.log(a.a);
        a.a = 4;
        console.log(a.a);
        a.b = 1000;
        console.log(a.c);
    };
    return FunctionSuper;
}(egret.DisplayObjectContainer));
egret.registerClass(FunctionSuper,'FunctionSuper');
var A1 = (function () {
    function A1() {
        this._a = 1;
    }
    var d = __define,c=A1,p=c.prototype;
    d(p, "a"
        ,function () {
            console.log("get  a 1");
            return this._a;
        }
        ,function (value) {
            console.log("set  a 1");
            this._a = value;
        }
    );
    d(p, "b",undefined
        ,function (value) {
        }
    );
    d(p, "c"
        ,function () {
            return 1;
        }
    );
    p.getB = function (v1, v2, v3) {
    };
    return A1;
}());
egret.registerClass(A1,'A1');
var A2 = (function (_super) {
    __extends(A2, _super);
    function A2() {
        _super.apply(this, arguments);
    }
    var d = __define,c=A2,p=c.prototype;
    return A2;
}(A1));
egret.registerClass(A2,'A2');
var A3 = (function (_super) {
    __extends(A3, _super);
    function A3() {
        _super.apply(this, arguments);
    }
    var d = __define,c=A3,p=c.prototype;
    d(p, "a"
        ,function () {
            console.log("get  a 3");
            return egret.superGetter(A3, this, "a");
        }
        ,function (value) {
            console.log("set  a 3");
            egret.superSetter(A3, this, "a", value);
        }
    );
    return A3;
}(A2));
egret.registerClass(A3,'A3');
var A4 = (function (_super) {
    __extends(A4, _super);
    function A4() {
        _super.apply(this, arguments);
    }
    var d = __define,c=A4,p=c.prototype;
    return A4;
}(A3));
egret.registerClass(A4,'A4');
var A5 = (function (_super) {
    __extends(A5, _super);
    function A5() {
        _super.apply(this, arguments);
    }
    var d = __define,c=A5,p=c.prototype;
    d(p, "a"
        ,function () {
            console.log("get  a 5");
            return egret.superGetter(A5, this, "a");
        }
        ,function (value) {
            console.log("set  a 5");
            egret.superSetter(A5, this, "a", value);
        }
    );
    p.getB = function (v1, v2, v3) {
        return _super.prototype.getB.call(this, v1, v2, v3);
    };
    d(p, "b",undefined
        ,function (value) {
            console.log(10);
            egret.superSetter(A5, this, "b", 10);
        }
    );
    d(p, "c"
        ,function () {
            return 2;
        }
    );
    return A5;
}(A4));
egret.registerClass(A5,'A5');
