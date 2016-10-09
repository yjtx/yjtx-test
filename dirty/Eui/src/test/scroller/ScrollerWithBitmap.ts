/**
 * Created by yjtx on 15-11-12.
 */
class ScrollerWithBitmap extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

    }

    protected initRoot(): void {
        var scroller: eui.Scroller = new eui.Scroller();
        scroller.x = 200;
        scroller.y = 200;

        var group1: eui.Group = new eui.Group();
        var group: eui.Group = new eui.Group();
        group1.addChild(group);
        var image: eui.Image = new eui.Image("checkbox_select_up_png");
        group.addChild(image);
        scroller.viewport = group1;

        this.addChild(scroller);

        scroller.width = 100;
        scroller.height = 100;

        image.width = 400;
        image.height = 400;

        group.width = 300;
        group.height = 200;

        egret.setInterval(function() {
            console.log(scroller.width + "  " + scroller.height);
            console.log(scroller.viewport.width + "  " + scroller.viewport.height);
        }, this, 3000);
    }
}

