class TextInputNormal extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        this.testUrl();
    }

    private testUrl():void {
        var text = new egret.gui.TextInput();
        text.text = "sdfsdsdff";
        text.width = 200;
        text.height = 30;
        text.addEventListener(egret.Event.CHANGE, function(e) {
            console.log(text.text);
        }, this);


        var ui = new egret.gui.UIAsset();
        ui.x = ui.y = 100;
        ui.source = text;
        this.addChild(ui);
    }
}
