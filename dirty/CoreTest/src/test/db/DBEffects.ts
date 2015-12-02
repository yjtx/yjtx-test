/**
 * Created by yjtx on 15-6-23.
 */

class DBEffects extends EntryDisplayObjectContainer {
    public constructor() {
        super(["dbs"]);
    }

    protected initRoot():void {
        //眼睛有bug
        var container = new egret.DisplayObjectContainer();

        this.addChild(container);
        container.x = 50;
        
        var skeletonData = RES.getRes("effects_ske_json");
        var textureData = RES.getRes("effects_texture_json");
        var texture = RES.getRes("effects_texture_png");

        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));

        var armature = factory.buildArmature("putongchang");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 100;
        armatureDisplay.y = 100;
        armature.animation.gotoAndPlay("putongchang");

        egret.Ticker.getInstance().register(function (advancedTime):boolean {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);

        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e:egret.TouchEvent) {
            console.log(egret.getQualifiedClassName(e.currentTarget));
        }, this);
    }

}

