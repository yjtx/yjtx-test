class ListNormal extends swan.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testUrl, this, this.stage, ["resource/components/blue/ListGroup.exml"]);
    }

    private testUrl():void {
        var ui = utils.createClass("components.ListGroup");
        this.addChild(ui);
    }
}
