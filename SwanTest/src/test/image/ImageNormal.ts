//declare module components{
//    export class ListGroup extends swan.Group{
//
//    }
//}

class ImageNormal extends swan.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/ImageNormal.exml"]);
    }

    private testUrl():void {
        var ui = utils.createClass("components.ImageNormal");
        this.addChild(ui);
    }
}
