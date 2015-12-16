/**
 * Created by SmallAiTT on 2015/10/12.
 */
var arm;
(function (arm) {
    arm.factory = new arm.ArmFactory();
    var Arm = (function () {
        function Arm() {
        }
        var d = __define,c=Arm;p=c.prototype;
        return Arm;
    })();
    arm.Arm = Arm;
    egret.registerClass(Arm,"arm.Arm");
    base.testBase1();
})(arm || (arm = {}));
