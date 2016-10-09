/**
 * Created by yjtx on 15-7-17.
 */
var FunctionTransmit = (function (_super) {
    __extends(FunctionTransmit, _super);
    function FunctionTransmit() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=FunctionTransmit,p=c.prototype;
    p.init = function () {
        var trans = new TestFunctionTransmit1();
        trans.callback = this.test;
        trans.run();
        var trans = new TestFunctionTransmit1();
        trans.callback = this.test.bind(this);
        trans.run();
    };
    p.test = function (a) {
        egret.log(a);
        console.dir(this);
    };
    return FunctionTransmit;
}(egret.DisplayObjectContainer));
egret.registerClass(FunctionTransmit,'FunctionTransmit');
var TestFunctionTransmit1 = (function () {
    function TestFunctionTransmit1() {
    }
    var d = __define,c=TestFunctionTransmit1,p=c.prototype;
    p.run = function () {
        var self = this;
        egret.setTimeout(function () {
            self.callback(111);
        }, this, 3000);
    };
    return TestFunctionTransmit1;
}());
egret.registerClass(TestFunctionTransmit1,'TestFunctionTransmit1');
