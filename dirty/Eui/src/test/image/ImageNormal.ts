/**
 * Created by yjtx on 15-11-12.
 */
class ImageNormal extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

        this.addEventListener(eui.UIEvent.COMPLETE, this.onCompleteHandler, this);
    }

    private onCompleteHandler(e:eui.UIEvent):void {
        console.log(e.type);
    }

    protected initRoot():void {
        this.skinName = "ImageNormalSkin";

        var loadingBg:eui.Image = new eui.Image(RES.getRes("checkbox_select_down_png"));
        this.addChild(loadingBg);
        console.log(loadingBg.width);
        console.log(loadingBg.width);
    }
}
