//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}

class LabelNormalDelay extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testUrl();
    }

    private testUrl():void {
        var ui = new egret.gui.Label();
        ui.text = "11";
        this.addChild(ui);

        egret.setTimeout(function () {
            ui.text = "12313;"
        }, this, 1000);
    }
}
