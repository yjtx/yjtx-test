//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}

class EditableTextNormal extends swan.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testUrl();
    }

    private testUrl():void {
        var ui = new swan.EditableText();
        ui.width = 300;
        ui.height = 100;
        ui.border = true;
        this.addChild(ui);
    }
}
