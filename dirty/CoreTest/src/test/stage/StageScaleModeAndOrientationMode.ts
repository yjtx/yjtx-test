/**
 * Created by yjtx on 15-6-23.
 */

class StageScaleModeAndOrientationMode extends EntryDisplayObjectContainer {
    public constructor() {
        super(["scaleMode"]);
    }

    protected initRoot():void {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        this.addChild(c);

        c.addChild(this.getGame());
        c.addChild(this.getScreen());

        c.scaleX = c.scaleY = 0.5;
        c.x = 20;
        c.y = 120;


    }


    private getScreen():egret.DisplayObjectContainer {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        //522 956   240 426
        var bitmap:egret.Bitmap = new egret.Bitmap(RES.getRes("phone_png"));

        bitmap.width = bitmap.texture.textureWidth - (480 - 480) / 2;
        bitmap.height = bitmap.texture.textureHeight - (900 - 720) / 2;

        c.addChild(bitmap);
        bitmap.x = -19;
        bitmap.y = -38;

        c.alpha = 0.7;
        return c;
    }

    private getGame():egret.DisplayObjectContainer {
        var c:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
        var bg:egret.Bitmap = new egret.Bitmap(RES.getRes("bg_jpg"));
        bg.width = 480;
        bg.height = 800;
        c.addChild(bg);

        var icon:egret.Bitmap = new egret.Bitmap(RES.getRes("egret_icon_png"));
        c.addChild(icon);
        icon.scaleX = icon.scaleY = 0.5;

        icon.x = bg.width / 2 - icon.width * icon.scaleX / 2;
        icon.y = bg.height / 2 - icon.height * icon.scaleY / 2;

        return c;
    }

}

