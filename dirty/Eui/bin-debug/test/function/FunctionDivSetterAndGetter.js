/**
 * Created by yjtx on 15-11-12.
 */
var FunctionDivSetterAndGetter = (function (_super) {
    __extends(FunctionDivSetterAndGetter, _super);
    function FunctionDivSetterAndGetter() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=FunctionDivSetterAndGetter,p=c.prototype;
    p.initRoot = function () {
        this.addChild(new Seat());
    };
    return FunctionDivSetterAndGetter;
}(EntryEuiDocument));
egret.registerClass(FunctionDivSetterAndGetter,'FunctionDivSetterAndGetter');
var Seat = (function (_super) {
    __extends(Seat, _super);
    function Seat() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=Seat,p=c.prototype;
    p.init = function () {
        this.skinName = components.SeatSkin;
    };
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    return Seat;
}(eui.Component));
egret.registerClass(Seat,'Seat');
var UserInfoView = (function (_super) {
    __extends(UserInfoView, _super);
    function UserInfoView() {
        _super.call(this);
        this._b11111 = 0;
    }
    var d = __define,c=UserInfoView,p=c.prototype;
    d(p, "b11111"
        ,function () {
            return this._b11111;
        }
        ,function (value) {
            this._b11111 = value;
        }
    );
    d(p, "isMaster"
        ,function () {
            console.log("ssssss");
            return true; //this.imgMaster.visible;
        }
        ,function (value) {
            this.imgMaster.visible = value;
        }
    );
    return UserInfoView;
}(eui.Component));
egret.registerClass(UserInfoView,'UserInfoView');
