/**
 * Created by yjtx on 15-11-12.
 */
class PanelWithButton extends EntryEuiDocument {
    constructor() {
        super(["preload"]);
    }

    protected initRoot():void {
        var panel = new eui.Panel();
        panel.skin
        panel.title = "标题";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;   
        this.addChild(panel);
        
        var btn:eui.Button=new eui.Button();
        panel.closeButton=btn;
        btn.label="关闭";
        panel.addChild(btn);
        btn.x = 300;
            
            
        // var panel = new eui.Panel();
        // panel.title = "标题";
        // panel.horizontalCenter = 0;
        // panel.verticalCenter = 0;
        // this.addChild(panel);
        // panel.closeButton.label="关闭";
    }
}
