/**
 * Created by yjtx on 15-11-12.
 */
class ImageExmlOut extends EntryEuiDocument {
    constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var ui = new components.ImageNormal();
        this.addChild(ui);
    }
}
