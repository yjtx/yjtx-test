/**
 * Created by yjtx on 15-11-12.
 */
class ImageExmlIn extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

    }

    protected initRoot():void {

        var exml =
	         `
<e:Image class="MyImage" xmlns:e="http://ns.egret.com/eui" source="close_png" width="160" height="100" scale9Grid="16,16,84,30"/>
    `;
        var clazz = EXML.parse(exml);
        var ui = new clazz();
        this.addChild(ui);
    }
}
