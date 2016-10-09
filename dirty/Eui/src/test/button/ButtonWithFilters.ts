/**
 * Created by yjtx on 15-11-12.
 */
class ButtonWithFilters extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

    }

    protected initRoot():void {
        var bmp = new egret.Bitmap(RES.getRes("close_png"));
        this.addChild(bmp);
        //颜色矩阵数组
        var colorMatrix = [
            0.3,0.6,0,0,0,
            0.3,0.6,0,0,0,
            0.3,0.6,0,0,0,
            0,0,0,1,0
        ];
        bmp.x = 200;
        bmp.y = 200;
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        bmp.filters = [colorFlilter];
        
        var button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
    }
}
