//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}

class LabelNormal extends eui.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testUrl();
    }

    private testUrl():void {
        var ui = new eui.Label();
        ui.text = "sdfsdf";
        this.addChild(ui);
    }
}
