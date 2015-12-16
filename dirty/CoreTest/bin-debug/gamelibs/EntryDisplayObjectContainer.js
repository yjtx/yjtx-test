/**
 * Created by yjtx on 15-11-11.
 */
var EntryDisplayObjectContainer = (function (_super) {
    __extends(EntryDisplayObjectContainer, _super);
    function EntryDisplayObjectContainer(groups) {
        _super.call(this);
        this.groups = groups;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initHandler, this);
    }
    var d = __define,c=EntryDisplayObjectContainer,p=c.prototype;
    p.initHandler = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initHandler, this);
        if (this.groups == null || this.groups.length == 0) {
            this.initRoot();
        }
        else {
            new LoadResources(this.initRoot, this, this.groups[0], this.stage.textureScaleFactor);
        }
    };
    p.initRoot = function () {
        egret.error("请重写此方法");
    };
    return EntryDisplayObjectContainer;
})(egret.DisplayObjectContainer);
egret.registerClass(EntryDisplayObjectContainer,'EntryDisplayObjectContainer');
