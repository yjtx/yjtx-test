/**
 * Created by yjtx on 15-6-23.
 */
var EventAddedAndRemoved = (function (_super) {
    __extends(EventAddedAndRemoved, _super);
    function EventAddedAndRemoved() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=EventAddedAndRemoved,p=c.prototype;
    p.init = function () {
        var s1 = new egret.DisplayObjectContainer();
        var s2 = new egret.DisplayObjectContainer();
        var s3 = new egret.DisplayObjectContainer();
        this.addChild(s1);
        s1.addChild(s2);
        s2.addChild(s3);
        s1.addEventListener(egret.Event.ADDED, function (e) {
            console.log("added: " + (e.target == s3));
        }, this);
        s1.addEventListener(egret.Event.REMOVED, function (e) {
            console.log("removed: " + (e.target == s3));
        }, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            s3.parent ? s3.parent.removeChild(s3) : s2.addChild(s3);
        }, this);
    };
    return EventAddedAndRemoved;
}(egret.DisplayObjectContainer));
egret.registerClass(EventAddedAndRemoved,'EventAddedAndRemoved');
