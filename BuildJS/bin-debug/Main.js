var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
    }
    var d = __define,c=Main;p=c.prototype;
    return Main;
})(egret.Sprite);
egret.registerClass(Main,"Main");
var TYPE;
(function (TYPE) {
    TYPE[TYPE["A"] = 1] = "A";
    TYPE[TYPE["B"] = 0x10] = "B";
})(TYPE || (TYPE = {}));
;
var CC = (function () {
    function CC() {
    }
    var d = __define,c=CC;p=c.prototype;
    CC.Type = function () {
        return;
        1 /* A */ | 16 /* B */;
    };
    return CC;
})();
egret.registerClass(CC,"CC");
