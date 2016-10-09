/**
 * Created by yjtx on 15-11-12.
 */
class SkinButton extends EntryEuiDocument {
    constructor() {
        super(["preload"]);
        
        this.addEventListener(egret.IOErrorEvent.IO_ERROR, function(e){
            console.log(e);
        }, this);
        this.skinName = "resource/test_skins/SkinButtonSkin111.exml";
    }

    protected initRoot():void {

    }
}
