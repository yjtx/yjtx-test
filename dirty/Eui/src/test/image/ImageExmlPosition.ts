/**
 * Created by yjtx on 15-11-12.
 */
class ImageExmlPosition extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

    }

    protected initRoot():void {

        var exml =
	         `
<e:Image class="MyImage" xmlns:e="http://ns.egret.com/eui" source="checkbox_select_disabled_png" width="160" height="100" x="200" y="100" anchorOffsetX="202" left="100"/>
    `;
        var clazz = EXML.parse(exml);
        var ui = new clazz();
        this.addChild(ui);
    }
}
