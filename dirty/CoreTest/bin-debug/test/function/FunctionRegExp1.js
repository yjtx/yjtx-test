/**
 * Created by yjtx on 15-7-17.
 */
var FunctionRegExp1 = (function (_super) {
    __extends(FunctionRegExp1, _super);
    function FunctionRegExp1() {
        _super.call(this);
        this.argTest = function () {
            //var a:number = arguments[2];
            //console.log(a);
        };
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=FunctionRegExp1,p=c.prototype;
    p.init = function () {
        // var regx = /[a-z]{1,10}+/;
        alert("use");
    };
    return FunctionRegExp1;
}(egret.DisplayObjectContainer));
egret.registerClass(FunctionRegExp1,'FunctionRegExp1');
