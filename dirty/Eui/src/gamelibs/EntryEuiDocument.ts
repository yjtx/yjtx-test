/**
 * Created by yjtx on 15-11-11.
 */
class EntryEuiDocument extends eui.Component {

    private groups:string[];
    constructor(groups?:string[]) {
        super();

        this.groups = groups;
    }

    protected createChildren(): void {
        super.createChildren();

        if (this.groups == null || this.groups.length == 0) {
            this.initRoot();
        }
        else {
            new LoadResources(this.initRoot, this, this.groups[0], this.stage, this.stage.textureScaleFactor);
        }
    }
    protected initRoot():void {
        egret.error("请重写此方法");
    }
}