/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawRectMore extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot(): void {

        let sp = new egret.Shape();
        this.addChild(sp);
        let g = sp.graphics;

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 10; j++) {
                g.beginFill(0xFFFFFF);
                g.drawRect(i * 13, j * 10, 10, 2);
                g.endFill();
            }
        }
        this.addChild(sp);
    }

}

