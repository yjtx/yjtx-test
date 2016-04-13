/**
 * Created by yjtx on 15-6-23.
 */
var EventBoyAndGirl = (function (_super) {
    __extends(EventBoyAndGirl, _super);
    function EventBoyAndGirl() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=EventBoyAndGirl,p=c.prototype;
    p.init = function () {
        //创建一个男朋友
        var boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
        egret.log("11111");
        //男朋友发送要求
        boy.order();
        egret.log("22222");
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
    };
    return EventBoyAndGirl;
}(egret.DisplayObjectContainer));
egret.registerClass(EventBoyAndGirl,'EventBoyAndGirl');
var Boy = (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        _super.call(this);
    }
    var d = __define,c=Boy,p=c.prototype;
    p.order = function () {
        //生成约会事件对象
        var daterEvent = new DateEvent(DateEvent.DATE);
        //添加对应的约会信息
        daterEvent._year = 2014;
        daterEvent._month = 8;
        daterEvent._date = 2;
        daterEvent._where = "肯德基";
        daterEvent._todo = "共进晚餐";
        //发送要求事件
        this.dispatchEvent(daterEvent);
    };
    return Boy;
}(egret.Sprite));
egret.registerClass(Boy,'Boy');
var Girl = (function (_super) {
    __extends(Girl, _super);
    function Girl() {
        _super.call(this);
    }
    var d = __define,c=Girl,p=c.prototype;
    p.getDate = function (evt) {
        console.log("得到了" + evt.target.name + "的邀请！");
        console.log("会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在" + evt._where + evt._todo);
    };
    return Girl;
}(egret.Sprite));
egret.registerClass(Girl,'Girl');
var DateEvent = (function (_super) {
    __extends(DateEvent, _super);
    function DateEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        this._year = 0;
        this._month = 0;
        this._date = 0;
        this._where = "";
        this._todo = "";
    }
    var d = __define,c=DateEvent,p=c.prototype;
    DateEvent.DATE = "约会";
    return DateEvent;
}(egret.Event));
egret.registerClass(DateEvent,'DateEvent');
