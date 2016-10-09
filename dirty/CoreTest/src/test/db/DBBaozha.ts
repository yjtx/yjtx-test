/**
 * Created by yjtx on 15-6-23.
 */

class DBBaozha extends EntryDisplayObjectContainer {
    public constructor() {
        super(["dbs"]);
    }

    protected initRoot():void {
        //眼睛有bug
        var container = new egret.DisplayObjectContainer();

        this.addChild(container);
        container.x = 50;
        
        var skeletonData = RES.getRes("baozhaxiaoguo_ske_json");
        var textureData = RES.getRes("baozhaxiaoguo_texture_json");
        var texture = RES.getRes("baozhaxiaoguo_texture_png");

        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));

        var armature = factory.buildArmature("baozha");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 240;
        armatureDisplay.y = 300;
        armature.animation.gotoAndPlay("baozha", 0);

        egret.Ticker.getInstance().register(function (advancedTime):boolean {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);

    }

}

