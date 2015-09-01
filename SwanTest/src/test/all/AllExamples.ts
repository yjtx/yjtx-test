class AllExamples extends eui.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var skins = [
            "resource/components/blue/ListGroup.exml",
            "resource/components/blue/TabBar.exml",
            "resource/components/CloseButton.exml",
            "resource/components/CancelButton.exml",
            "resource/components/MainGroup.exml"
        ];

        new LoadResources(this.testUrl, this, this.stage, skins);
    }

    private testUrl():void {
        var ui = utils.createClass("components.MainGroup");
        this.addChild(ui);
    }
}
