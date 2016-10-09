var ContainerAddRemoved = (function (_super) {
    __extends(ContainerAddRemoved, _super);
    function ContainerAddRemoved() {
        _super.call(this);
    }
    var d = __define,c=ContainerAddRemoved,p=c.prototype;
    p.initRoot = function () {
        for (var i = 0; i < 5; i++) {
            var text = new egret.TextField();
            text.text = "ddd " + i;
            this.addChild(text);
            text.x = 100;
            text.y = 100 + i * 60;
        }
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapHandler, this);
        var child = this.getChildAt(2);
        child.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemovedFromStage, this);
        child.addEventListener(egret.Event.REMOVED, this.onRemoved, this);
        this.addEventListener(egret.Event.REMOVED, this.onRemoved, this);
    };
    p.onTapHandler = function () {
        console.log("numChildren: " + this.numChildren);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapHandler, this);
        var child = this.getChildAt(2);
        this.removeChild(child);
    };
    p.onRemovedFromStage = function (e) {
        console.log("onRemovedFromStage: ");
        console.log(e.target);
    };
    p.onRemoved = function (e) {
        console.log("onRemoved: ");
        console.log(e.target);
        console.log(e.currentTarget);
        console.log("numChildren: " + this.numChildren);
        egret.callLater(function () {
            console.log("numChildren: " + this.numChildren);
        }, this);
    };
    return ContainerAddRemoved;
}(EntryDisplayObjectContainer));
egret.registerClass(ContainerAddRemoved,'ContainerAddRemoved');
