//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}

class ButtonOK extends swan.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/ButtonOK.exml"]);
    }

    private testUrl():void {
        var ui = utils.createClass("components.OKButton");
        this.addChild(ui);
    }
}
