/**
 * Created by yjtx on 15-6-23.
 */

class StageFrameRate extends EntryDisplayObjectContainer {
    public constructor() {
        super();
    }

    protected initRoot():void {
        this.stage.frameRate = 24;

        egret.Profiler.getInstance().run();
    }
}

