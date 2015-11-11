/**
 * Created by yjtx on 15-11-11.
 */
class EntryDisplayObjectContainer extends egret.DisplayObjectContainer {

    private groups:string[];
    constructor(groups?:string[]) {
        super();

        this.groups = groups;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initHandler, this);
    }


    private initHandler():void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initHandler, this);

        if (this.groups == null || this.groups.length == 0) {
            this.initRoot();
        }
        else {
            new LoadResources(this.initRoot, this, this.groups[0], this.stage.textureScaleFactor);
        }
    }

    protected initRoot():void {
        egret.error("请重写此方法");
    }
}