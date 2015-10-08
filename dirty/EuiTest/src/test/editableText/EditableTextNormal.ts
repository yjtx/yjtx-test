//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}

class EditableTextNormal extends eui.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testUrl();
    }

    private testUrl():void {
        var ui = new eui.EditableText();
        ui.width = 300;
        ui.height = 100;
        ui.border = true;
        this.addChild(ui);
    }
}
