/**
 * Created by yjtx on 15-6-23.
 */

class StageRegionPolicy extends EntryDisplayObjectContainer {
    public constructor() {
        super(["bitmap"]);
    }

    protected initRoot():void {
        var texture:egret.Texture = RES.getRes("img_scale9_png");
        var icon:egret.Bitmap = new egret.Bitmap();
        icon.texture = texture;
        this.addChild(icon);
        icon.scaleX = icon.scaleY = 1.5;

        this.stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.OFF;

    }
}

