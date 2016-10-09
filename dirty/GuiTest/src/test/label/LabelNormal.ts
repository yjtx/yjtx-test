class LabelNormal extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testUrl();
    }

    private testUrl():void {
        var ui = new egret.gui.Label();
        ui.text = "sdasdfdasaasdnfsdf";
        ui.width = 100;
        ui.height = 60;
        this.addChild(ui);
    }
}
