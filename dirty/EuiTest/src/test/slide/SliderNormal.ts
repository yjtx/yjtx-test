//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}

class SliderNormal extends eui.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testUrl, this, this.stage, ["resource/test/SliderNormal.exml"]);
    }

    private testUrl():void {
        var ui = utils.createClass("components.SliderNormal");
        this.addChild(ui);
    }
}
