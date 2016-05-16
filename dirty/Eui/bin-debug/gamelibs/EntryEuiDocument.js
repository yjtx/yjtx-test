/**
 * Created by yjtx on 15-11-11.
 */
var EntryEuiDocument = (function (_super) {
    __extends(EntryEuiDocument, _super);
    function EntryEuiDocument(groups) {
        _super.call(this);
        this.groups = groups;
    }
    var d = __define,c=EntryEuiDocument,p=c.prototype;
    p.createChildren = function () {
        _super.prototype.createChildren.call(this);
        if (this.groups == null || this.groups.length == 0) {
            this.initRoot();
        }
        else {
            new LoadResources(this.initRoot, this, this.groups[0], this.stage, this.stage.textureScaleFactor);
        }
    };
    p.initRoot = function () {
        egret.error("请重写此方法");
    };
    return EntryEuiDocument;
}(eui.Component));
egret.registerClass(EntryEuiDocument,'EntryEuiDocument');
